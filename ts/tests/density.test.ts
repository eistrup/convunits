import { Convert } from '../src/convert';

describe('density', () => {
    test('kg/m3 to kg/m3', () => {
        expect(new Convert(1).from('kg/m3').to('kg/m3').evaluate()).toBeCloseTo(1);
    });

    test('kg/m3 to kg/l', () => {
        expect(new Convert(1).from('kg/m3').to('kg/l').evaluate()).toBeCloseTo(0.001);
    });

    test('Kg/m3 to kg/l', () => {
        expect(new Convert(1).from('Kg/m3').to('kg/l').evaluate()).toBeCloseTo(0.001);
    });

    test('g/cc to G/M3', () => {
        expect(new Convert(1).from('g/cc').to('G/M3').evaluate()).toBeCloseTo(1000000);
    });
});
