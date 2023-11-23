"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    lx: { symbols: new Set(['lx']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'ft-cd': { symbols: new Set(['ft-cd']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(10.76391))] },
};
const quantity = new models_1.Quantity('Illuminance', units, []);
exports.default = quantity;
