import { Convert } from '../src/convert';

describe('reactivePower', () => {
    test('VAR to VAR', () => {
        expect(new Convert(1).from('VAR').to('VAR').evaluate()).toBeCloseTo(1);
    });

    test('mVAR to mVAR', () => {
        expect(new Convert(1).from('mVAR').to('mVAR').evaluate()).toBeCloseTo(1);
    });

    test('kVAR to kVAR', () => {
        expect(new Convert(1).from('kVAR').to('kVAR').evaluate()).toBeCloseTo(1);
    });

    test('MVAR to MVAR', () => {
        expect(new Convert(1).from('MVAR').to('MVAR').evaluate()).toBeCloseTo(1);
    });

    test('GVAR to GVAR', () => {
        expect(new Convert(1).from('GVAR').to('GVAR').evaluate()).toBeCloseTo(1);
    });

    test('VAR to mVAR', () => {
        expect(new Convert(1).from('VAR').to('mVAR').evaluate()).toBeCloseTo(1000);
    });

    test('VAR to kVAR', () => {
        expect(new Convert(1).from('VAR').to('kVAR').evaluate()).toBeCloseTo(0.001);
    });

    test('VAR to MVAR', () => {
        expect(new Convert(1).from('VAR').to('MVAR').evaluate()).toBeCloseTo(0.000001);
    });

    test('VAR to GVAR', () => {
        expect(new Convert(1).from('VAR').to('GVAR').evaluate()).toBeCloseTo(0.000000001);
    });

    test('GVAR to mVAR', () => {
        expect(new Convert(1).from('GVAR').to('mVAR').evaluate()).toBeCloseTo(1000000000000);
    });

    test('MVAR to mVAR', () => {
        expect(new Convert(1).from('MVAR').to('mVAR').evaluate()).toBeCloseTo(1000000000);
    });

    test('kVAR to mVAR', () => {
        expect(new Convert(1).from('kVAR').to('mVAR').evaluate()).toBeCloseTo(1000000);
    });

    test('mVAR to kVAR', () => {
        expect(new Convert(1).from('mVAR').to('kVAR').evaluate()).toBeCloseTo(0.000001);
    });

    test('mVAR to VAR', () => {
        expect(new Convert(1).from('mVAR').to('VAR').evaluate()).toBeCloseTo(0.001);
    });

    test('kVAR to VAR', () => {
        expect(new Convert(1).from('kVAR').to('VAR').evaluate()).toBeCloseTo(1000);
    });
});
