import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    V: { symbols: new Set(['V']), default: true, system: UnitSystem._metric, transformations: [] },
    mV: { symbols: new Set(['mV']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kV: { symbols: new Set(['kV']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
};

const quantity: Quantity = new Quantity('Voltage', units, []);

export default quantity;
