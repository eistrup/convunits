"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'g-force': { symbols: new Set(['g-force']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(9.80665))] },
    'm/s2': { symbols: new Set(['m/s2']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'ft/s2': { symbols: new Set(['ft/s2']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.3047999902464003))] },
};
const quantity = new models_1.Quantity('Acceleration', units, []);
exports.default = quantity;
