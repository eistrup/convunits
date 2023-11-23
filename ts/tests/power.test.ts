import { Convert } from '../src/convert';
import { ConversionNotSupportedError } from '../src/errors';

describe('power', () => {
    test('W to W', () => {
        expect(new Convert(1).from('W').to('W').evaluate()).toBeCloseTo(1);
    });

    test('mW to mW', () => {
        expect(new Convert(1).from('mW').to('mW').evaluate()).toBeCloseTo(1);
    });

    test('kW to kW', () => {
        expect(new Convert(1).from('kW').to('kW').evaluate()).toBeCloseTo(1);
    });

    test('MW to MW', () => {
        expect(new Convert(1).from('MW').to('MW').evaluate()).toBeCloseTo(1);
    });

    test('GW to GW', () => {
        expect(new Convert(1).from('GW').to('GW').evaluate()).toBeCloseTo(1);
    });

    test('HP to HP', () => {
        expect(new Convert(1).from('HP').to('HP').evaluate()).toBeCloseTo(1);
    });

    test('W to mW', () => {
        expect(new Convert(1).from('W').to('mW').evaluate()).toBeCloseTo(1000);
    });

    test('W to kW', () => {
        expect(new Convert(1).from('W').to('kW').evaluate()).toBeCloseTo(0.001);
    });

    test('W to MW', () => {
        expect(new Convert(1).from('W').to('MW').evaluate()).toBeCloseTo(0.000001);
    });

    test('W to GW', () => {
        expect(new Convert(1).from('W').to('GW').evaluate()).toBeCloseTo(0.000000001);
    });

    test('W to HP', () => {
        expect(new Convert(1).from('W').to('HP').evaluate()).toBeCloseTo(0.00134102209);
    });

    test('GW to mW', () => {
        expect(new Convert(1).from('GW').to('mW').evaluate()).toBeCloseTo(1000000000000);
    });

    test('MW to mW', () => {
        expect(new Convert(1).from('MW').to('mW').evaluate()).toBeCloseTo(1000000000);
    });

    test('kW to mW', () => {
        expect(new Convert(1).from('kW').to('mW').evaluate()).toBeCloseTo(1000000);
    });

    test('mW to kW', () => {
        expect(new Convert(1).from('mW').to('kW').evaluate()).toBeCloseTo(0.000001);
    });

    test('mW to W', () => {
        expect(new Convert(1).from('mW').to('W').evaluate()).toBeCloseTo(0.001);
    });

    test('kW to W', () => {
        expect(new Convert(1).from('kW').to('W').evaluate()).toBeCloseTo(1000);
    });

    test('BOEPD to W', () => {
        expect(new Convert(1).from('BOEPD').to('W').evaluate()).toBeCloseTo(70810.1851852);
    });

    test('BOEPD to MBOE/d', () => {
        expect(new Convert(1).from('BOEPD').to('MBOE/d').evaluate()).toBeCloseTo(0.001);
    });

    test('MM BOEPD to BOE/d', () => {
        expect(new Convert(1).from('MM BOEPD').to('BOE/d').evaluate()).toBeCloseTo(1e6);
    });

    test('BOE/d to STBPD (error)', () => {
        try {
            new Convert(1).from('BOE/d').to('STBPD');
        } catch (err) {
            expect(err).toEqual(new ConversionNotSupportedError('Power', 'Volumetric Flow Rate'));
        }
    });
});
