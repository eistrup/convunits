"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    unitless: {
        symbols: new Set(['unitless', 'dimensionless', '', ' ', 'none', 'None', 'NONE', 'NoNe', '#']),
        system: models_1.UnitSystem._metric,
        default: true,
        transformations: [new models_1.FactorOperation(new expression_1.Num(1))],
    },
};
const quantity = new models_1.Quantity('Unitless', units, ['Perforation Index', 'Poisson Ratio', 'Normalized', 'Saturation']);
exports.default = quantity;
