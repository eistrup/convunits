"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'S/m': { symbols: new Set(['S/m']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'mS/m': { symbols: new Set(['mS/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    'uS/m': { symbols: new Set(['uS/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000001))] },
    'nS/m': { symbols: new Set(['nS/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-9))] },
    'S/ft': { symbols: new Set(['S/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.28084))] },
    'mS/ft': { symbols: new Set(['mS/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.00328084))] },
    'uS/ft': { symbols: new Set(['uS/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.00000328084))] },
    'nS/ft': { symbols: new Set(['nS/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.28084e-9))] },
};
const quantity = new models_1.Quantity('Conductivity', units, []);
exports.default = quantity;
