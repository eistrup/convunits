"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    deltaC: { symbols: new Set(['deltaC', 'delta_degC', 'deltaCelsius', 'delta°C']), system: models_1.UnitSystem._metric, transformations: [] },
    deltaK: { symbols: new Set(['deltaK', 'delta_degK', 'deltaKelvin', 'delta°K']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    deltaF: { symbols: new Set(['deltaF', 'delta_degF', 'deltaFahrenheit', 'delta°F']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.55555555555))] },
    deltaR: { symbols: new Set(['deltaR', 'delta_degR', 'deltaRankine', 'delta°R']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.55555555555))] },
};
const quantity = new models_1.Quantity('Temperature Difference', units, []);
exports.default = quantity;
