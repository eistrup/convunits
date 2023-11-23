import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    mHz: { symbols: new Set(['mHz']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    Hz: { symbols: new Set(['Hz', 'hz', 'Herz', 'herz', '1/s', 's-1', 's^-1']), default: true, system: UnitSystem._metric, transformations: [] },
    kHz: { symbols: new Set(['kHz']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    MHz: { symbols: new Set(['MHz']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    GHz: { symbols: new Set(['GHz']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    THz: { symbols: new Set(['THz']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000000))] },
};

const quantity: Quantity = new Quantity('Frequency', units, []);

export default quantity;
