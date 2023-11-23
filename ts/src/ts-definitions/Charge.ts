import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    c: { symbols: new Set(['c']), default: true, system: UnitSystem._metric, transformations: [] },
    mC: { symbols: new Set(['mC']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    μC: { symbols: new Set(['μC']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    nC: { symbols: new Set(['nC']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    pC: { symbols: new Set(['pC']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-12))] },
};

const quantity: Quantity = new Quantity('Charge', units, []);

export default quantity;
