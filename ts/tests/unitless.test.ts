import { Convert } from '../src/convert';

describe('Unitless', () => {
    test('# to None', () => {
        expect(new Convert(1).from('#').to('None').evaluate()).toBeCloseTo(1);
        expect(new Convert(100000000).from('#').to('None').evaluate()).toBeCloseTo(100000000);
    });
});
