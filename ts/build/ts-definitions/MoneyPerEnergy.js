"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'USD/J': { symbols: new Set(['USD/J', '$/J']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'USD/kWh': { symbols: new Set(['USD/kWh', '$/kWh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(2.77777778e-7))] },
    'USD/BOE': { symbols: new Set(['USD/BOE', '$/BOE']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1.6345576e-10))] },
};
const quantity = new models_1.Quantity('Money Per Energy', units, ['Production Cost', 'Lifting Cost', 'Unit Technical Cost', 'Production Revenue']);
exports.default = quantity;
