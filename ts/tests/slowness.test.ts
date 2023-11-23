import { Convert } from '../src/convert';

describe('slowness', () => {
    test('s/m to s/m', () => {
        expect(new Convert(1).from('s/m').to('s/m').evaluate()).toBeCloseTo(1);
    });

    test('s/m to min/km', () => {
        expect(new Convert(1).from('s/m').to('min/km').evaluate()).toBeCloseTo(16.6667);
    });

    test('s/ft to s/ft', () => {
        expect(new Convert(1).from('s/ft').to('s/ft').evaluate()).toBeCloseTo(1);
    });

    test('min/mi to s/ft', () => {
        expect(new Convert(1).from('min/mi').to('s/ft').evaluate()).toBeCloseTo(0.0113636);
    });
});
