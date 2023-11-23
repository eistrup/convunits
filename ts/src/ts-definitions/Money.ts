import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    USD: { symbols: new Set(['USD', 'Usd', 'usd', '$', 'dollar', 'US dollar']), system: UnitSystem._metric, default: true, transformations: [] },
    'Thousand USD': { symbols: new Set(['Thousand USD', 'M USD']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    'Million USD': { symbols: new Set(['Million USD', 'MM USD']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
};

const quantity: Quantity = new Quantity('Money', units, ['Cost', 'Capital', 'Cash', 'Finance']);

export default quantity;
