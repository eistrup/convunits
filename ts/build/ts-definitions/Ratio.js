"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    fraction: { symbols: new Set(['fraction', 'Fraction', 'FRACTION']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    pct: { symbols: new Set(['pct', '%', 'percent']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.01))] },
    ppm: { symbols: new Set(['ppm', 'PPM']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000001))] },
    ppb: { symbols: new Set(['ppb', 'PPB']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-9))] },
    ppt: { symbols: new Set(['ppt', 'PPT']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-12))] },
    ppq: { symbols: new Set(['ppq', 'PPQ']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-15))] },
};
const quantity = new models_1.Quantity('Ratio', units, []);
exports.default = quantity;
