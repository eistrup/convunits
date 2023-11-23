"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    mHz: { symbols: new Set(['mHz']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    Hz: { symbols: new Set(['Hz', 'hz', 'Herz', 'herz', '1/s', 's-1', 's^-1']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    kHz: { symbols: new Set(['kHz']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    MHz: { symbols: new Set(['MHz']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    GHz: { symbols: new Set(['GHz']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
    THz: { symbols: new Set(['THz']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000000))] },
};
const quantity = new models_1.Quantity('Frequency', units, []);
exports.default = quantity;
