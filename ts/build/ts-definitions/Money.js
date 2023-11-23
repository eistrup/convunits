"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    USD: { symbols: new Set(['USD', 'Usd', 'usd', '$', 'dollar', 'US dollar']), system: models_1.UnitSystem._metric, default: true, transformations: [] },
    'Thousand USD': { symbols: new Set(['Thousand USD', 'M USD']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    'Million USD': { symbols: new Set(['Million USD', 'MM USD']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
};
const quantity = new models_1.Quantity('Money', units, ['Cost', 'Capital', 'Cash', 'Finance']);
exports.default = quantity;
