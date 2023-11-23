"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    pixel: { symbols: new Set(['pixel', 'Pixel', 'px', 'Px', 'Pixels', 'pixels']), system: models_1.UnitSystem._metric, default: true, transformations: [new models_1.FactorOperation(new expression_1.Num(1))] },
};
const quantity = new models_1.Quantity('Pixels', units, []);
exports.default = quantity;
