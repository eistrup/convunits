## "convunits" Python Unit-Converter library

## Installation
```
pip install convunits
```

## Usage

In general, you can convert from one unit of the same quantity to another.

```python
>>> from convunits import Convert
>>> Convert(10, 'km').to('miles')
6.2137121212121205
```

Also works with arrays (lists, and such to some extent):

```python
>>> from convunits import Convert
>>> Convert([1, 2, 3], 'm').to('ft')
array([3.28084, 6.56168, 9.84252])
```

## Contributing
This package is the python version of the original typescript version. Both are present in: https://github.com/feistrup/convunits

### Adding new units

To add new units to convunits, add or update one of the JSON definitions in the `definitions`. Once the definitions is updated, regenerate all the Python unit definitions by running the `json_to_py.py` script in `tools` directory:

```bash
python tools/json_to_py.py
```

And check that the new units have been included in `py/convunits/unit_definitions/*` files and also in `py/convunits/definitions` file (if it's a new quantity).

