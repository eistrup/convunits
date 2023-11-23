"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    W: { symbols: new Set(['W']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    mW: { symbols: new Set(['mW']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    kW: { symbols: new Set(['kW']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    MW: { symbols: new Set(['MW']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    GW: { symbols: new Set(['GW']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
    HP: { symbols: new Set(['HP']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(745.699872))] },
    'BOE/d': { symbols: new Set(['BOE/d', 'BOEPD', 'Barrel Oil Equivalent Per Day']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(70810.1851852))] },
    'MBOE/d': {
        symbols: new Set(['MBOE/d', 'M BOE/d', 'MBOEPD', 'M BOEPD', 'Thousand Barrel Oil Equivalent Per Day']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.FactorOperation(new expression_1.Num(70810185.1852))],
    },
    'MMBOE/d': {
        symbols: new Set(['MMBOE/d', 'MM BOE/d', 'MMBOEPD', 'MM BOEPD', 'Million Barrel Oil Equivalent Per Day']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.FactorOperation(new expression_1.Num(70810185185.2))],
    },
    'BTU/DAY': { symbols: new Set(['BTU/DAY']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.01221129459))] },
};
const quantity = new models_1.Quantity('Power', units, []);
exports.default = quantity;
