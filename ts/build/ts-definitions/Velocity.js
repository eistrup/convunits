"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'm/s': { symbols: new Set(['m/s', 'meter/second', 'meter/sec', 'm/sec']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'km/h': { symbols: new Set(['km/h', 'km/hour', 'kph']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.277778))] },
    'm/h': { symbols: new Set(['m/h', 'MPH', 'mph', 'miles/hour']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.4470410016946879))] },
    knot: { symbols: new Set(['knot']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.514444471537777))] },
    'ft/s': { symbols: new Set(['ft/s', 'feet/second', 'feet/sec', 'ft/sec']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.3047999902464003))] },
    'ft/min': { symbols: new Set(['ft/min']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.00508000999743968))] },
    'ft/h': { symbols: new Set(['ft/h']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.00008466666158666683))] },
};
const quantity = new models_1.Quantity('Velocity', units, []);
exports.default = quantity;
