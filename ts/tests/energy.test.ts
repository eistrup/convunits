import { Convert } from '../src/convert';
import { ConversionNotSupportedError } from '../src/errors';

describe('energy', () => {
    test('Wh to Wh', () => {
        expect(new Convert(1).from('Wh').to('Wh').evaluate()).toBeCloseTo(1);
    });

    test('mWh to mWh', () => {
        expect(new Convert(1).from('mWh').to('mWh').evaluate()).toBeCloseTo(1);
    });

    test('kWh to kWh', () => {
        expect(new Convert(1).from('kWh').to('kWh').evaluate()).toBeCloseTo(1);
    });

    test('MWh to MWh', () => {
        expect(new Convert(1).from('MWh').to('MWh').evaluate()).toBeCloseTo(1);
    });

    test('GWh to GWh', () => {
        expect(new Convert(1).from('GWh').to('GWh').evaluate()).toBeCloseTo(1);
    });

    test('J to J', () => {
        expect(new Convert(1).from('J').to('J').evaluate()).toBeCloseTo(1);
    });

    test('kJ to kJ', () => {
        expect(new Convert(1).from('kJ').to('kJ').evaluate()).toBeCloseTo(1);
    });

    test('Wh to J', () => {
        expect(new Convert(1).from('Wh').to('J').evaluate()).toBeCloseTo(3600);
    });

    test('Wh to mWh', () => {
        expect(new Convert(1).from('Wh').to('mWh').evaluate()).toBeCloseTo(1000);
    });

    test('Wh to kWh', () => {
        expect(new Convert(1).from('Wh').to('kWh').evaluate()).toBeCloseTo(0.001);
    });

    test('Wh to MWh', () => {
        expect(new Convert(1).from('Wh').to('MWh').evaluate()).toBeCloseTo(0.000001);
    });

    test('Wh to GWh', () => {
        expect(new Convert(1).from('Wh').to('GWh').evaluate()).toBeCloseTo(0.000000001);
    });

    test('GWh to mWh', () => {
        expect(new Convert(1).from('GWh').to('mWh').evaluate()).toBeCloseTo(1000000000000);
    });

    test('GWh to J', () => {
        expect(new Convert(1).from('GWh').to('J').evaluate()).toBeCloseTo(3600000000000);
    });

    test('MWh to mWh', () => {
        expect(new Convert(1).from('MWh').to('mWh').evaluate()).toBeCloseTo(1000000000);
    });

    test('kWh to mWh', () => {
        expect(new Convert(1).from('kWh').to('mWh').evaluate()).toBeCloseTo(1000000);
    });

    test('mWh to kWh', () => {
        expect(new Convert(1).from('mWh').to('kWh').evaluate()).toBeCloseTo(0.000001);
    });

    test('mWh to Wh', () => {
        expect(new Convert(1).from('mWh').to('Wh').evaluate()).toBeCloseTo(0.001);
    });

    test('kWh to Wh', () => {
        expect(new Convert(1).from('kWh').to('Wh').evaluate()).toBeCloseTo(1000);
    });

    test('kWh to kJ', () => {
        expect(new Convert(1).from('kWh').to('kJ').evaluate()).toBeCloseTo(3600);
    });

    test('BOE to J', () => {
        expect(new Convert(1).from('BOE').to('J').evaluate()).toBeCloseTo(6.1178632e9);
    });

    test('BOE to MBOE', () => {
        expect(new Convert(2).from('BOE').to('MBOE').evaluate()).toBeCloseTo(0.002);
    });

    test('MM BOE to BOE', () => {
        expect(new Convert(2).from('MM BOE').to('BOE').evaluate()).toBeCloseTo(2e6);
    });

    test('BOE to bbl (error)', () => {
        try {
            new Convert(1).from('BOE').to('bbl');
        } catch (err) {
            expect(err).toEqual(new ConversionNotSupportedError('Energy', 'Volume'));
        }
    });
});
