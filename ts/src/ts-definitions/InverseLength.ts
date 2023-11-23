import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    '1/nm': { symbols: new Set(['1/nm']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    '1/um': { symbols: new Set(['1/um']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    '1/mm': { symbols: new Set(['1/mm']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    '1/cm': { symbols: new Set(['1/cm']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(100))] },
    '1/m': { symbols: new Set(['1/m']), default: true, system: UnitSystem._metric, transformations: [] },
    '1/km': { symbols: new Set(['1/km']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    '1/in': { symbols: new Set(['1/in']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(39.37008))] },
    '10/in': { symbols: new Set(['10/in']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(393.7008))] },
    '1/yd': { symbols: new Set(['1/yd']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1.0936133333333333))] },
    '1/ft-us': { symbols: new Set(['1/ft-us']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.280833438333123))] },
    '1/ft': { symbols: new Set(['1/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.28084))] },
    '1/mi': { symbols: new Set(['1/mi']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0006213712121212121))] },
    '1/nMi': { symbols: new Set(['1/nMi']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0005399564195572175))] },
    '1/fathom': { symbols: new Set(['1/fathom']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.54680666666))] },
};

const quantity: Quantity = new Quantity('Inverse Length', units, []);

export default quantity;
