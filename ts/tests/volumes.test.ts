import { Convert } from '../src/convert';

describe('Volume', () => {
    test('l to l', () => {
        expect(new Convert(2).from('l').to('l').evaluate()).toBeCloseTo(2);
    });

    test('mm3 to l', () => {
        expect(new Convert(1000000).from('mm3').to('l').evaluate()).toBeCloseTo(1);
    });

    test('cm3 to l', () => {
        expect(new Convert(100).from('cm3').to('l').evaluate()).toBeCloseTo(1 / 10);
    });

    test('dl to l', () => {
        expect(new Convert(2).from('dl').to('l').evaluate()).toBeCloseTo(0.2);
    });

    test('cl to l', () => {
        expect(new Convert(25).from('cl').to('l').evaluate()).toBeCloseTo(0.25);
    });

    test('ml to l', () => {
        expect(new Convert(100).from('ml').to('l').evaluate()).toBeCloseTo(1 / 10);
    });

    test('m3 to l', () => {
        expect(new Convert(1).from('m3').to('l').evaluate()).toBeCloseTo(1000);
    });

    test('km3 to l', () => {
        expect(new Convert(1).from('km3').to('l').evaluate()).toBeCloseTo(1000000000000);
    });

    test('l to ml', () => {
        expect(new Convert(1).from('l').to('ml').evaluate()).toBeCloseTo(1000);
    });

    test('dl to ml', () => {
        expect(new Convert(10).from('dl').to('ml').evaluate()).toBeCloseTo(1000);
    });

    test('cl to ml', () => {
        expect(new Convert(100).from('cl').to('ml').evaluate()).toBeCloseTo(1000);
    });

    test('ml to ml', () => {
        expect(new Convert(13).from('ml').to('ml').evaluate()).toBeCloseTo(13);
    });

    test('msk to ml', () => {
        expect(new Convert(2).from('msk').to('ml').evaluate()).toBeCloseTo(30);
    });

    test('tsk to ml', () => {
        expect(new Convert(3).from('tsk').to('ml').evaluate()).toBeCloseTo(15);
    });

    test('krm to ml', () => {
        expect(new Convert(13).from('krm').to('ml').evaluate()).toBeCloseTo(13);
    });

    test('kanna to l', () => {
        expect(new Convert(2).from('kanna').to('l').evaluate()).toBeCloseTo(2 * 2.617);
    });

    test('kkp to ml', () => {
        expect(new Convert(2).from('kkp').to('ml').evaluate()).toBeCloseTo(300);
    });

    test('glas to ml', () => {
        expect(new Convert(2).from('glas').to('ml').evaluate()).toBeCloseTo(400);
    });

    test('ml to msk', () => {
        expect(new Convert(15).from('ml').to('msk').evaluate()).toBeCloseTo(1);
    });

    test('ml to tsk', () => {
        expect(new Convert(5).from('ml').to('tsk').evaluate()).toBeCloseTo(1);
    });

    test('ml to krm', () => {
        expect(new Convert(1).from('ml').to('krm').evaluate()).toBeCloseTo(1);
    });

    test('l to kanna', () => {
        expect(new Convert(2.617).from('l').to('kanna').evaluate()).toBeCloseTo(1);
    });

    test('lm to kkp', () => {
        expect(new Convert(150).from('ml').to('kkp').evaluate()).toBeCloseTo(1);
    });

    test('ml to glas', () => {
        expect(new Convert(200).from('ml').to('glas').evaluate()).toBeCloseTo(1);
    });

    test('fl-oz to fl-oz', () => {
        expect(new Convert(62).from('fl-oz').to('fl-oz').evaluate()).toBeCloseTo(62);
    });

    test('fl-oz to tbsp', () => {
        expect(new Convert(4).from('fl-oz').to('Tbs').evaluate()).toBeCloseTo(8);
    });

    test('Tbs to fl-oz', () => {
        expect(new Convert(2).from('Tbs').to('fl-oz').evaluate()).toBeCloseTo(1);
    });

    test('Tbs to Tbs', () => {
        expect(new Convert(140).from('Tbs').to('Tbs').evaluate()).toBeCloseTo(140);
    });

    test('tsp to l', () => {
        expect(new Convert(355).from('tsp').to('l').evaluate()).toBeCloseTo(1.75);
    });

    test('pnt to ml', () => {
        expect(new Convert(5).from('pnt').to('ml').evaluate()).toBeCloseTo(2365.882372125699);
    });

    test('gal to l', () => {
        expect(new Convert(10).from('gal').to('l').evaluate()).toBeCloseTo(37.85);
    });

    test('bbl to l', () => {
        expect(new Convert(1).from('bbl').to('m3').evaluate()).toBeCloseTo(0.15898711796566906);
    });

    test('MSTB to STB', () => {
        expect(new Convert(1).from('MSTB').to('STB').evaluate()).toBeCloseTo(1000);
    });

    test('StockTankBarrel to MMSTB', () => {
        expect(new Convert(1000).from('StockTankBarrel').to('MMSTB').evaluate()).toBeCloseTo(0.001);
    });

    test('SCF to BSCF', () => {
        expect(new Convert(1000000).from('SCF').to('BSCF').evaluate()).toBeCloseTo(0.001);
    });
});
