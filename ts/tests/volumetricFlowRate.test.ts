import { Convert } from '../src/convert';

describe('volumetricFlowRate', () => {
    test('l/s to l/s', () => {
        expect(new Convert(2).from('l/s').to('l/s').evaluate()).toBeCloseTo(2);
    });

    test('mm3/s to l/s', () => {
        expect(new Convert(1000000).from('mm3/s').to('l/s').evaluate()).toBeCloseTo(1);
    });

    test('cm3/s to l/s', () => {
        expect(new Convert(100).from('cm3/s').to('l/s').evaluate()).toBeCloseTo(1 / 10);
    });

    test('dl/s to l/s', () => {
        expect(new Convert(2).from('dl/s').to('l/s').evaluate()).toBeCloseTo(0.2);
    });

    test('cl/s to l/s', () => {
        expect(new Convert(25).from('cl/s').to('l/s').evaluate()).toBeCloseTo(0.25);
    });

    test('ml/s to l/s', () => {
        expect(new Convert(100).from('ml/s').to('l/s').evaluate()).toBeCloseTo(1 / 10);
    });

    test('m3/s to l/s', () => {
        expect(new Convert(1).from('m3/s').to('l/s').evaluate()).toBeCloseTo(1000);
    });

    test('km3/s to l/s', () => {
        expect(new Convert(1).from('km3/s').to('l/s').evaluate()).toBeCloseTo(1000000000000);
    });

    test('l/s to ml/s', () => {
        expect(new Convert(1).from('l/s').to('ml/s').evaluate()).toBeCloseTo(1000);
    });

    test('dl/s to ml/s', () => {
        expect(new Convert(10).from('dl/s').to('ml/s').evaluate()).toBeCloseTo(1000);
    });

    test('cl/s to ml/s', () => {
        expect(new Convert(100).from('cl/s').to('ml/s').evaluate()).toBeCloseTo(1000);
    });

    test('ml/s to ml/s', () => {
        expect(new Convert(13).from('ml/s').to('ml/s').evaluate()).toBeCloseTo(13);
    });

    test('fl-oz/s to fl-oz/s', () => {
        expect(new Convert(62).from('fl-oz/s').to('fl-oz/s').evaluate()).toBeCloseTo(62);
    });

    test('fl-oz/s to Tbs/s', () => {
        expect(new Convert(4).from('fl-oz/s').to('Tbs/s').evaluate()).toBeCloseTo(8);
    });

    test('Tbs/s to fl-oz/s', () => {
        expect(new Convert(2).from('Tbs/s').to('fl-oz/s').evaluate()).toBeCloseTo(1);
    });

    test('Tbs/s to Tbs/s', () => {
        expect(new Convert(140).from('Tbs/s').to('Tbs/s').evaluate()).toBeCloseTo(140);
    });

    test('l/s to l/min', () => {
        expect(new Convert(1).from('l/s').to('l/min').evaluate()).toBeCloseTo(60);
    });

    test('l/s to l/h', () => {
        expect(new Convert(1).from('l/s').to('l/h').evaluate()).toBeCloseTo(3600);
    });

    test('kl/s to kl/h', () => {
        expect(new Convert(1).from('kl/s').to('kl/h').evaluate()).toBeCloseTo(3600);
    });

    test('l/s to kl/h', () => {
        expect(new Convert(1).from('l/s').to('kl/h').evaluate()).toBeCloseTo(3.6);
    });

    test('l/s to m3/s', () => {
        expect(new Convert(1).from('l/s').to('m3/s').evaluate()).toBeCloseTo(0.001);
    });

    test('m3/s to m3/h', () => {
        expect(new Convert(1).from('kl/s').to('kl/h').evaluate()).toBeCloseTo(3600);
    });

    test('tsp/s to l/s', () => {
        expect(new Convert(355).from('tsp/s').to('l/s').evaluate()).toBeCloseTo(1.75);
    });

    test('pnt/min to kl/h', () => {
        expect(new Convert(1).from('pnt/min').to('kl/h').evaluate()).toBeCloseTo(0.0283905884);
    });

    test('MMscfd to l/s', () => {
        expect(new Convert(1).from('MMscfd').to('l/s').evaluate()).toBeCloseTo(327.741280556);
    });

    test('MMSCFD to l/s', () => {
        expect(new Convert(1).from('MMSCFD').to('l/s').evaluate()).toBeCloseTo(327.741280556);
    });

    test('Mmscfd to l/s', () => {
        expect(new Convert(1).from('Mmscfd').to('l/s').evaluate()).toBeCloseTo(327.741280556);
    });

    test('Mscfd to l/s', () => {
        expect(new Convert(1).from('Mscfd').to('l/s').evaluate()).toBeCloseTo(0.327741280556);
    });

    test('scfd to l/s', () => {
        expect(new Convert(1).from('scfd').to('l/s').evaluate()).toBeCloseTo(0.000327741280556);
    });

    test('SCFD to l/s', () => {
        expect(new Convert(1).from('SCFD').to('l/s').evaluate()).toBeCloseTo(0.000327741280556);
    });

    test('bpd to l/s', () => {
        expect(new Convert(1).from('bpd').to('l/s').evaluate()).toBeCloseTo(0.001842233734980409);
    });

    test('MSTBPD to l/s', () => {
        expect(new Convert(1).from('MSTBPD').to('l/s').evaluate()).toBeCloseTo(1.842233734980409);
    });

    test('Mstbpd to m3/s', () => {
        expect(new Convert(1).from('Mstbpd').to('m3/s').evaluate()).toBeCloseTo(0.001842233734980409);
    });
});
