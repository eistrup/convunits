import { Convert } from '../src/convert';

describe('gammaRay', () => {
    test('gAPI to GAPI', () => {
        expect(new Convert(1).from('gAPI').to('GAPI').evaluate()).toBeCloseTo(1);
    });
});
