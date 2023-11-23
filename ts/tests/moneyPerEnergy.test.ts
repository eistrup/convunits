import { Convert } from '../src/convert';

describe('moneyPerEnergy', () => {
    test('USD/J to USD/kWh', () => {
        expect(new Convert(1).from('USD/J').to('USD/kWh').evaluate()).toBeCloseTo(1 / 2.77777778e-7);
    });

    test('$/BOE to $/kWh', () => {
        expect(new Convert(1).from('$/BOE').to('$/kWh').evaluate()).toBeCloseTo(1.6345576e-10 / 2.77777778e-7);
    });
});
