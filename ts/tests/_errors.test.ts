import { UnitNotFoundError, ConversionNotSupportedError, ConversionNotInitializedError, NotANumberError } from '../src/errors';
import { Convert } from '../src/convert';
import { Num } from '../src/expression';

describe('_errors', () => {
    test('convert from "meeter" to "mm"', () => {
        let error;
        try {
            new Convert(1).from('meeter').to('mm').evaluate();
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(new UnitNotFoundError('meeter'));
    });

    test('convert from "meter" to "mylimeter"', () => {
        let error;
        try {
            new Convert(1).from('meter').to('mylimeter').evaluate();
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(new UnitNotFoundError('mylimeter'));
    });

    test('test toDefault() method with unit not found', () => {
        const nonSenseUnit = 'nonSenseUnit';
        try {
            new Convert(100).toDefault(nonSenseUnit).evaluate();
        } catch (err) {
            expect(err).toEqual(new UnitNotFoundError(nonSenseUnit));
        }
    });

    test('convert from "meter" to "liter"', () => {
        let error;
        try {
            new Convert(1).from('meter').to('liter').evaluate();
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(new ConversionNotSupportedError('Length', 'Volume'));
    });

    test('conversion not initialized', () => {
        let error;
        try {
            new Convert(1).to('liter');
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(new ConversionNotInitializedError());
    });

    test('value not a number', () => {
        const value = '1one';
        let error;
        try {
            const res = new Num(value).evaluate();
            console.log(res);
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(new NotANumberError(`${value}`));
    });

    test('SQL expression errors', () => {
        const nonSenseUnit = 'nonSenseUnit';
        const columnName = 'COL';
        try {
            new Convert(columnName).toDefault(nonSenseUnit);
        } catch (err) {
            expect(err).toEqual(new UnitNotFoundError(nonSenseUnit));
        }

        try {
            new Convert(columnName).from('meeter').to('mm');
        } catch (err) {
            expect(err).toEqual(new UnitNotFoundError('meeter'));
        }

        try {
            new Convert(columnName).from('meter').to('mylimeter');
        } catch (err) {
            expect(err).toEqual(new UnitNotFoundError('mylimeter'));
        }

        try {
            new Convert(columnName).from('meter').to('liter');
        } catch (err) {
            expect(err).toEqual(new ConversionNotSupportedError('Length', 'Volume'));
        }

        try {
            new Convert(columnName).to('liter');
        } catch (err) {
            expect(err).toEqual(new ConversionNotInitializedError());
        }
    });
});
