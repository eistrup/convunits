import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'm/s': { symbols: new Set(['m/s', 'meter/second', 'meter/sec', 'm/sec']), default: true, system: UnitSystem._metric, transformations: [] },
    'km/h': { symbols: new Set(['km/h', 'km/hour', 'kph']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.277778))] },
    'm/h': { symbols: new Set(['m/h', 'MPH', 'mph', 'miles/hour']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.4470410016946879))] },
    knot: { symbols: new Set(['knot']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.514444471537777))] },
    'ft/s': { symbols: new Set(['ft/s', 'feet/second', 'feet/sec', 'ft/sec']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.3047999902464003))] },
    'ft/min': { symbols: new Set(['ft/min']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00508000999743968))] },
    'ft/h': { symbols: new Set(['ft/h']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00008466666158666683))] },
};

const quantity: Quantity = new Quantity('Velocity', units, []);

export default quantity;
