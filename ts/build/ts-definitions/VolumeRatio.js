"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    'v/v': { symbols: new Set(['v/v', 'vol/vol', 'volume/volume']), system: models_1.UnitSystem._metric, transformations: [] },
    '%v/v': {
        symbols: new Set(['%v/v', 'vol/vol percent', 'volume/volume percentage']),
        system: models_1.UnitSystem._metric,
        transformations: [new models_1.FactorOperation(new expression_1.Num(0.01))],
        note: 'Necessary to allow volume ratio percentage (keeping distiction from a ratio without specified quantities). Symbol from: https://www.thoughtco.com/definition-of-volume-volume-percentage-605945#:~:text=Volume%2Fvolume%20percentage%20(v%2F,v%20percent)%20of%2012%20percent.',
    },
    'l/l': { symbols: new Set(['l/l', 'liters/liters']), system: models_1.UnitSystem._metric, transformations: [] },
    'ft3/ft3': { symbols: new Set(['ft3/ft3', 'cf/cf', 'scf/scf', 'SCF/SCF']), system: models_1.UnitSystem._imperial, transformations: [] },
    'm3/m3': { symbols: new Set(['m3/m3', 'M3/M3']), default: true, system: models_1.UnitSystem._metric, transformations: [] },
    'STB/STB': { symbols: new Set(['STB/STB', 'stb/stb']), system: models_1.UnitSystem._imperial, transformations: [] },
    'scf/stb': {
        symbols: new Set(['scf/stb', 'cf/stb', 'SCF/STB', 'StdCubicFeetPerStockTankBarrel', 'StdCubicFeetPerStdBarrel']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.FactorOperation(new expression_1.Num(0.17810760667903525))],
    },
    'stb/scf': {
        symbols: new Set(['stb/scf', 'stb/cf', 'STB/SCF', 'StockTankBarrelPerStdCubicFoot', 'StdBarrelPerStdCubicFoot']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.FactorOperation(new expression_1.Num(5.614583333333334))],
    },
    'stb/Mscf': {
        symbols: new Set(['stb/Mscf', 'stb/Mcf', 'STB/MSCF', 'StockTankBarrelPerThousandStdCubicFeet', 'StdBarrelPerThousandStdCubicFeet']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.FactorOperation(new expression_1.Num(0.005614583333333333))],
    },
    'Mscf/stb': {
        symbols: new Set(['Mscf/stb', 'Mcf/stb', 'MSCF/STB', 'ThousandStdCubicFeetPerStockTankBarrel', 'ThousandStdCubicFeetPerStdBarrel']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.FactorOperation(new expression_1.Num(178.10760667903526))],
    },
};
const quantity = new models_1.Quantity('Volume Ratio', units, []);
exports.default = quantity;
