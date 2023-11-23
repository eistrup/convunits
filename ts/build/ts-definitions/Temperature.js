"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    C: { symbols: new Set(['C', 'degC', 'Celsius', '°C']), system: models_1.UnitSystem._metric, transformations: [new models_1.ShiftOperation(new expression_1.Num(273.15))] },
    K: { symbols: new Set(['K', 'degK', 'Kelvin', '°K']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    F: { symbols: new Set(['F', 'degF', 'Fahrenheit', '°F']), system: models_1.UnitSystem._imperial, transformations: [new models_1.ShiftOperation(new expression_1.Num(459.67)), new models_1.FactorOperation(new expression_1.Num(0.55555555555))] },
    R: { symbols: new Set(['R', 'degR', 'Rankine', '°R']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.55555555555))] },
};
const quantity = new models_1.Quantity('Temperature', units, []);
exports.default = quantity;
