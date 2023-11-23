import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    pixel: { symbols: new Set(['pixel', 'Pixel', 'px', 'Px', 'Pixels', 'pixels']), system: UnitSystem._metric, default: true, transformations: [new FactorOperation(new Num(1))] },
};

const quantity: Quantity = new Quantity('Pixels', units, []);

export default quantity;
