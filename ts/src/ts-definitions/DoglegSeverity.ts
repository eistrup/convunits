import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'deg/m': { symbols: new Set(['deg/m', 'dega/m']), default: true, system: UnitSystem._metric, transformations: [] },
    'deg/ft': { symbols: new Set(['deg/ft', 'dega/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.28084))] },
    'deg/100ft': { symbols: new Set(['deg/100ft', 'dega/100ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(328.084))] },
};

const quantity: Quantity = new Quantity('Dogleg Severity', units, []);

export default quantity;
