import { Convert } from '../src/convert';

describe('apiGravity', () => {
    test('API to API degrees', () => {
        expect(new Convert(1).from('API').to('API degrees').evaluate()).toBeCloseTo(1);
    });
});
