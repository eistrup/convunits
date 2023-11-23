"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'deg/m': { symbols: new Set(['deg/m', 'dega/m']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'deg/ft': { symbols: new Set(['deg/ft', 'dega/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(3.28084))] },
    'deg/100ft': { symbols: new Set(['deg/100ft', 'dega/100ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(328.084))] },
};
const quantity = new models_1.Quantity('Dogleg Severity', units, []);
exports.default = quantity;
