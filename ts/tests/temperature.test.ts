import { Convert } from '../src/convert';

describe('Temperature', () => {
    test('C to K', () => {
        expect(new Convert(0).from('C').to('K').evaluate()).toBeCloseTo(273.15);
    });

    test('K to C', () => {
        expect(new Convert(273.15).from('K').to('C').evaluate()).toBeCloseTo(0);
    });

    test('F to C', () => {
        expect(new Convert(32).from('F').to('C').evaluate()).toBeCloseTo(0);
    });

    test('C to F', () => {
        expect(new Convert(0).from('C').to('F').evaluate()).toBeCloseTo(32);
    });

    test('F to K', () => {
        expect(new Convert(32).from('F').to('K').evaluate()).toBeCloseTo(273.15);
    });

    test('F to R', () => {
        expect(new Convert(100).from('F').to('R').evaluate()).toBeCloseTo(559.6700000000001);
    });

    test('R to F', () => {
        expect(new Convert(670).from('R').to('F').evaluate()).toBeCloseTo(210.32999999999998);
    });

    test('R to C', () => {
        expect(new Convert(612).from('R').to('C').evaluate()).toBeCloseTo(66.85);
    });

    test('R to K', () => {
        expect(new Convert(459.67).from('R').to('K').evaluate()).toBeCloseTo(255.3722222222222);
    });

    test('degC to degK', () => {
        expect(new Convert(-10).from('degC').to('degK').evaluate()).toBeCloseTo(263.15);
    });

    test('degC to degK', () => {
        expect(new Convert(-10).from('degC').to('degK').evaluate()).toBeCloseTo(263.15);
    });

    test('degF to degR', () => {
        expect(new Convert(-10).from('degF').to('degR').evaluate()).toBeCloseTo(449.67);
    });

    test('degC to degF', () => {
        expect(new Convert(-10).from('degC').to('degF').evaluate()).toBeCloseTo(14);
    });

    test('degR to degC', () => {
        expect(new Convert(-10).from('degR').to('degC').evaluate()).toBeCloseTo(-278.706);
    });
});
