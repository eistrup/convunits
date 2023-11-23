import { Convert } from '../src/convert';

describe('_sql (generate SQL expressions for conversions)', () => {
    const COL = 'COLUMN_TO_CONVERT';
    test('SQL expression from F to K', () => {
        const fromUnit = 'F';
        const toUnit = 'K';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`((${COL}+459.67)*0.55555555555)`);
    });
    test('SQL expression from K to F', () => {
        const fromUnit = 'K';
        const toUnit = 'F';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`((${COL}/0.55555555555)-459.67)`);
    });
    test('SQL expression from F to C', () => {
        const fromUnit = 'F';
        const toUnit = 'C';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`(((${COL}+459.67)*0.55555555555)-273.15)`);
    });
    test('SQL expression from C to F', () => {
        const fromUnit = 'C';
        const toUnit = 'F';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`(((${COL}+273.15)/0.55555555555)-459.67)`);
    });

    test('SQL expression from ft to m', () => {
        const fromUnit = 'ft';
        const toUnit = 'm';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`(${COL}*0.3047999902464003)`);
    });
    test('SQL expression from ft to in', () => {
        const fromUnit = 'ft';
        const toUnit = 'in';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`((${COL}*0.3047999902464003)/0.025399999187200026)`);
    });

    test('SQL expression from psia to pascal', () => {
        const fromUnit = 'psia';
        const toUnit = 'pascal';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`(${COL}*6894.76000045014)`);
    });

    test('SQL expression from psia to psig', () => {
        const fromUnit = 'psia';
        const toUnit = 'psig';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`(((${COL}*6894.76000045014)/6894.76000045014)-14.695948775)`);
    });

    test('SQL expression from psi (psia) to psig', () => {
        const fromUnit = 'psi';
        const toUnit = 'psig';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`(((${COL}*6894.76000045014)/6894.76000045014)-14.695948775)`);
    });

    test('SQL expression from psig to psia', () => {
        const fromUnit = 'psig';
        const toUnit = 'psia';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`(((${COL}+14.695948775)*6894.76000045014)/6894.76000045014)`);
    });
    test('SQL expression from barg to psig', () => {
        const fromUnit = 'barg';
        const toUnit = 'psig';
        const expression = new Convert(COL).from(fromUnit).to(toUnit).asString();
        expect(expression).toBe(`((((${COL}+1.01325)*100000)/6894.76000045014)-14.695948775)`);
    });

    test('SQL expression toDefault() from MMscfd (to m3/s)', () => {
        const fromUnit = 'MMscfd';
        const defaultExpression = new Convert(COL).toDefault(fromUnit).asString();
        expect(defaultExpression).toBe(`(${COL}*0.327741280556)`);

        const defaultUnit = 'm3/s';
        const expression = new Convert(COL).from(fromUnit).to(defaultUnit).asString();
        expect(defaultExpression).toBe(expression);
    });
});
