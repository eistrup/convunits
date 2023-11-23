"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'kg/m3': { symbols: new Set(['kg/m3', 'Kg/m3', 'KG/m3', 'KG/M3']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'kg/cm3': { symbols: new Set(['kg/cm3', 'Kg/cm3', 'KG/cm3', 'KG/CM3']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    'g/cm3': { symbols: new Set(['g/cm3', 'gram/cm3', 'g/cc', 'G/cm3', 'G/CM3', 'G/C3']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    'g/m3': { symbols: new Set(['g/m3', 'G/m3', 'G/M3']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    'kg/l': { symbols: new Set(['kg/l', 'Kg/l', 'KG/l', 'KG/L']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    'g/l': { symbols: new Set(['g/l', 'G/l', 'G/L']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    'mg/l': { symbols: new Set(['mg/l']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
    't/m3': { symbols: new Set(['t/m3']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    'lb/cu-ft': { symbols: new Set(['lb/cu-ft']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(16.018463367839058))] },
    'lb/gal': { symbols: new Set(['lb/gal', 'PPG', 'ppg']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(99.77644536795012))] },
    'lb/galUS': { symbols: new Set(['lb/galUS']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(119.8265141265246))] },
    'lb/bbl': { symbols: new Set(['lb/bbl']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(5032.709928654399))] },
    'oz/cu-in': { symbols: new Set(['oz/cu-in']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1729.9940435882186))] },
    'lb/cu-yd': { symbols: new Set(['lb/cu-yd']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(0.5932764210310761))] },
};
const quantity = new models_1.Quantity('Density', units, []);
exports.default = quantity;
