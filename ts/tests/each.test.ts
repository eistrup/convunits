import { Convert } from '../src/convert';

describe('each', () => {
    test('ea to ea', () => {
        expect(new Convert(1).from('ea').to('ea').evaluate()).toBeCloseTo(1);
    });

    test('dz to ea', () => {
        expect(new Convert(1).from('dz').to('ea').evaluate()).toBeCloseTo(12);
    });

    test('ea to dz', () => {
        expect(new Convert(12).from('ea').to('dz').evaluate()).toBeCloseTo(1);
    });
});
