import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'mm3/s': { symbols: new Set(['mm3/s']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    'cm3/s': { symbols: new Set(['cm3/s']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    'ml/s': { symbols: new Set(['ml/s']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    'cl/s': { symbols: new Set(['cl/s']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.00001))] },
    'dl/s': { symbols: new Set(['dl/s']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0001))] },
    'l/s': { symbols: new Set(['l/s']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    'l/min': { symbols: new Set(['l/min', 'lpm', 'LPM']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000016666666666666667))] },
    'l/h': { symbols: new Set(['l/h']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(2.7777777777777776e-7))] },
    'kl/s': { symbols: new Set(['kl/s']), system: UnitSystem._metric, transformations: [] },
    'kl/min': { symbols: new Set(['kl/min']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.016666666666666666))] },
    'kl/h': { symbols: new Set(['kl/h']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0002777777777777778))] },
    'm3/s': { symbols: new Set(['m3/s']), default: true, system: UnitSystem._metric, transformations: [] },
    'm3/min': { symbols: new Set(['m3/min']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.016666666666666666))] },
    'm3/h': { symbols: new Set(['m3/h']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0002777777777777778))] },
    'km3/s': { symbols: new Set(['km3/s']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    'tsp/s': { symbols: new Set(['tsp/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0000049289215940186454))] },
    'Tbs/s': { symbols: new Set(['Tbs/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000014786764782055937))] },
    'in3/s': { symbols: new Set(['in3/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00001638698846677003))] },
    'in3/min': { symbols: new Set(['in3/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(2.7311647444616716e-7))] },
    'in3/h': { symbols: new Set(['in3/h']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(4.551941240769452e-9))] },
    'fl-oz/s': { symbols: new Set(['fl-oz/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000029573529564111874))] },
    'fl-oz/min': { symbols: new Set(['fl-oz/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(4.928921594018645e-7))] },
    'fl-oz/h': { symbols: new Set(['fl-oz/h']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(8.214869323364409e-9))] },
    'cup/s': { symbols: new Set(['cup/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000236588236512895))] },
    'pnt/s': { symbols: new Set(['pnt/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00047317647302579))] },
    'pnt/min': { symbols: new Set(['pnt/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000007886274550429832))] },
    'pnt/h': { symbols: new Set(['pnt/h']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1.3143790917383054e-7))] },
    'qt/s': { symbols: new Set(['qt/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00094635294605158))] },
    'gal/s': { symbols: new Set(['gal/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00378541178420632))] },
    'gal/min': { symbols: new Set(['gal/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00006309019640343866))] },
    'galUS/min': { symbols: new Set(['galUS/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00005253357806982644))] },
    'gal/h': { symbols: new Set(['gal/h']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0000010515032733906443))] },
    'ft3/s': { symbols: new Set(['ft3/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.028316831998814504))] },
    'ft3/min': { symbols: new Set(['ft3/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0004719471999802417))] },
    'ft3/h': { symbols: new Set(['ft3/h']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000007865786666337362))] },
    'yd3/s': { symbols: new Set(['yd3/s']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.764555587762115))] },
    'yd3/min': { symbols: new Set(['yd3/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.012742593129368584))] },
    'yd3/h': { symbols: new Set(['yd3/h']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00021237655215614306))] },
    STBPD: {
        symbols: new Set(['STBPD', 'STB/DAY', 'B/D', 'BPD', 'bpd', 'stbpd', 'BarrelsPerDay', 'StdBarrelPerDay', 'StockTankBarrelPerDay', 'RB/DAY']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.000001842233734980409))],
    },
    MSTBPD: {
        symbols: new Set(['MSTBPD', 'MSTB/d', 'MSTB/DAY', 'Mstbpd', 'ThousandBarrelsPerDay', 'ThousandStdBarrelPerDay', 'ThousandStockTankBarrelPerDay']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.001842233734980409))],
    },
    SCFD: {
        symbols: new Set(['SCFD', 'SCF/d', 'cfd', 'scf/day', 'scfd', 'ft3/day', 'StdCubicFeetPerDay', 'CubicFeetPerDay']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(3.27741280556e-7))],
    },
    MSCFD: {
        symbols: new Set(['MSCFD', 'MSCF/d', 'MSCF/DAY', 'Mcfd', 'Mscfd', 'ThousandStdCubicFeetPerDay', 'ThousandCubicFeetPerDay']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.000327741280556))],
    },
    MMSCFD: {
        symbols: new Set(['MMSCFD', 'MMSCFPD', 'MMSCF/d', 'MMcfd', 'MMscfd', 'Mmscfd', 'Millionft3/day', 'mmscf/day', 'MillionStdCubicFeetPerDay', 'MillionCubicFeetPerDay']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.327741280556))],
    },
};

const quantity: Quantity = new Quantity('Volumetric Flow Rate', units, []);

export default quantity;
