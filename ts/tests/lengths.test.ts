import { Convert } from '../src/convert';
import { findQuantityBy, findUnitStandard } from '../src/definitions';

describe('Length', () => {
    test('ft to ft', () => {
        expect(new Convert(1).from('ft').to('ft').evaluate()).toBeCloseTo(1);
    });

    test('ft to ft-us', () => {
        expect(new Convert(1).from('ft').to('ft-us').evaluate()).toBeCloseTo(0.999998000004);
    });

    test('ft-us to ft', () => {
        expect(new Convert(1).from('ft-us').to('ft').evaluate()).toBeCloseTo(1.000002);
    });

    test('in to in', () => {
        expect(new Convert(7).from('in').to('in').evaluate()).toBeCloseTo(7);
    });

    test('ft to in', () => {
        expect(new Convert(1).from('ft').to('in').evaluate()).toBeCloseTo(12);
    });

    test('in to ft', () => {
        expect(new Convert(1).from('in').to('ft').evaluate()).toBeCloseTo(1 / 12);
    });

    test('ft to mi', () => {
        expect(new Convert(1).from('ft').to('mi').evaluate()).toBeCloseTo(1 / 5280);
    });

    test('mi to ft', () => {
        expect(new Convert(1).from('mi').to('ft').evaluate()).toBeCloseTo(5280);
    });

    test('nMi to mi', () => {
        expect(new Convert(1).from('nMi').to('mi').evaluate()).toBeCloseTo(1.150780303030303);
    });

    test('m to m', () => {
        expect(new Convert(1).from('m').to('m').evaluate()).toBeCloseTo(1);
    });

    test('m to cm', () => {
        expect(new Convert(1).from('m').to('cm').evaluate()).toBeCloseTo(100);
    });

    test('cm to m', () => {
        expect(new Convert(1).from('cm').to('m').evaluate()).toBeCloseTo(1 / 100);
    });

    test('m to mm', () => {
        expect(new Convert(1).from('m').to('mm').evaluate()).toBeCloseTo(1000);
    });

    test('meter to milimeter', () => {
        expect(new Convert(1).from('meter').to('milimeter').evaluate()).toBeCloseTo(1000);
    });

    test('m to ft', () => {
        expect(new Convert(1).from('m').to('ft').evaluate()).toBeCloseTo(3.28084);
    });

    test('km to m', () => {
        expect(new Convert(1).from('km').to('m').evaluate()).toBeCloseTo(1000);
    });

    test('m to ft-us', () => {
        expect(new Convert(1).from('m').to('ft-us').evaluate()).toBeCloseTo(3.28084);
    });

    test('nMi to m', () => {
        expect(new Convert(1).from('nMi').to('m').evaluate()).toBeCloseTo(1852);
    });

    test('fathom to m', () => {
        expect(new Convert(1).from('fathom').to('m').evaluate()).toBeCloseTo(1.8288);
    });

    test('64thsin to in', () => {
        expect(new Convert(1).from('64ths_in').to('in').evaluate()).toBeCloseTo(1 / 64);
        expect(new Convert(1).from('64thsin').to('m').evaluate()).toBeCloseTo((1 / 64) * 0.025399999187200026);
    });

    it('should convert recursive values into feet', async () => {
        const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        arr.forEach((num: number) => {
            expect(3.28084 * num).toBeCloseTo(new Convert(num).from('m').to('ft').evaluate());
        });
    });

    describe('test length units - um', () => {
        it('should retrieve quantity when unit is passed', async () => {
            const symbols = ['m', 'cm', 'mm', 'um', 'nm', 'feet', 'ft'];
            symbols.forEach((symbol: string) => {
                let quantity;
                const unitKey = findUnitStandard(symbol);
                if (unitKey) {
                    quantity = findQuantityBy(unitKey)?.name;
                }
                expect(quantity).toMatch('Length');
            });
        });
    });
});
