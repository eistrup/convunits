import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    VARh: { symbols: new Set(['VARh']), default: true, system: UnitSystem._metric, transformations: [] },
    mVARh: { symbols: new Set(['mVARh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kVARh: { symbols: new Set(['kVARh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    MVARh: { symbols: new Set(['MVARh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    GVARh: { symbols: new Set(['GVARh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
};

const quantity: Quantity = new Quantity('Reactive Energy', units, []);

export default quantity;
