import { Convert } from '../src/convert';

describe('angularFrequency', () => {
    test('rpm to rpm', () => {
        expect(new Convert(1).from('rpm').to('rpm').evaluate()).toEqual(1);
    });

    test('rad/s to rad/s', () => {
        expect(new Convert(1).from('rad/s').to('rad/s').evaluate()).toEqual(1);
    });

    test('rad/s to rpm', () => {
        expect(new Convert(1).from('rad/s').to('rpm').evaluate()).toBeCloseTo(9.54929658551);
    });

    test('rpm to rad/s', () => {
        expect(new Convert(1).from('rpm').to('rad/s').evaluate()).toBeCloseTo(0.104719755119701);
    });

    test('rad/s to cps', () => {
        expect(new Convert(1).from('rad/s').to('cps').evaluate()).toBeCloseTo(0.15915494309);
    });

    test('rotation/sec to rotation/min', () => {
        expect(new Convert(1).from('rotation/sec').to('rotation/min').evaluate()).toBeCloseTo(60);
    });

    test('deg/s to rad/s', () => {
        expect(new Convert(1).from('deg/s').to('rad/s').evaluate()).toBeCloseTo(0.01745329251);
    });

    test('deg/s to deg/s', () => {
        expect(new Convert(1).from('deg/s').to('deg/s').evaluate()).toBeCloseTo(1);
    });
});
