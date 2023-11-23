"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    VAR: { symbols: new Set(['VAR']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    mVAR: { symbols: new Set(['mVAR']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    kVAR: { symbols: new Set(['kVAR']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    MVAR: { symbols: new Set(['MVAR']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    GVAR: { symbols: new Set(['GVAR']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
};
const quantity = new models_1.Quantity('Reactive Power', units, []);
exports.default = quantity;
