export declare class UnitNotFoundError extends Error {
    constructor(unit: string);
}
export declare class ConversionNotSupportedError extends Error {
    constructor(fromQuantity: string, toQuantity: string);
}
export declare class ConversionNotInitializedError extends Error {
    constructor();
}
export declare class NotANumberError extends Error {
    constructor(value: string);
}
