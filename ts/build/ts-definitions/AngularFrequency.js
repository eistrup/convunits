"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'rad/s': { symbols: new Set(['rad/s', 'radian/s', 'radians/s', 'rad/sec', 'radian/sec', 'radians/sec']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    rpm: { symbols: new Set(['rpm', 'RPM', 'rotation/min', 'cycle/min']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.10471975512))] },
    cps: { symbols: new Set(['cps', 'CPS', 'cycle/s', 'cycle/sec', 'rotation/s', 'rotation/sec']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(6.28318530725))] },
    'deg/s': { symbols: new Set(['deg/s', 'degree/s', 'degree/sec', 'deg/sec']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(0.01745329251))] },
};
const quantity = new models_1.Quantity('Angular Frequency', units, []);
exports.default = quantity;
