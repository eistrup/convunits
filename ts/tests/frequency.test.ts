import { Convert } from '../src/convert';

describe('frequency', () => {
    test('Hz to Hz', () => {
        expect(new Convert(1).from('Hz').to('Hz').evaluate()).toBeCloseTo(1);
    });

    test('mHz to mHz', () => {
        expect(new Convert(1).from('mHz').to('mHz').evaluate()).toBeCloseTo(1);
    });

    test('kHz to kHz', () => {
        expect(new Convert(1).from('kHz').to('kHz').evaluate()).toBeCloseTo(1);
    });

    test('MHz to MHz', () => {
        expect(new Convert(1).from('MHz').to('MHz').evaluate()).toBeCloseTo(1);
    });

    test('GHz to GHz', () => {
        expect(new Convert(1).from('GHz').to('GHz').evaluate()).toBeCloseTo(1);
    });

    test('THz to THz', () => {
        expect(new Convert(1).from('THz').to('THz').evaluate()).toBeCloseTo(1);
    });

    test('THz to GHz', () => {
        expect(new Convert(1).from('THz').to('GHz').evaluate()).toBeCloseTo(1000);
    });

    test('mHz to MHz', () => {
        expect(new Convert(1).from('mHz').to('MHz').evaluate()).toBeCloseTo(0.000000001);
    });
});
