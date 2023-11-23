import { Convert } from '../src/convert';

describe('Ratio', () => {
    test('ppm to fraction', () => {
        expect(new Convert(1).from('ppm').to('fraction').evaluate()).toBeCloseTo(0.000001);
    });
    test('fraction to pct', () => {
        expect(new Convert(0.1).from('fraction').to('pct').evaluate()).toBeCloseTo(10);
    });
    test('ppm to ppm', () => {
        expect(new Convert(1).from('ppm').to('ppm').evaluate()).toBeCloseTo(1);
    });

    test('ppb to ppb', () => {
        expect(new Convert(1).from('ppb').to('ppb').evaluate()).toBeCloseTo(1);
    });

    test('ppm to ppb', () => {
        expect(new Convert(1).from('ppm').to('ppb').evaluate()).toBeCloseTo(1000);
    });

    test('ppb to ppm', () => {
        expect(new Convert(1).from('ppb').to('ppm').evaluate()).toBeCloseTo(0.001);
    });

    test('ppt to ppt', () => {
        expect(new Convert(1).from('ppt').to('ppt').evaluate()).toBeCloseTo(1);
    });

    test('ppm to ppt', () => {
        expect(new Convert(1).from('ppm').to('ppt').evaluate()).toBeCloseTo(1000000);
    });

    test('ppt to ppb', () => {
        expect(new Convert(1).from('ppt').to('ppb').evaluate()).toBeCloseTo(0.001);
    });

    test('ppt to ppm', () => {
        expect(new Convert(1).from('ppt').to('ppm').evaluate()).toBeCloseTo(0.000001);
    });

    test('ppq to ppq', () => {
        expect(new Convert(1).from('ppq').to('ppq').evaluate()).toBeCloseTo(1);
    });

    test('ppq to ppt', () => {
        expect(new Convert(1).from('ppq').to('ppt').evaluate()).toBeCloseTo(0.001);
    });

    test('ppq to ppm', () => {
        expect(new Convert(1).from('ppq').to('ppm').evaluate()).toBeCloseTo(0.000000001);
    });
});
