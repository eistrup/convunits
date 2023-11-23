import { Convert } from '../src/convert';

describe('Pixels', () => {
    test('Pixel to px', () => {
        expect(new Convert(1).from('Pixel').to('px').evaluate()).toBeCloseTo(1);
    });
});
