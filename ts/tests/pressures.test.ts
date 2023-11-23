import { Convert } from '../src/convert';

describe('pressure', () => {
    test('Pa to Pa', () => {
        expect(new Convert(1).from('Pa').to('Pa').evaluate()).toBeCloseTo(1);
    });

    test('Pa to kPa', () => {
        expect(new Convert(2000).from('Pa').to('kPa').evaluate()).toBeCloseTo(2);
    });

    test('kPa to Pa', () => {
        expect(new Convert(1).from('kPa').to('Pa').evaluate()).toBeCloseTo(1000);
    });

    test('kPa to hPa', () => {
        expect(new Convert(20).from('kPa').to('hPa').evaluate()).toBeCloseTo(200);
    });

    test('kPa to MPa', () => {
        expect(new Convert(8000).from('kPa').to('MPa').evaluate()).toBeCloseTo(8);
    });

    test('kPa to bar', () => {
        expect(new Convert(6000).from('kPa').to('bar').evaluate()).toBeCloseTo(60);
    });

    test('kPa to torr', () => {
        expect(new Convert(532).from('kPa').to('torr').evaluate()).toBeCloseTo(3990.33);
    });

    test('psi to kpsi', () => {
        expect(new Convert(10).from('psi').to('kpsi').evaluate()).toBeCloseTo(0.01);
    });

    test('psig to kpsig', () => {
        expect(new Convert(10).from('psig').to('kpsig').evaluate()).toBeCloseTo(0.01);
    });

    test('psia to kpsia', () => {
        expect(new Convert(10).from('psia').to('kpsia').evaluate()).toBeCloseTo(0.01);
    });

    test('psia to psig', () => {
        expect(new Convert(14.695948775).from('psia').to('psig').evaluate()).toBeCloseTo(0);
        expect(new Convert(1).from('psia').to('psig').evaluate()).toBeCloseTo(1 - 14.695948775);
    });

    test('psig to psia', () => {
        expect(new Convert(1).from('psig').to('psia').evaluate()).toBeCloseTo(1 + 14.695948775);
    });

    test('PSIG to Pascal', () => {
        expect(new Convert(0.001).from('PSIG').to('Pascal').evaluate()).toBeCloseTo(101331.899, 1);
    });

    test('bar to barg', () => {
        expect(new Convert(1.01325).from('bar').to('barg').evaluate()).toBeCloseTo(0);
        expect(new Convert(1).from('bar').to('barg').evaluate()).toBeCloseTo(1 - 1.01325);
    });

    test('barg to bar', () => {
        expect(new Convert(1.01325).from('bar').to('barg').evaluate()).toBeCloseTo(0);
    });

    test('bar to Pa', () => {
        expect(new Convert(1 / 100000).from('bar').to('Pa').evaluate()).toBeCloseTo(1);
    });

    test('BARG to Pascal', () => {
        expect(new Convert(0.001).from('BARG').to('Pascal').evaluate()).toBeCloseTo((0.001 + 1.01325) * 100000);
    });

    test('psi to ksi (instead of kpsi)', () => {
        expect(new Convert(10000).from('psi').to('ksi').evaluate()).toBeCloseTo(10);
    });

    test('psia to ksia (instead of kpsia)', () => {
        expect(new Convert(10000).from('psia').to('ksia').evaluate()).toBeCloseTo(10);
    });

    test('torr to ksia (instead of kpsia)', () => {
        expect(new Convert(51714.931860168974).from('torr').to('ksia').evaluate()).toBeCloseTo(1);
    });

    test('atm to pa', () => {
        expect(new Convert(1).from('atm').to('pa').evaluate()).toBeCloseTo(101325);
    });

    test('atm to psia', () => {
        expect(new Convert(1).from('atm').to('psia').evaluate()).toBeCloseTo(14.695948775);
    });

    test('atm to bar', () => {
        expect(new Convert(1).from('atm').to('bar').evaluate()).toBeCloseTo(1.01325);
    });
});
