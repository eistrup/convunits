import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    lx: { symbols: new Set(['lx']), default: true, system: UnitSystem._metric, transformations: [] },
    'ft-cd': { symbols: new Set(['ft-cd']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(10.76391))] },
};

const quantity: Quantity = new Quantity('Illuminance', units, []);

export default quantity;
