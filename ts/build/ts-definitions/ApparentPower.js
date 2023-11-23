"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    VA: { symbols: new Set(['VA']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    mVA: { symbols: new Set(['mVA']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    kVA: { symbols: new Set(['kVA']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    MVA: { symbols: new Set(['MVA']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    GVA: { symbols: new Set(['GVA']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
};
const quantity = new models_1.Quantity('Apparent Power', units, []);
exports.default = quantity;
