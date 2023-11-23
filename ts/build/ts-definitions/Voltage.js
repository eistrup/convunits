"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    V: { symbols: new Set(['V']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    mV: { symbols: new Set(['mV']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    kV: { symbols: new Set(['kV']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
};
const quantity = new models_1.Quantity('Voltage', units, []);
exports.default = quantity;
