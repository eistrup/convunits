"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    rad: { symbols: new Set(['rad', 'radian', 'RAD']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(57.29577951308232))] },
    deg: { symbols: new Set(['deg', 'degrees', 'degree', 'DEG', 'dega']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    grad: { symbols: new Set(['grad']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.9))] },
    arcmin: { symbols: new Set(['arcmin']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.016666666666666666))] },
    arcsec: { symbols: new Set(['arcsec']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.0002777777777777778))] },
};
const quantity = new models_1.Quantity('Angle', units, []);
exports.default = quantity;
