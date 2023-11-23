import { Convert } from '../src/convert';

describe('acceleration', () => {
    test('g to m/s2', () => {
        expect(new Convert(1).from('g-force').to('m/s2').evaluate()).toBeCloseTo(9.80665);
    });

    test('m/s2 to g', () => {
        expect(new Convert(9.80665).from('m/s2').to('g-force').evaluate()).toBeCloseTo(1);
    });

    test('ft/s2 to g', () => {
        expect(new Convert(9.80665).from('ft/s2').to('g-force').evaluate()).toBeCloseTo(0.3048);
    });
});
