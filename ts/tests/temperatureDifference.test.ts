import { Convert } from '../src/convert';

describe('temperatureDifference', () => {
    test('deltaC to deltaK', () => {
        expect(new Convert(10).from('deltaC').to('deltaK').evaluate()).toBeCloseTo(10);
    });

    test('deltaK to deltaC', () => {
        expect(new Convert(10).from('deltaK').to('deltaC').evaluate()).toBeCloseTo(10);
    });

    test('deltaF to deltaR', () => {
        expect(new Convert(10).from('deltaF').to('deltaR').evaluate()).toBeCloseTo(10);
    });

    test('deltaR to deltaF', () => {
        expect(new Convert(10).from('deltaR').to('deltaF').evaluate()).toBeCloseTo(10);
    });

    test('deltaC to deltaF', () => {
        expect(new Convert(41).from('deltaC').to('deltaF').evaluate()).toBeCloseTo(73.8);
    });

    test('deltaF to deltaC', () => {
        expect(new Convert(73.8).from('deltaF').to('deltaC').evaluate()).toBeCloseTo(41);
    });

    test('deltaR to deltaK', () => {
        expect(new Convert(73.8).from('deltaR').to('deltaK').evaluate()).toBeCloseTo(41);
    });

    test('deltaK to deltaF', () => {
        expect(new Convert(41).from('deltaK').to('deltaF').evaluate()).toBeCloseTo(73.8);
    });
});
