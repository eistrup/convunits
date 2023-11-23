import { Convert } from '../src/convert';

describe('illumincance', () => {
    test('ft-cd to lx', () => {
        expect(new Convert(1).from('ft-cd').to('lx').evaluate()).toBeCloseTo(10.76391);
    });

    test('lx to ft-cd', () => {
        expect(new Convert(1).from('lx').to('ft-cd').evaluate()).toBeCloseTo(0.09290304359661128);
    });
});
