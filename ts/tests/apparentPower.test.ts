import { Convert } from '../src/convert';

describe('apparentPower', () => {
    test('VA to VA', () => {
        expect(new Convert(1).from('VA').to('VA').evaluate()).toBeCloseTo(1);
    });

    test('mVA to mVA', () => {
        expect(new Convert(1).from('mVA').to('mVA').evaluate()).toBeCloseTo(1);
    });

    test('kVA to kVA', () => {
        expect(new Convert(1).from('kVA').to('kVA').evaluate()).toBeCloseTo(1);
    });

    test('MVA to MVA', () => {
        expect(new Convert(1).from('MVA').to('MVA').evaluate()).toBeCloseTo(1);
    });

    test('GVA to GVA', () => {
        expect(new Convert(1).from('GVA').to('GVA').evaluate()).toBeCloseTo(1);
    });

    test('VA to mVA', () => {
        expect(new Convert(1).from('VA').to('mVA').evaluate()).toBeCloseTo(1000);
    });

    test('VA to kVA', () => {
        expect(new Convert(1).from('VA').to('kVA').evaluate()).toBeCloseTo(0.001);
    });

    test('VA to MVA', () => {
        expect(new Convert(1).from('VA').to('MVA').evaluate()).toBeCloseTo(0.000001);
    });

    test('VA to GVA', () => {
        expect(new Convert(1).from('VA').to('GVA').evaluate()).toBeCloseTo(0.000000001);
    });

    test('GVA to mVA', () => {
        expect(new Convert(1).from('GVA').to('mVA').evaluate()).toBeCloseTo(1000000000000);
    });

    test('MVA to mVA', () => {
        expect(new Convert(1).from('MVA').to('mVA').evaluate()).toBeCloseTo(1000000000);
    });

    test('kVA to mVA', () => {
        expect(new Convert(1).from('kVA').to('mVA').evaluate()).toBeCloseTo(1000000);
    });

    test('mVA to kVA', () => {
        expect(new Convert(1).from('mVA').to('kVA').evaluate()).toBeCloseTo(0.000001);
    });

    test('mVA to VA', () => {
        expect(new Convert(1).from('mVA').to('VA').evaluate()).toBeCloseTo(0.001);
    });

    test('kVA to VA', () => {
        expect(new Convert(1).from('kVA').to('VA').evaluate()).toBeCloseTo(1000);
    });
});
