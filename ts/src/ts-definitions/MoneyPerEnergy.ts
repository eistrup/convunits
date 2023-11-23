import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'USD/J': { symbols: new Set(['USD/J', '$/J']), default: true, system: UnitSystem._metric, transformations: [] },
    'USD/kWh': { symbols: new Set(['USD/kWh', '$/kWh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(2.77777778e-7))] },
    'USD/BOE': { symbols: new Set(['USD/BOE', '$/BOE']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1.6345576e-10))] },
};

const quantity: Quantity = new Quantity('Money Per Energy', units, ['Production Cost', 'Lifting Cost', 'Unit Technical Cost', 'Production Revenue']);

export default quantity;
