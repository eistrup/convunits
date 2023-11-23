"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    ns: { symbols: new Set(['ns', 'nsec']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1e-9))] },
    us: { symbols: new Set(['us', 'usec']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.000001))] },
    ms: { symbols: new Set(['ms', 'msec']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.001))] },
    s: { symbols: new Set(['s', 'sec', 'second']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    min: { symbols: new Set(['min', 'minute']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(60))] },
    h: { symbols: new Set(['h', 'hour', 'H']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(3600))] },
    day: { symbols: new Set(['day', 'Day', 'd', 'Days', 'days', 'DAYS']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(86400))] },
    week: { symbols: new Set(['week', 'Week', 'w']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(604800))] },
    month: { symbols: new Set(['month', 'Month', 'M']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(2628000))] },
    year: { symbols: new Set(['year', 'years', 'Year', 'Years', 'yr', 'yrs', 'Yr', 'Yrs', 'Y', 'y']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(31536000))] },
};
const quantity = new models_1.Quantity('Time', units, []);
exports.default = quantity;
