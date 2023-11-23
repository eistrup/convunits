"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
const errors_1 = require("./errors");
const definitions_1 = require("./definitions");
const expression_1 = require("./expression");
class Convert {
    constructor(value) {
        this.result = new expression_1.Num(value.toString());
    }
    from(unitSymbol) {
        const unitKey = (0, definitions_1.findUnitStandard)(unitSymbol);
        if (!unitKey)
            throw new errors_1.UnitNotFoundError(unitSymbol);
        const quantity = (0, definitions_1.findQuantityBy)(unitKey);
        this.quantity = quantity;
        this.fromU = quantity.units[unitKey];
        this.fromU.transformations.forEach((operation) => {
            this.result = operation.apply(this.result);
        });
        return this;
    }
    to(unitSymbol) {
        if (!this.fromU)
            throw new errors_1.ConversionNotInitializedError();
        const unitKey = (0, definitions_1.findUnitStandard)(unitSymbol);
        if (!unitKey)
            throw new errors_1.UnitNotFoundError(unitSymbol);
        const quantity = (0, definitions_1.findQuantityBy)(unitKey);
        if (quantity !== this.quantity)
            throw new errors_1.ConversionNotSupportedError(this.quantity.name, quantity.name);
        this.toU = quantity.units[unitKey];
        [...this.toU.transformations].reverse().forEach((operation) => {
            this.result = operation.unapply(this.result);
        });
        return this.result;
    }
    toDefault(unitSymbol) {
        return this.from(unitSymbol).result;
    }
}
exports.Convert = Convert;
