import { Convert } from '../src/convert';

describe('angle', () => {
    test('rad to rad', () => {
        expect(new Convert(1).from('rad').to('rad').evaluate()).toBeCloseTo(1);
    });

    test('deg to deg', () => {
        expect(new Convert(1).from('deg').to('deg').evaluate()).toBeCloseTo(1);
    });

    test('grad to grad', () => {
        expect(new Convert(1).from('grad').to('grad').evaluate()).toBeCloseTo(1);
    });

    test('arcmin to deg', () => {
        expect(new Convert(1).from('arcmin').to('deg').evaluate()).toBeCloseTo(0.016666666666666666);
    });

    test('arcsec to deg', () => {
        expect(new Convert(1).from('arcsec').to('deg').evaluate()).toBeCloseTo(0.0002777777777777778);
    });

    test('deg to grad', () => {
        expect(new Convert(360).from('deg').to('grad').evaluate()).toBeCloseTo(400);
    });

    test('deg to arcmin', () => {
        expect(new Convert(360).from('deg').to('arcmin').evaluate()).toBeCloseTo(21600);
    });

    test('deg to arcsec', () => {
        expect(new Convert(360).from('deg').to('arcsec').evaluate()).toBeCloseTo(1.296e6);
    });

    test('grad to arcmin', () => {
        expect(new Convert(5).from('grad').to('arcmin').evaluate()).toBeCloseTo(270);
    });

    test('grad to deg', () => {
        expect(new Convert(5).from('grad').to('deg').evaluate()).toBeCloseTo(4.5);
    });

    test('arcmin to rad', () => {
        expect(new Convert(10000).from('arcmin').to('rad').evaluate()).toBeCloseTo(2.908882);
    });
});
