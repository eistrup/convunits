"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotANumberError = exports.ConversionNotInitializedError = exports.ConversionNotSupportedError = exports.UnitNotFoundError = void 0;
class UnitNotFoundError extends Error {
    constructor(unit) {
        super(`Unit ${unit} not found`);
    }
}
exports.UnitNotFoundError = UnitNotFoundError;
class ConversionNotSupportedError extends Error {
    constructor(fromQuantity, toQuantity) {
        super(`Quantities ${fromQuantity} and ${toQuantity} not same.`);
    }
}
exports.ConversionNotSupportedError = ConversionNotSupportedError;
class ConversionNotInitializedError extends Error {
    constructor() {
        super(`Conversion not initialized.`);
    }
}
exports.ConversionNotInitializedError = ConversionNotInitializedError;
class NotANumberError extends Error {
    constructor(value) {
        super(`Evaluation failed. ${value} is not number.`);
    }
}
exports.NotANumberError = NotANumberError;
