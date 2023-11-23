"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    ea: { symbols: new Set(['ea']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    dz: { symbols: new Set(['dz']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(12))] },
};
const quantity = new models_1.Quantity('Each', units, []);
exports.default = quantity;
