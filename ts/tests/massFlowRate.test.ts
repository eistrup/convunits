import { Convert } from '../src/convert';

describe('massFlowRate', () => {
    test('kg/s to kg/h', () => {
        expect(new Convert(1).from('kg/s').to('kg/h').evaluate()).toBeCloseTo(3600);
    });

    test('ton/y to kg/year', () => {
        expect(new Convert(1).from('ton/y').to('kg/year').evaluate()).toBeCloseTo(1000);
    });

    test('MT000 p.a. to kg/year', () => {
        expect(new Convert(0.001).from('MT000 p.a.').to('kg/year').evaluate()).toBeCloseTo(1000);
    });
});
