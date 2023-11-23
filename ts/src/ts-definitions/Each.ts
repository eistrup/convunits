import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    ea: { symbols: new Set(['ea']), default: true, system: UnitSystem._metric, transformations: [] },
    dz: { symbols: new Set(['dz']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(12))] },
};

const quantity: Quantity = new Quantity('Each', units, []);

export default quantity;
