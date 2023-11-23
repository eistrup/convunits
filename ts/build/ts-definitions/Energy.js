"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    Wh: { symbols: new Set(['Wh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3600))] },
    mWh: { symbols: new Set(['mWh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3.6))] },
    kWh: { symbols: new Set(['kWh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3600000))] },
    MWh: { symbols: new Set(['MWh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3600000000))] },
    GWh: { symbols: new Set(['GWh']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3600000000000))] },
    J: { symbols: new Set(['J']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    kJ: { symbols: new Set(['kJ']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    'ft.lbf': { symbols: new Set(['ft.lbf']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1.3558179))] },
    'kft.lbf': { symbols: new Set(['kft.lbf']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1355.8179))] },
    BTU: { symbols: new Set(['BTU', 'British Thermal Unit']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(1055.0558526))] },
    BOE: { symbols: new Set(['BOE', 'Barrel Oil Equivalent']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6117863200))] },
    MBOE: { symbols: new Set(['MBOE', 'M BOE', 'Thousand Barrel Oil Equivalent']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6117863200000))] },
    MMBOE: { symbols: new Set(['MMBOE', 'MM BOE', 'Million Barrel Oil Equivalent']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6117863200000000))] },
};
const quantity = new models_1.Quantity('Energy', units, []);
exports.default = quantity;
