import { join, resolve } from 'path';
import { readFileSync } from 'fs';
import { Definitions } from '../src/definitions';

describe('_unitCoverage', () => {
    const unitKeysToCover = JSON.parse(readFileSync(join(resolve(__dirname, '_unitKeysToCover.json'))).toString());
    const unitSymbolsToCover = JSON.parse(readFileSync(join(resolve(__dirname, '_unitSymbolsToCover.json'))).toString());
    const unitQuantitiesToCover = JSON.parse(readFileSync(join(resolve(__dirname, '_unitQuantitiesToCover.json'))).toString());
    const unitQuantitiesSI = JSON.parse(readFileSync(join(resolve(__dirname, '_unitQuantitiesSI.json'))).toString());

    test('test coverage of quantities', () => {
        let listOfAllQuantitiesAndSubquantities: string[] = [];
        Definitions.forEach((quantity) => {
            listOfAllQuantitiesAndSubquantities.push(quantity.name);
            listOfAllQuantitiesAndSubquantities = listOfAllQuantitiesAndSubquantities.concat(quantity.subquantities);
        });

        unitQuantitiesToCover.map((quantityToCover) => {
            expect(listOfAllQuantitiesAndSubquantities.includes(quantityToCover)).toEqual(true);
        });
    });

    test('test coverage of unit symbols', () => {
        let listOfAllUnitSymbols: string[] = [];

        Definitions.forEach((quantity) => {
            Object.values(quantity.units).map((unit) => {
                listOfAllUnitSymbols = listOfAllUnitSymbols.concat(Array.from(unit.symbols));
            });
        });
        unitSymbolsToCover.forEach((unitSymbol) => {
            expect(listOfAllUnitSymbols.includes(unitSymbol)).toEqual(true);
        });
    });

    test('test coverage of unit keys', () => {
        const listOfAllUnitKeys: string[] = [];
        Definitions.forEach((quantity) => {
            Object.keys(quantity.units).map((key) => listOfAllUnitKeys.push(key));
        });
        unitKeysToCover.forEach((unitKey) => {
            expect(listOfAllUnitKeys.includes(unitKey)).toEqual(true);
        });
    });

    test('test default units are SI units', () => {
        Object.entries(unitQuantitiesSI).forEach(([quantityName, quantitySIunit]) => {
            const quantity = Definitions.filter((quantityDefinition) => quantityDefinition.name == quantityName).pop();
            if (quantity) {
                const quantityDefaultUnit = Object.entries(quantity?.units)
                    .filter((unit) => unit[1].default == true)
                    .pop();

                if (quantityDefaultUnit) expect(quantityDefaultUnit[0]).toEqual(quantitySIunit);
            }
        });
    });
});
