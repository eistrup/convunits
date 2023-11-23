import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    's/m': { symbols: new Set(['s/m']), default: true, system: UnitSystem._metric, transformations: [] },
    'min/m': { symbols: new Set(['min/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(60))] },
    'min/km': { symbols: new Set(['min/km']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.06))] },
    'ms/m': { symbols: new Set(['ms/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    'us/m': { symbols: new Set(['us/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    'ns/m': { symbols: new Set(['ns/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    's/ft': { symbols: new Set(['s/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.280839895013123))] },
    'min/mi': { symbols: new Set(['min/mi']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.03728215223097112))] },
    'min/ft': { symbols: new Set(['min/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(196.85039370078738))] },
    'ms/ft': { symbols: new Set(['ms/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.003280839895013123))] },
    'us/ft': { symbols: new Set(['us/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000003280839895013123))] },
    'ns/ft': { symbols: new Set(['ns/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.2808398950131233e-9))] },
};

const quantity: Quantity = new Quantity('Slowness', units, []);

export default quantity;
