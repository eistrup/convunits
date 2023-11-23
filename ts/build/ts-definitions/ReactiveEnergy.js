"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    VARh: { symbols: new Set(['VARh']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    mVARh: { symbols: new Set(['mVARh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    kVARh: { symbols: new Set(['kVARh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    MVARh: { symbols: new Set(['MVARh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    GVARh: { symbols: new Set(['GVARh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
};
const quantity = new models_1.Quantity('Reactive Energy', units, []);
exports.default = quantity;
