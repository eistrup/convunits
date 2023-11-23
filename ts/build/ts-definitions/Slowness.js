"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    's/m': { symbols: new Set(['s/m']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'min/m': { symbols: new Set(['min/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(60))] },
    'min/km': { symbols: new Set(['min/km']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.06))] },
    'ms/m': { symbols: new Set(['ms/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    'us/m': { symbols: new Set(['us/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000001))] },
    'ns/m': { symbols: new Set(['ns/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-9))] },
    's/ft': { symbols: new Set(['s/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.280839895013123))] },
    'min/mi': { symbols: new Set(['min/mi']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.03728215223097112))] },
    'min/ft': { symbols: new Set(['min/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(196.85039370078738))] },
    'ms/ft': { symbols: new Set(['ms/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.003280839895013123))] },
    'us/ft': { symbols: new Set(['us/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000003280839895013123))] },
    'ns/ft': { symbols: new Set(['ns/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.2808398950131233e-9))] },
};
const quantity = new models_1.Quantity('Slowness', units, []);
exports.default = quantity;
