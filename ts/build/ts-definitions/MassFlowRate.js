"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'kg/s': { symbols: new Set(['kg/s', 'Kg/s', 'KG/S', 'kg/sec']), system: models_1.UnitSystem._metric, default: true, transformations: [] },
    'kg/h': { symbols: new Set(['kg/h', 'Kg/h', 'KG/H', 'kg/hour']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.0002777777777777778))] },
    'kg/d': { symbols: new Set(['kg/d', 'Kg/d', 'KG/D', 'kg/day']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.006666666666666667))] },
    'kg/y': { symbols: new Set(['kg/y', 'Kg/y', 'KG/Y', 'kg/year']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(2.433333333333333))] },
    't/y': { symbols: new Set(['t/y', 'ton/y', 'ton/year', 't/year']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(2433.3333333333335))] },
    'kt/y': {
        symbols: new Set(['kt/y', 'kiloton/y', 'kiloton/year', 'ThousandTon/Year', "MT'000 p.a.", "M.T. '000 p.a.", 'MT000 p.a.', 'Thousand Metric Tonnes Per Annum']),
        system: models_1.UnitSystem._metric,
        transformations: [new models_1.FactorOperation(new expression_1.Num(2433333.3333333335))],
    },
};
const quantity = new models_1.Quantity('Mass Flow Rate', units, []);
exports.default = quantity;
