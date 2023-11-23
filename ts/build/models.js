"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quantity = exports.ShiftOperation = exports.FactorOperation = exports.UnitSystem = void 0;
const expression_1 = require("./expression");
var UnitSystem;
(function (UnitSystem) {
    UnitSystem["_imperial"] = "imperial";
    UnitSystem["_metric"] = "metric";
})(UnitSystem = exports.UnitSystem || (exports.UnitSystem = {}));
class FactorOperation {
    constructor(factor) {
        this.apply = (value) => {
            return new expression_1.Mul(value, this.opValue);
        };
        this.unapply = (value) => {
            return new expression_1.Div(value, this.opValue);
        };
        this.opValue = factor;
    }
}
exports.FactorOperation = FactorOperation;
class ShiftOperation {
    constructor(shift) {
        this.apply = (value) => {
            return new expression_1.Add(value, this.opValue);
        };
        this.unapply = (value) => {
            return new expression_1.Sub(value, this.opValue);
        };
        this.opValue = shift;
    }
}
exports.ShiftOperation = ShiftOperation;
class Quantity {
    constructor(name, units, subquantities) {
        this.name = name;
        this.units = units;
        this.subquantities = subquantities;
    }
    findDefaultUnit() {
        const symbolsSet = Object.values(this.units).find((unit) => unit.default).symbols;
        return symbolsSet.values().next().value;
    }
}
exports.Quantity = Quantity;
