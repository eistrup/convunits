"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'm3/s/Pa': { symbols: new Set(['m3/s/Pa']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'STB/D/psia': { symbols: new Set(['STB/D/psia', 'STB/D/PSIA', 'STB/D/P', 'stbpd/psi', 'STBPD/PSI']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(2.66888e-10))] },
};
const quantity = new models_1.Quantity('Productivity Index', units, []);
exports.default = quantity;
