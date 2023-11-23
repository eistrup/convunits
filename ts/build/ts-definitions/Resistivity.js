"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'ohm.m': { symbols: new Set(['ohm.m', 'Ohm.m', 'OHMM', 'ohmm', 'Ohm.meter', 'ohm.meter', 'Ohm.Meter']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'ohm.cm': { symbols: new Set(['ohm.cm']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.01))] },
    'ohm.mm': { symbols: new Set(['ohm.mm']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    'ohm.um': { symbols: new Set(['ohm.um']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000001))] },
    'ohm.nm': { symbols: new Set(['ohm.nm']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-9))] },
    'ohm.ft': { symbols: new Set(['ohm.ft', 'ohm.feet', 'ohmft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.3048000000012192))] },
};
const quantity = new models_1.Quantity('Resistivity', units, []);
exports.default = quantity;
