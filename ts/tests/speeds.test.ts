import { Convert } from '../src/convert';

describe('speed', () => {
    test('m/s to m/s', () => {
        expect(new Convert(1).from('m/s').to('m/s').evaluate()).toBeCloseTo(1);
    });

    test('m/s to km/h', () => {
        expect(new Convert(1).from('m/s').to('km/h').evaluate()).toBeCloseTo(3.6);
    });

    test('m/h to m/h', () => {
        expect(new Convert(6).from('m/h').to('m/h').evaluate()).toBeCloseTo(6);
    });

    test('m/h to knot', () => {
        expect(new Convert(2).from('m/h').to('knot').evaluate()).toBeCloseTo(1.73795);
    });

    test('m/h to ft/s', () => {
        expect(new Convert(3).from('m/h').to('ft/s').evaluate()).toBeCloseTo(4.4);
    });
});
