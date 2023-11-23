"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    A: { symbols: new Set(['A']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    mA: { symbols: new Set(['mA']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    kA: { symbols: new Set(['kA']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    MA: {
        symbols: new Set(['MA']),
        system: models_1.UnitSystem._metric,
        transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))],
        note: 'symbol occurred in a DLIS file in the context of BHI where we have resistivity related data channels. Mega-ampère (MA) is the most plausible unit it represents.',
    },
};
const quantity = new models_1.Quantity('Current', units, []);
exports.default = quantity;
