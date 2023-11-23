import { Convert } from '../src/convert';

describe('mass', () => {
    test('lb to lb', () => {
        expect(new Convert(1).from('lb').to('lb').evaluate()).toBeCloseTo(1);
    });

    test('lb to oz', () => {
        expect(new Convert(1).from('lb').to('oz').evaluate()).toBeCloseTo(16);
    });

    test('oz to lb', () => {
        expect(new Convert(1).from('oz').to('lb').evaluate()).toBeCloseTo(1 / 16);
    });

    test('oz to oz', () => {
        expect(new Convert(6).from('oz').to('oz').evaluate()).toBeCloseTo(6);
    });

    test('kg to kg', () => {
        expect(new Convert(1).from('kg').to('kg').evaluate()).toBeCloseTo(1);
    });

    test('kg to g', () => {
        expect(new Convert(1).from('kg').to('g').evaluate()).toBeCloseTo(1000);
    });

    test('g to kg', () => {
        expect(new Convert(1).from('g').to('kg').evaluate()).toBeCloseTo(1 / 1000);
    });

    test('g to g', () => {
        expect(new Convert(100).from('g').to('g').evaluate()).toBeCloseTo(100);
    });

    test('kg to lb', () => {
        expect(new Convert(1).from('lb').to('kg').evaluate()).toBeCloseTo(0.453592);
    });

    test('t to kg', () => {
        expect(new Convert(1).from('t').to('kg').evaluate()).toBeCloseTo(1000);
    });

    test('short ton to kg', () => {
        expect(new Convert(1).from('short ton').to('kg').evaluate()).toBeCloseTo(907.184);
    });

    test('short ton to kg', () => {
        expect(new Convert(1).from('short ton').to('kg').evaluate()).toBeCloseTo(907.184);
    });
    1016.05;
});
