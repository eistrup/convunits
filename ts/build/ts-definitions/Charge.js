"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    c: { symbols: new Set(['c']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    mC: { symbols: new Set(['mC']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    μC: { symbols: new Set(['μC']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000001))] },
    nC: { symbols: new Set(['nC']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-9))] },
    pC: { symbols: new Set(['pC']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-12))] },
};
const quantity = new models_1.Quantity('Charge', units, []);
exports.default = quantity;
