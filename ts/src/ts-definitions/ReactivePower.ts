import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    VAR: { symbols: new Set(['VAR']), default: true, system: UnitSystem._metric, transformations: [] },
    mVAR: { symbols: new Set(['mVAR']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kVAR: { symbols: new Set(['kVAR']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    MVAR: { symbols: new Set(['MVAR']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    GVAR: { symbols: new Set(['GVAR']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
};

const quantity: Quantity = new Quantity('Reactive Power', units, []);

export default quantity;
