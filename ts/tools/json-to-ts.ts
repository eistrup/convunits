import { join, resolve } from 'path';
import { readdirSync, readFileSync, writeFile } from 'fs';

const definitionsPath = join(resolve(__dirname, '../../definitions'));

const GENERIC_TYPECRIPT_CODE = `
    import {Unit, Quantity, UnitSystem OPERATION_IMPORTS} from "../models";
    import { Num } from '../expression';

    const units: Record<string, Unit> = {
        QUANTITY_UNITS
    };

    const quantity: Quantity = new Quantity(
      QUANTITY_NAME,
      units,
      QUANTITY_SUBQUANTITIES
    );
    
    export default quantity;
    `;

const FACTOR_OPERATION = 'FactorOperation';
const SHIFT_OPERATION = 'ShiftOperation';

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

class Unit {
    symbols;
    default;
    transformations;
    system;
}

function unitsReplacer(unitsDefinition: Record<string, Unit>): string {
    let text: string = JSON.stringify(unitsDefinition);
    Object.values(unitsDefinition).map((unit) => {
        unit.transformations.map(([opType, opValue]) => {
            const operationArray = JSON.stringify([opType, opValue]);
            let operationClass;
            if (opType === 'factor') {
                operationClass = ` new ${FACTOR_OPERATION}(new Num(${opValue})) `;
            } else if (opType === 'shift') {
                operationClass = ` new ${SHIFT_OPERATION}(new Num(${opValue})) `;
            }
            text = text.replace(operationArray, operationClass);
        });

        const unitSymbols = JSON.stringify(unit.symbols);
        const setUnitSymbols = ` new Set(${unitSymbols}) `;
        text = text.replace(unitSymbols, setUnitSymbols);
    });
    text = replaceAll(text, '"symbols"', 'symbols');
    text = replaceAll(text, '"transformation"', 'transformation');
    text = replaceAll(text, '"system"', 'system');
    text = replaceAll(text, '"imperial"', 'UnitSystem._imperial');
    text = replaceAll(text, '"metric"', 'UnitSystem._metric');
    text = text.slice(1);
    text = text.slice(0, -1);
    return text;
}

function operationImportsBasedOn(text: string) {
    let operationImports = '';
    if (text.includes(FACTOR_OPERATION)) {
        operationImports += `, ${FACTOR_OPERATION}`;
    }
    if (text.includes(SHIFT_OPERATION)) {
        operationImports += `, ${SHIFT_OPERATION}`;
    }
    return operationImports;
}

function codeGenerator(quantityName, quantitySubquantities, quantityUnits) {
    let text = GENERIC_TYPECRIPT_CODE;
    text = replaceAll(text, 'QUANTITY_NAME', quantityName);
    text = replaceAll(text, 'QUANTITY_SUBQUANTITIES', quantitySubquantities);
    text = replaceAll(text, 'QUANTITY_UNITS', quantityUnits);
    text = replaceAll(text, 'OPERATION_IMPORTS', operationImportsBasedOn(text));
    return text;
}

readdirSync(definitionsPath).forEach((file: string) => {
    const definition = JSON.parse(readFileSync(join(definitionsPath, file)).toString());

    const quantityUnits = unitsReplacer(definition['units']);
    const quantityName = JSON.stringify(definition['name']);
    const quantitySubquantities = JSON.stringify(definition.hasOwnProperty('subquantities') ? definition['subquantities'] : []);

    const quantityTypescriptCode = codeGenerator(quantityName, quantitySubquantities, quantityUnits);

    const typescriptDefinitionsPath = join(resolve(__dirname, '../src/ts-definitions'));

    writeFile(join(typescriptDefinitionsPath, definition['name'].replace(/\s/g, '') + '.ts'), quantityTypescriptCode, function (err) {
        if (err) return console.log(err);
    });
});
