import { Convert } from '../src/convert';

describe('Force', () => {
    test('N to kN', () => {
        expect(new Convert(1).from('N').to('kN').evaluate()).toBeCloseTo(1 / 1000);
    });

    test('kN to N', () => {
        expect(new Convert(1).from('kN').to('N').evaluate()).toBeCloseTo(1000);
    });

    test('N to lbf', () => {
        expect(new Convert(1).from('N').to('lbf').evaluate()).toBeCloseTo(0.224809);
    });

    test('lbf to N', () => {
        expect(new Convert(1).from('lbf').to('N').evaluate()).toBeCloseTo(4.44822);
    });
});
