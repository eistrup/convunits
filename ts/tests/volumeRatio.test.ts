import { Convert } from '../src/convert';

describe('VolumeRatio', () => {
    test('vol/vol to %v/v', () => {
        expect(new Convert(1).from('vol/vol').to('%v/v').evaluate()).toBeCloseTo(100);
        expect(new Convert(1).from('%v/v').to('v/v').evaluate()).toBeCloseTo(0.01);
    });

    test('l/l to m3/m3', () => {
        expect(new Convert(1).from('l/l').to('m3/m3').evaluate()).toBeCloseTo(1);
    });

    test('ft3/ft3 to m3/m3', () => {
        expect(new Convert(1).from('ft3/ft3').to('m3/m3').evaluate()).toBeCloseTo(1);
    });

    test('STB/MSCF to m3/m3', () => {
        expect(new Convert(1).from('STB/MSCF').to('m3/m3').evaluate()).toBeCloseTo(0.005614583333333333);
    });

    test('MSCF/STB to m3/m3', () => {
        expect(new Convert(1).from('MSCF/STB').to('m3/m3').evaluate()).toBeCloseTo(1 / 0.005614583333333333);
    });

    test('SCF/STB to m3/m3', () => {
        expect(new Convert(1).from('SCF/STB').to('m3/m3').evaluate()).toBeCloseTo(0.17810760667903525);
    });

    test('STB/SCF to m3/m3', () => {
        expect(new Convert(1).from('STB/SCF').to('m3/m3').evaluate()).toBeCloseTo(1 / 0.17810760667903525);
    });
});
