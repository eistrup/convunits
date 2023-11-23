import os
import json
from glob import glob
from pathlib import Path

from yapf.yapflib.yapf_api import FormatCode


MODULE_TEMPLATE = """
\"\"\"
{quantity_name} quantity module.
\"\"\"

from convunits.models import FactorOperation, Quantity, {shift_op}Unit, UnitSystem
from convunits.expression import Num


_units = {{
{units_block}
}}

{var_name} = Quantity('{quantity_name}', _units, {subquantities})
""".lstrip()


DEFINITIONS_TEMPLATE = """
\"\"\"
Unit definitions compilation.
\"\"\"

{imports}


DEFINITIONS = [
{definitions}
]
""".lstrip()


def split_long_text(text: str, max_width=78) -> str:
    """Splits very long strings into lines based on the space character.

    For example, a line like
    ```python
    'This string has way more than eighty characters and will be chopped into two strings delimited by a line break'
    ```
    will become
    ```python
    "('This string has way more than eighty characters and will be chopped into two '\\n'strings delimited by a line break')"
    ```
    Lines that cannot be broken using the space characters and are longer than
    the max width will have the `# pylint: disable=line-too-long` string
    appended to the end.

    Args:
        text (str): Text to split
        max_width (int, optional): Maximum width of the text minus the extra
        space character. Defaults to 78.

    Returns:
        str: the input string split into lines as described above.
    """
    text = text.replace("'", "\\'")
    tokens = text.split()
    output = ''
    line = f'{tokens[0]}'

    for token in tokens[1:]:
        if len(f'{line} {token}') < max_width:
            line = f'{line} {token}'
        else:
            output += f"'{line} '"
            if len(line) > max_width:
                output += ' # pylint: disable=line-too-long'
            output += '\n'
            line = f'{token}'

    output += f"'{line}'"
    if len(line) > max_width:
        output += '  # pylint: disable=line-too-long'
    output += '\n'
    return f'({output})'


def unit_to_args(unit: dict):
    """Converts a dictionary of units into args in string format.

    For example, the following dictionary
    ```python
    {
        'symbols': ['ea'],
        'system': 'metric',
        'transformations': []
    }
    ```
    becomes
    ```python
    symbols=['ea'], system=UnitSystem.METRIC, transformations=[]
    ```
    after conversion.

    Args:
        unit: dictionary of units.

    Returns:
        str: arguments for the Unit class as string.
    """
    unit_ = {**unit}
    has_shift_op = False
    for k, v in unit.items():
        if k == 'symbols':
            unit_['symbols'] = f"{str(unit['symbols'])}"

        if k == 'system':
            unit_['system'] = 'UnitSystem.METRIC' if v == 'metric' else 'UnitSystem.IMPERIAL'

        if k == 'transformations':
            transformations = []
            for operation, value in unit['transformations']:
                if operation == 'factor':
                    transformations.append(f'FactorOperation(Num({value}))')
                else:
                    transformations.append(f'ShiftOperation(Num({value}))')
                    has_shift_op = True
            unit_['transformations'] = ', '.join(transformations)
            unit_['transformations'] = f"[{unit_['transformations']}]"

        if k == 'note':
            unit_['note'] = split_long_text(unit['note'])

    return ', '.join(f'{k}={v}' for k, v in unit_.items()), has_shift_op


if __name__ == '__main__':
    file_path = Path(os.path.dirname(os.path.abspath(__file__)))
    root_dir = (file_path / '..' / '..').resolve()
    definitions_json_path = (root_dir / 'definitions' / '*').resolve()
    definitions_output_dir = root_dir / 'py' / 'convunits' / 'unit_definitions'

    imports = []
    definitions = []

    for json_file in glob(str(definitions_json_path)):
        with open(json_file) as f:
            quantity = json.load(f)

        # Generate Unit class code for each unit in the quantity.
        units_block = []
        has_shift_op = False
        for unit_str, unit in quantity['units'].items():
            unit_args, has_shift_op_unit = unit_to_args(unit)
            units_block.append(f"    '{unit_str}': Unit({unit_args}),")
            has_shift_op |= has_shift_op_unit  # Check if this quantity needs the shift op.

        # Finalize strings for quantity code.
        quantity_name = '_'.join(quantity['name'].lower().split())
        var_name = ''.join(word.capitalize() for word in quantity['name'].split())
        units_block = '\n'.join(units_block)
        subquantities = quantity.get('subquantities', [])
        shift_op = 'ShiftOperation, ' if has_shift_op else ''

        module_code, _ = FormatCode(
            MODULE_TEMPLATE.format(
                units_block=units_block,
                var_name=var_name,
                quantity_name=quantity['name'],
                shift_op=shift_op,
                subquantities=subquantities)
            )
        with open(definitions_output_dir / f'{quantity_name}.py', 'w') as f:
            f.write(f'{module_code}\n')

        # Append quantity code to definitions file.
        imports.append(f'from convunits.unit_definitions.{quantity_name} import {var_name}')
        definitions.append(f'{var_name}')

    # Finalize strings for definitions code.
    imports_block = '\n'.join(sorted(imports))
    definitions_block = ',\n'.join(sorted(definitions))

    definitions_code, _ = FormatCode(
        DEFINITIONS_TEMPLATE.format(imports=imports_block, definitions=definitions_block)
        )
    with open(definitions_output_dir / '__init__.py', 'w') as f:
        f.write(f'{definitions_code}')

