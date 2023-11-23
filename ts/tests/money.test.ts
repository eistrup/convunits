import { Convert } from '../src/convert';

describe('money', () => {
    test('USD to Thousand USD', () => {
        expect(new Convert(1).from('USD').to('Thousand USD').evaluate()).toBeCloseTo(0.001);
    });

    test('MM USD to $', () => {
        expect(new Convert(1).from('MM USD').to('$').evaluate()).toBeCloseTo(1000000);
    });
});
