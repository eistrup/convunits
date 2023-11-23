import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'S/m': { symbols: new Set(['S/m']), default: true, system: UnitSystem._metric, transformations: [] },
    'mS/m': { symbols: new Set(['mS/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    'uS/m': { symbols: new Set(['uS/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    'nS/m': { symbols: new Set(['nS/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    'S/ft': { symbols: new Set(['S/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.28084))] },
    'mS/ft': { symbols: new Set(['mS/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00328084))] },
    'uS/ft': { symbols: new Set(['uS/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00000328084))] },
    'nS/ft': { symbols: new Set(['nS/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.28084e-9))] },
};

const quantity: Quantity = new Quantity('Conductivity', units, []);

export default quantity;
