import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'Pa/m': { symbols: new Set(['Pa/m']), default: true, system: UnitSystem._metric, transformations: [] },
    'kPa/m': { symbols: new Set(['kPa/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    'MPa/m': { symbols: new Set(['MPa/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    'GPa/m': { symbols: new Set(['GPa/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    'Pa/ft': { symbols: new Set(['Pa/ft']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3.28084))] },
    'kPa/ft': { symbols: new Set(['kPa/ft']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3280.84))] },
    'MPa/ft': { symbols: new Set(['MPa/ft']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3280840))] },
    'GPa/ft': { symbols: new Set(['GPa/ft']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3280840000))] },
    'bar/m': { symbols: new Set(['bar/m']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(100000))] },
    'bar/ft': { symbols: new Set(['bar/ft']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(328084))] },
    'psi/ft': { symbols: new Set(['psi/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(22620.5948))] },
    'kpsi/ft': { symbols: new Set(['kpsi/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(22620594.8))] },
    'Mpsi/ft': { symbols: new Set(['Mpsi/ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(22620594800))] },
    'psi/m': { symbols: new Set(['psi/m']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6894.757074407773))] },
    'kpsi/m': { symbols: new Set(['kpsi/m']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6894757.074407774))] },
    'Mpsi/m': { symbols: new Set(['Mpsi/m']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6894757074.407773))] },
};

const quantity: Quantity = new Quantity('Pressure Gradient', units, []);

export default quantity;
