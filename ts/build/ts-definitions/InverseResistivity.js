"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    '1/(ohm.m)': { symbols: new Set(['1/(ohm.m)']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    '1/(ohm.cm)': { symbols: new Set(['1/(ohm.cm)']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(100))] },
    '1/(ohm.mm)': { symbols: new Set(['1/(ohm.mm)']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    '1/(ohm.um)': { symbols: new Set(['1/(ohm.um)']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    '1/(ohm.nm)': { symbols: new Set(['1/(ohm.nm)']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
    '1/(ohm.pm)': { symbols: new Set(['1/(ohm.pm)']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000000))] },
    '1/(ohm.fm)': { symbols: new Set(['1/(ohm.fm)']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000000000))] },
    '1/(ohm.ft)': { symbols: new Set(['1/(ohm.ft)']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.280839895))] },
};
const quantity = new models_1.Quantity('Inverse Resistivity', units, []);
exports.default = quantity;
