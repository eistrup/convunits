"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    Nm: { symbols: new Set(['Nm']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'lbf.ft': { symbols: new Set(['lbf.ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1.355818))] },
    'klbf.ft': { symbols: new Set(['klbf.ft', '1000lbf.ft', 'klb-ft', '1000lb-ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1355.818))] },
};
const quantity = new models_1.Quantity('Torque', units, []);
exports.default = quantity;
