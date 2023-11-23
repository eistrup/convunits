import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'ohm.m': { symbols: new Set(['ohm.m', 'Ohm.m', 'OHMM', 'ohmm', 'Ohm.meter', 'ohm.meter', 'Ohm.Meter']), default: true, system: UnitSystem._metric, transformations: [] },
    'ohm.cm': { symbols: new Set(['ohm.cm']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.01))] },
    'ohm.mm': { symbols: new Set(['ohm.mm']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    'ohm.um': { symbols: new Set(['ohm.um']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    'ohm.nm': { symbols: new Set(['ohm.nm']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    'ohm.ft': { symbols: new Set(['ohm.ft', 'ohm.feet', 'ohmft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.3048000000012192))] },
};

const quantity: Quantity = new Quantity('Resistivity', units, []);

export default quantity;
