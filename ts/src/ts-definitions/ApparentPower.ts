import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    VA: { symbols: new Set(['VA']), default: true, system: UnitSystem._metric, transformations: [] },
    mVA: { symbols: new Set(['mVA']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kVA: { symbols: new Set(['kVA']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    MVA: { symbols: new Set(['MVA']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    GVA: { symbols: new Set(['GVA']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
};

const quantity: Quantity = new Quantity('Apparent Power', units, []);

export default quantity;
