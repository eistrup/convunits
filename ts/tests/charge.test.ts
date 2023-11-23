import { Convert } from '../src/convert';

describe('charge', () => {
    test('c to Co', () => {
        expect(new Convert(1).from('c').to('c').evaluate()).toBeCloseTo(1);
    });

    test('c to mC', () => {
        expect(new Convert(1).from('c').to('mC').evaluate()).toBeCloseTo(1000);
    });

    test('mC to c', () => {
        expect(new Convert(1).from('mC').to('c').evaluate()).toBeCloseTo(1 / 1000);
    });

    test('c to μC', () => {
        expect(new Convert(1).from('c').to('μC').evaluate()).toBeCloseTo(1000000);
    });

    test('μC to c', () => {
        expect(new Convert(1).from('μC').to('c').evaluate()).toBeCloseTo(1 / 1000000);
    });

    test('c to nC', () => {
        expect(new Convert(1).from('c').to('nC').evaluate()).toBeCloseTo(1e9);
    });

    test('nC to c', () => {
        expect(new Convert(1).from('nC').to('c').evaluate()).toBeCloseTo(1e-9);
    });

    test('c to pC', () => {
        expect(new Convert(1).from('c').to('pC').evaluate()).toBeCloseTo(1e12);
    });

    test('pC to c', () => {
        expect(new Convert(1).from('pC').to('c').evaluate()).toBeCloseTo(1e-12);
    });
});
