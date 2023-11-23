import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    ug: { symbols: new Set(['ug']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(9.999999999999999e-10))] },
    mg: { symbols: new Set(['mg']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    g: { symbols: new Set(['g']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kg: { symbols: new Set(['kg']), default: true, system: UnitSystem._metric, transformations: [] },
    t: { symbols: new Set(['t', 'mt', 'metric ton']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    oz: { symbols: new Set(['oz']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0283495))] },
    lb: { symbols: new Set(['lb']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.453592))] },
    'us-t': { symbols: new Set(['us-t', 'short ton', 'US ton', 'american ton']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(907.184))] },
    'uk-t': { symbols: new Set(['uk-t', 'long ton', 'UK ton', 'english ton', 'british ton']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1016.05))] },
};

const quantity: Quantity = new Quantity('Mass', units, ['Weight']);

export default quantity;
