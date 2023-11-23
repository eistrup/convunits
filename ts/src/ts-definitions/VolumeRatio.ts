import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'v/v': { symbols: new Set(['v/v', 'vol/vol', 'volume/volume']), system: UnitSystem._metric, transformations: [] },
    '%v/v': {
        symbols: new Set(['%v/v', 'vol/vol percent', 'volume/volume percentage']),
        system: UnitSystem._metric,
        transformations: [new FactorOperation(new Num(0.01))],
        note: 'Necessary to allow volume ratio percentage (keeping distiction from a ratio without specified quantities). Symbol from: https://www.thoughtco.com/definition-of-volume-volume-percentage-605945#:~:text=Volume%2Fvolume%20percentage%20(v%2F,v%20percent)%20of%2012%20percent.',
    },
    'l/l': { symbols: new Set(['l/l', 'liters/liters']), system: UnitSystem._metric, transformations: [] },
    'ft3/ft3': { symbols: new Set(['ft3/ft3', 'cf/cf', 'scf/scf', 'SCF/SCF']), system: UnitSystem._imperial, transformations: [] },
    'm3/m3': { symbols: new Set(['m3/m3', 'M3/M3']), default: true, system: UnitSystem._metric, transformations: [] },
    'STB/STB': { symbols: new Set(['STB/STB', 'stb/stb']), system: UnitSystem._imperial, transformations: [] },
    'scf/stb': {
        symbols: new Set(['scf/stb', 'cf/stb', 'SCF/STB', 'StdCubicFeetPerStockTankBarrel', 'StdCubicFeetPerStdBarrel']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.17810760667903525))],
    },
    'stb/scf': {
        symbols: new Set(['stb/scf', 'stb/cf', 'STB/SCF', 'StockTankBarrelPerStdCubicFoot', 'StdBarrelPerStdCubicFoot']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(5.614583333333334))],
    },
    'stb/Mscf': {
        symbols: new Set(['stb/Mscf', 'stb/Mcf', 'STB/MSCF', 'StockTankBarrelPerThousandStdCubicFeet', 'StdBarrelPerThousandStdCubicFeet']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.005614583333333333))],
    },
    'Mscf/stb': {
        symbols: new Set(['Mscf/stb', 'Mcf/stb', 'MSCF/STB', 'ThousandStdCubicFeetPerStockTankBarrel', 'ThousandStdCubicFeetPerStdBarrel']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(178.10760667903526))],
    },
};

const quantity: Quantity = new Quantity('Volume Ratio', units, []);

export default quantity;
