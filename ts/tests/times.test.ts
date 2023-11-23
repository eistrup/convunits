import { Convert } from '../src/convert';

describe('Time', () => {
    test('s to us', () => {
        expect(new Convert(1).from('s').to('us').evaluate()).toBeCloseTo(1000000);
    });

    test('s to ms', () => {
        expect(new Convert(1).from('s').to('ms').evaluate()).toBeCloseTo(1000);
    });

    test('s to m', () => {
        expect(new Convert(60).from('s').to('min').evaluate()).toBeCloseTo(1);
    });

    test('sec to s', () => {
        expect(new Convert(1).from('sec').to('s').evaluate()).toBeCloseTo(1);
    });

    test('s to hour', () => {
        expect(new Convert(3600).from('s').to('hour').evaluate()).toBeCloseTo(1);
    });

    test('s to day', () => {
        expect(new Convert(86400).from('s').to('day').evaluate()).toBeCloseTo(1);
    });

    test('day to week', () => {
        expect(new Convert(7).from('day').to('week').evaluate()).toBeCloseTo(1);
    });

    test('d (instead of day) to w (instead of week)', () => {
        expect(new Convert(7).from('d').to('w').evaluate()).toBeCloseTo(1);
    });

    test('day to Month', () => {
        expect(new Convert(30.4375).from('day').to('Month').evaluate()).toBeCloseTo(1);
    });

    test('day to year', () => {
        expect(new Convert(365).from('day').to('year').evaluate()).toBeCloseTo(1);
    });

    test('d (instead of day) to Y (instead of year)', () => {
        expect(new Convert(365).from('d').to('Y').evaluate()).toBeCloseTo(1);
    });

    test('month to year', () => {
        expect(new Convert(12).from('month').to('year').evaluate()).toBeCloseTo(1);
    });

    test('Years to days', () => {
        expect(new Convert(1).from('Years').to('day').evaluate()).toBeCloseTo(365);
    });
});
