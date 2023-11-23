import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'g-force': { symbols: new Set(['g-force']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(9.80665))] },
    'm/s2': { symbols: new Set(['m/s2']), default: true, system: UnitSystem._metric, transformations: [] },
    'ft/s2': { symbols: new Set(['ft/s2']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.3047999902464003))] },
};

const quantity: Quantity = new Quantity('Acceleration', units, []);

export default quantity;
