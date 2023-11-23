import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    W: { symbols: new Set(['W']), default: true, system: UnitSystem._metric, transformations: [] },
    mW: { symbols: new Set(['mW']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kW: { symbols: new Set(['kW']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    MW: { symbols: new Set(['MW']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    GW: { symbols: new Set(['GW']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    HP: { symbols: new Set(['HP']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(745.699872))] },
    'BOE/d': { symbols: new Set(['BOE/d', 'BOEPD', 'Barrel Oil Equivalent Per Day']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(70810.1851852))] },
    'MBOE/d': {
        symbols: new Set(['MBOE/d', 'M BOE/d', 'MBOEPD', 'M BOEPD', 'Thousand Barrel Oil Equivalent Per Day']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(70810185.1852))],
    },
    'MMBOE/d': {
        symbols: new Set(['MMBOE/d', 'MM BOE/d', 'MMBOEPD', 'MM BOEPD', 'Million Barrel Oil Equivalent Per Day']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(70810185185.2))],
    },
    'BTU/DAY': { symbols: new Set(['BTU/DAY']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.01221129459))] },
};

const quantity: Quantity = new Quantity('Power', units, []);

export default quantity;
