export class UnitNotFoundError extends Error {
    constructor(unit: string) {
        super(`Unit ${unit} not found`);
    }
}

export class ConversionNotSupportedError extends Error {
    constructor(fromQuantity: string, toQuantity: string) {
        super(`Quantities ${fromQuantity} and ${toQuantity} not same.`);
    }
}

export class ConversionNotInitializedError extends Error {
    constructor() {
        super(`Conversion not initialized.`);
    }
}
export class NotANumberError extends Error {
    constructor(value: string) {
        super(`Evaluation failed. ${value} is not number.`);
    }
}
