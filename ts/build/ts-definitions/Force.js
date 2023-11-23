"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    N: { symbols: new Set(['N']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    kN: { symbols: new Set(['kN']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    kgf: { symbols: new Set(['kgf', 'Kg.f', 'kg.f', 'KGF', 'Kgf']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(9.80665))] },
    lbf: { symbols: new Set(['lbf']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(4.44822))] },
    klbf: { symbols: new Set(['klbf']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(4448.22))] },
};
const quantity = new models_1.Quantity('Force', units, []);
exports.default = quantity;
