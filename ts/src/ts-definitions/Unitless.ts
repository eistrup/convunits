import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    unitless: {
        symbols: new Set(['unitless', 'dimensionless', '', ' ', 'none', 'None', 'NONE', 'NoNe', '#']),
        system: UnitSystem._metric,
        default: true,
        transformations: [new FactorOperation(new Num(1))],
    },
};

const quantity: Quantity = new Quantity('Unitless', units, ['Perforation Index', 'Poisson Ratio', 'Normalized', 'Saturation']);

export default quantity;
