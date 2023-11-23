import { Definitions } from '../src/definitions';

describe('_uniqueness', () => {
    const fileList = [];
    const allUnitKeys: string[] = [];
    let allUnitSymbols: string[] = [];
    let allQuantityNames: string[] = [];
    let allQuantityNamesAndSubquantities: string[] = [];

    allQuantityNames = Definitions.map((quantity) => quantity.name);

    allQuantityNamesAndSubquantities = allQuantityNames;
    Definitions.map((quantity) => {
        allQuantityNamesAndSubquantities = allQuantityNamesAndSubquantities.concat(quantity.subquantities);
    });

    Definitions.forEach((quantity) => {
        if (quantity?.units) {
            Object.entries(quantity.units).map(([unitKey, unitDefinition]) => {
                allUnitKeys.push(unitKey);
                allUnitSymbols = allUnitSymbols.concat(Array.from(unitDefinition.symbols));

                if (!allUnitSymbols.includes(unitKey)) allUnitSymbols.push(unitKey);
            });
        }
    });

    test('uniqueness of definition file names', () => {
        const fileListUnique = [...new Set(fileList)];
        expect(fileList.length).toEqual(fileListUnique.length);
    });

    test('uniqueness of definition quantity names', () => {
        const allQuantityNamesUnique = [...new Set(allQuantityNames)];
        expect(allQuantityNames.length).toEqual(allQuantityNamesUnique.length);
    });

    test('uniqueness of definition of units (Standard symbols) ', () => {
        const allUnitKeysUnique = [...new Set(allUnitKeys)];
        expect(allUnitKeys.length).toEqual(allUnitKeysUnique.length);
    });

    test('uniqueness of definition of units (Nonstandard symbols) ', () => {
        const allUnitSymbolsUnique = [...new Set(allUnitSymbols)];
        expect(allUnitSymbols.length).toEqual(allUnitSymbolsUnique.length);
    });
});
