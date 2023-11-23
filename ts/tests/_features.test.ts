import { Convert } from '../src/convert';
import { Definitions, findQuantityBy, findUnitStandard } from '../src/definitions';

describe('_features', () => {
    const length = Definitions.find((quantity) => quantity.name === 'Length');

    test('get unit key from unit symbol with findUnitKey()', () => {
        expect(findUnitStandard('feet')).toEqual('ft');
        expect(findUnitStandard('ft')).toEqual('ft');
        expect(findUnitStandard('°F')).toEqual('F');
        expect(findUnitStandard('1000lbf.ft')).toEqual('klbf.ft');
    });

    test('get quantity from unit key with findQuantity()', () => {
        expect(findQuantityBy('ft')).toEqual(length);
    });

    test('length quantity overview', () => {
        expect(length.findDefaultUnit()).toEqual('m');
        expect(Object.keys(length?.units ?? {})).toEqual(['nm', 'um', 'mm', 'cm', 'm', 'km', 'in', '0.1in', '64thsin', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi']);
        expect(length?.name).toEqual('Length');
        expect(length?.subquantities).toEqual([]);
    });

    test('temperature quantity overview', () => {
        const temperature = Definitions.find((quantity) => quantity.name === 'Temperature');

        expect(temperature.findDefaultUnit()).toEqual('K');
        expect(Object.keys(temperature?.units ?? {})).toEqual(['C', 'K', 'F', 'R']);
        expect(temperature?.name).toEqual('Temperature');
        expect(temperature?.subquantities).toEqual([]);
    });

    test("findQuantity('lbf') force", () => {
        const force = findQuantityBy('lbf');

        expect(force.findDefaultUnit()).toEqual('N');
        expect(Object.keys(force?.units ?? {})).toEqual(['N', 'kN', 'kgf', 'lbf', 'klbf']);
        expect(force?.name).toEqual('Force');
        expect(force?.subquantities).toEqual([]);
    });

    test("findQuantity('d') time ('d' instead of 'day')", () => {
        const time = findQuantityBy('day');

        expect(time.findDefaultUnit()).toEqual('s');
        expect(Object.keys(time?.units ?? {})).toEqual(['ns', 'us', 'ms', 's', 'min', 'h', 'day', 'week', 'month', 'year']);
        expect(time?.name).toEqual('Time');
        expect(time?.subquantities).toEqual([]);
    });

    test('test toDefault() method', () => {
        const result = new Convert(100).toDefault('cm').evaluate();
        expect(result).toEqual(1);
    });
});
