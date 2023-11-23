import { Convert } from '../src/convert';

describe('voltage', () => {
    test('V to V', () => {
        expect(new Convert(1).from('V').to('V').evaluate()).toBeCloseTo(1);
    });

    test('mV to mV', () => {
        expect(new Convert(1).from('mV').to('mV').evaluate()).toBeCloseTo(1);
    });

    test('kV to kV', () => {
        expect(new Convert(1).from('kV').to('kV').evaluate()).toBeCloseTo(1);
    });

    test('V to mV', () => {
        expect(new Convert(1).from('V').to('mV').evaluate()).toBeCloseTo(1000);
    });

    test('V to kV', () => {
        expect(new Convert(1).from('V').to('kV').evaluate()).toBeCloseTo(0.001);
    });

    test('kV to mV', () => {
        expect(new Convert(1).from('kV').to('mV').evaluate()).toBeCloseTo(1000000);
    });

    test('mV to kV', () => {
        expect(new Convert(1).from('mV').to('kV').evaluate()).toBeCloseTo(0.000001);
    });

    test('mV to V', () => {
        expect(new Convert(1).from('mV').to('V').evaluate()).toBeCloseTo(0.001);
    });

    test('kV to V', () => {
        expect(new Convert(1).from('kV').to('V').evaluate()).toBeCloseTo(1000);
    });
});
