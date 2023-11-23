"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    ug: { symbols: new Set(['ug']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(9.999999999999999e-10))] },
    mg: { symbols: new Set(['mg']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000001))] },
    g: { symbols: new Set(['g']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    kg: { symbols: new Set(['kg']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    t: { symbols: new Set(['t', 'mt', 'metric ton']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    oz: { symbols: new Set(['oz']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.0283495))] },
    lb: { symbols: new Set(['lb']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.453592))] },
    'us-t': { symbols: new Set(['us-t', 'short ton', 'US ton', 'american ton']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(907.184))] },
    'uk-t': { symbols: new Set(['uk-t', 'long ton', 'UK ton', 'english ton', 'british ton']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1016.05))] },
};
const quantity = new models_1.Quantity('Mass', units, ['Weight']);
exports.default = quantity;
