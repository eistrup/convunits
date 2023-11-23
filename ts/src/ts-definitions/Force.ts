import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    N: { symbols: new Set(['N']), default: true, system: UnitSystem._metric, transformations: [] },
    kN: { symbols: new Set(['kN']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    kgf: { symbols: new Set(['kgf', 'Kg.f', 'kg.f', 'KGF', 'Kgf']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(9.80665))] },
    lbf: { symbols: new Set(['lbf']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(4.44822))] },
    klbf: { symbols: new Set(['klbf']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(4448.22))] },
};

const quantity: Quantity = new Quantity('Force', units, []);

export default quantity;
