"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'Pa/m': { symbols: new Set(['Pa/m']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'kPa/m': { symbols: new Set(['kPa/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    'MPa/m': { symbols: new Set(['MPa/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    'GPa/m': { symbols: new Set(['GPa/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
    'Pa/ft': { symbols: new Set(['Pa/ft']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3.28084))] },
    'kPa/ft': { symbols: new Set(['kPa/ft']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3280.84))] },
    'MPa/ft': { symbols: new Set(['MPa/ft']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3280840))] },
    'GPa/ft': { symbols: new Set(['GPa/ft']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3280840000))] },
    'bar/m': { symbols: new Set(['bar/m']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(100000))] },
    'bar/ft': { symbols: new Set(['bar/ft']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(328084))] },
    'psi/ft': { symbols: new Set(['psi/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(22620.5948))] },
    'kpsi/ft': { symbols: new Set(['kpsi/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(22620594.8))] },
    'Mpsi/ft': { symbols: new Set(['Mpsi/ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(22620594800))] },
    'psi/m': { symbols: new Set(['psi/m']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6894.757074407773))] },
    'kpsi/m': { symbols: new Set(['kpsi/m']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6894757.074407774))] },
    'Mpsi/m': { symbols: new Set(['Mpsi/m']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6894757074.407773))] },
};
const quantity = new models_1.Quantity('Pressure Gradient', units, []);
exports.default = quantity;
