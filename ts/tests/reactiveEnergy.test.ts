import { Convert } from '../src/convert';

describe('reactiveEnergy', () => {
    test('VARh to VARh', () => {
        expect(new Convert(1).from('VARh').to('VARh').evaluate()).toBeCloseTo(1);
    });

    test('mVARh to mVARh', () => {
        expect(new Convert(1).from('mVARh').to('mVARh').evaluate()).toBeCloseTo(1);
    });

    test('kVARh to kVARh', () => {
        expect(new Convert(1).from('kVARh').to('kVARh').evaluate()).toBeCloseTo(1);
    });

    test('MVARh to MVARh', () => {
        expect(new Convert(1).from('MVARh').to('MVARh').evaluate()).toBeCloseTo(1);
    });

    test('GVARh to GVARh', () => {
        expect(new Convert(1).from('GVARh').to('GVARh').evaluate()).toBeCloseTo(1);
    });

    test('VARh to mVARh', () => {
        expect(new Convert(1).from('VARh').to('mVARh').evaluate()).toBeCloseTo(1000);
    });

    test('VARh to kVARh', () => {
        expect(new Convert(1).from('VARh').to('kVARh').evaluate()).toBeCloseTo(0.001);
    });

    test('VARh to MVARh', () => {
        expect(new Convert(1).from('VARh').to('MVARh').evaluate()).toBeCloseTo(0.000001);
    });

    test('VARh to GVARh', () => {
        expect(new Convert(1).from('VARh').to('GVARh').evaluate()).toBeCloseTo(0.000000001);
    });

    test('GVARh to mVARh', () => {
        expect(new Convert(1).from('GVARh').to('mVARh').evaluate()).toBeCloseTo(1000000000000);
    });

    test('MVARh to mVARh', () => {
        expect(new Convert(1).from('MVARh').to('mVARh').evaluate()).toBeCloseTo(1000000000);
    });

    test('kVARh to mVARh', () => {
        expect(new Convert(1).from('kVARh').to('mVARh').evaluate()).toBeCloseTo(1000000);
    });

    test('mVARh to kVARh', () => {
        expect(new Convert(1).from('mVARh').to('kVARh').evaluate()).toBeCloseTo(0.000001);
    });

    test('mVARh to VARh', () => {
        expect(new Convert(1).from('mVARh').to('VARh').evaluate()).toBeCloseTo(0.001);
    });

    test('kVARh to VARh', () => {
        expect(new Convert(1).from('kVARh').to('VARh').evaluate()).toBeCloseTo(1000);
    });
});
