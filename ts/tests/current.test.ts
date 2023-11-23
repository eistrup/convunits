import { Convert } from '../src/convert';

describe('current', () => {
    test('A to A', () => {
        expect(new Convert(1).from('A').to('A').evaluate()).toBeCloseTo(1);
    });

    test('mA to mA', () => {
        expect(new Convert(1).from('mA').to('mA').evaluate()).toBeCloseTo(1);
    });

    test('kA to kA', () => {
        expect(new Convert(1).from('kA').to('kA').evaluate()).toBeCloseTo(1);
    });

    test('A to mA', () => {
        expect(new Convert(1).from('A').to('mA').evaluate()).toBeCloseTo(1000);
    });

    test('A to kA', () => {
        expect(new Convert(1).from('A').to('kA').evaluate()).toBeCloseTo(0.001);
    });

    test('kA to mA', () => {
        expect(new Convert(1).from('kA').to('mA').evaluate()).toBeCloseTo(1000000);
    });

    test('mA to kA', () => {
        expect(new Convert(1).from('mA').to('kA').evaluate()).toBeCloseTo(0.000001);
    });

    test('mA to A', () => {
        expect(new Convert(1).from('mA').to('A').evaluate()).toBeCloseTo(0.001);
    });

    test('kA to A', () => {
        expect(new Convert(1).from('kA').to('A').evaluate()).toBeCloseTo(1000);
    });
});
