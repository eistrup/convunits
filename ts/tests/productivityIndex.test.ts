import { Convert } from '../src/convert';

describe('productivityIndex', () => {
    test('m3/s/Pa to STB/D/psia', () => {
        expect(new Convert(1).from('m3/s/Pa').to('STB/D/psia').evaluate()).toBeCloseTo(1 / 2.66888e-10);
    });

    test('STB/D/psia to m3/s/Pa', () => {
        expect(new Convert(1).from('STB/D/psia').to('m3/s/Pa').evaluate()).toBeCloseTo(2.66888e-10);
    });
});
