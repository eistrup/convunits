"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    '1/nm': { symbols: new Set(['1/nm']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
    '1/um': { symbols: new Set(['1/um']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    '1/mm': { symbols: new Set(['1/mm']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    '1/cm': { symbols: new Set(['1/cm']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(100))] },
    '1/m': { symbols: new Set(['1/m']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    '1/km': { symbols: new Set(['1/km']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    '1/in': { symbols: new Set(['1/in']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(39.37008))] },
    '10/in': { symbols: new Set(['10/in']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(393.7008))] },
    '1/yd': { symbols: new Set(['1/yd']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1.0936133333333333))] },
    '1/ft-us': { symbols: new Set(['1/ft-us']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.280833438333123))] },
    '1/ft': { symbols: new Set(['1/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.28084))] },
    '1/mi': { symbols: new Set(['1/mi']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.0006213712121212121))] },
    '1/nMi': { symbols: new Set(['1/nMi']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.0005399564195572175))] },
    '1/fathom': { symbols: new Set(['1/fathom']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.54680666666))] },
};
const quantity = new models_1.Quantity('Inverse Length', units, []);
exports.default = quantity;
