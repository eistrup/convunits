import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    fraction: { symbols: new Set(['fraction', 'Fraction', 'FRACTION']), default: true, system: UnitSystem._metric, transformations: [] },
    pct: { symbols: new Set(['pct', '%', 'percent']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.01))] },
    ppm: { symbols: new Set(['ppm', 'PPM']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    ppb: { symbols: new Set(['ppb', 'PPB']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    ppt: { symbols: new Set(['ppt', 'PPT']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-12))] },
    ppq: { symbols: new Set(['ppq', 'PPQ']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-15))] },
};

const quantity: Quantity = new Quantity('Ratio', units, []);

export default quantity;
