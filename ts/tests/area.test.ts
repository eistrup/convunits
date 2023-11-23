import { Convert } from '../src/convert';

describe('area', () => {
    test('ft2 to ft2', () => {
        expect(new Convert(1).from('ft2').to('ft2').evaluate()).toBeCloseTo(1);
    });

    test('ft2 to in2', () => {
        expect(new Convert(1).from('ft2').to('in2').evaluate()).toBeCloseTo(144);
    });

    test('in2 to ft2', () => {
        expect(new Convert(1).from('in2').to('ft2').evaluate()).toBeCloseTo(1 / 144);
    });

    test('ft2 to ac', () => {
        expect(new Convert(1).from('ft2').to('ac').evaluate()).toBeCloseTo(1 / 43560);
    });

    test('ac to ft2', () => {
        expect(new Convert(1).from('ac').to('ft2').evaluate()).toBeCloseTo(43560);
    });

    test('ft2 to mi2', () => {
        expect(new Convert(1).from('ft2').to('mi2').evaluate()).toBeCloseTo(1 / 27878400);
    });

    test('mi2 to ft2', () => {
        expect(new Convert(1).from('mi2').to('ft2').evaluate()).toBeCloseTo(27878400);
    });

    test('m2 to m2', () => {
        expect(new Convert(1).from('m2').to('m2').evaluate()).toBeCloseTo(1);
    });

    test('m2 to cm2', () => {
        expect(new Convert(1).from('m2').to('cm2').evaluate()).toBeCloseTo(10000);
    });

    test('cm2 to m2', () => {
        expect(new Convert(1).from('cm2').to('m2').evaluate()).toBeCloseTo(1 / 10000);
    });

    test('m2 to mm2', () => {
        expect(new Convert(1).from('m2').to('mm2').evaluate()).toBeCloseTo(1000000);
    });

    test('ha to m2', () => {
        expect(new Convert(1).from('ha').to('m2').evaluate()).toBeCloseTo(10000);
    });

    test('km2 to m2', () => {
        expect(new Convert(1).from('km2').to('m2').evaluate()).toBeCloseTo(1000000);
    });

    test('m2 to ft2', () => {
        expect(new Convert(1).from('m2').to('ft2').evaluate()).toBeCloseTo(10.7639);
    });

    test('mm2 to ft2', () => {
        expect(new Convert(1).from('mm2').to('ft2').evaluate()).toBeCloseTo(1.07639e-5);
    });
});
