import { Definitions, findQuantityByUnitSymbol, findUnitsByQuantity, findUnitStandard } from '../src/definitions';

describe('_definitions', () => {
    test('every unit has its key as first symbol', () => {
        Definitions.map((quantity) => {
            Object.entries(quantity.units).map(([unitKey, unitDefinition]) => {
                expect(unitKey).toEqual(unitDefinition.symbols.values().next().value);
            });
        });
    });

    test('every definition has only one unit default=true', () => {
        Definitions.map((quantity) => {
            let defaultCount = 0;
            Object.values(quantity.units).map((unitDefinition) => {
                if (unitDefinition?.default) defaultCount += 1;
            });
            expect(defaultCount).toEqual(1);
        });
    });

    test('should find units with given quantity', () => {
        const lengthUnits = findUnitsByQuantity('Length');
        const volumeUnits = findUnitsByQuantity('Volume');
        const lengthUnitsTwo = findUnitsByQuantity('Length');

        expect(lengthUnits).toEqual(['nm', 'um', 'mm', 'cm', 'm', 'km', 'in', '0.1in', '64thsin', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi']);
        expect(lengthUnitsTwo).toEqual(['nm', 'um', 'mm', 'cm', 'm', 'km', 'in', '0.1in', '64thsin', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi']); // repeated to test caching
        expect(volumeUnits).toEqual([
            'nm3',
            'um3',
            'mm3',
            'cm3',
            'ml',
            'cl',
            'dl',
            'l',
            'kl',
            'm3',
            'km3',
            'krm',
            'tsk',
            'msk',
            'kkp',
            'glas',
            'kanna',
            'tsp',
            'Tbs',
            'in3',
            'fl-oz',
            'cup',
            'pnt',
            'qt',
            'gal',
            'galUS',
            'yd3',
            'bbl',
            'ft3',
            'MSCF',
            'MMSCF',
            'BSCF',
            'MSTB',
            'MMSTB',
        ]);
    });

    test('should find quantity with given unit', () => {
        const accelaration = findQuantityByUnitSymbol('m/s2');
        const angle = findQuantityByUnitSymbol('RAD');
        const quantity = findQuantityByUnitSymbol('ft');
        const pressure = findQuantityByUnitSymbol('MPa');
        const pressureTwo = findQuantityByUnitSymbol('MPa'); // repeated to test caching

        expect(accelaration.name).toBe('Acceleration');
        expect(angle.name).toBe('Angle');
        expect(quantity.name).toBe('Length');
        expect(pressure.name).toBe('Pressure');
        expect(pressureTwo.name).toBe('Pressure');
    });

    test('should find standard unit with given non standard unit', () => {
        const lengthUnitStandard = findUnitStandard('inch');
        const powerFlowRateUnitStandard = findUnitStandard('ThousandStdCubicFeetPerDay');
        const powerUnitStandard = findUnitStandard('GW');
        const velocityStandard = findUnitStandard('m/h');
        const accelationStandard = findUnitStandard('m/s2');

        expect(lengthUnitStandard).toBe('in');
        expect(powerFlowRateUnitStandard).toBe('MSCFD');
        expect(powerUnitStandard).toBe('GW');
        expect(velocityStandard).toBe('m/h');
        expect(accelationStandard).toBe('m/s2');
    });
});
