import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    '1/(ohm.m)': { symbols: new Set(['1/(ohm.m)']), default: true, system: UnitSystem._metric, transformations: [] },
    '1/(ohm.cm)': { symbols: new Set(['1/(ohm.cm)']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(100))] },
    '1/(ohm.mm)': { symbols: new Set(['1/(ohm.mm)']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    '1/(ohm.um)': { symbols: new Set(['1/(ohm.um)']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    '1/(ohm.nm)': { symbols: new Set(['1/(ohm.nm)']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    '1/(ohm.pm)': { symbols: new Set(['1/(ohm.pm)']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000000))] },
    '1/(ohm.fm)': { symbols: new Set(['1/(ohm.fm)']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000000000))] },
    '1/(ohm.ft)': { symbols: new Set(['1/(ohm.ft)']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(3.280839895))] },
};

const quantity: Quantity = new Quantity('Inverse Resistivity', units, []);

export default quantity;
