import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    nm2: { symbols: new Set(['nm2', 'nm^2']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-18))] },
    um2: { symbols: new Set(['um2', 'um^2']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-12))] },
    mm2: { symbols: new Set(['mm2', 'mm^2']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    cm2: { symbols: new Set(['cm2', 'cm^2']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0001))] },
    m2: { symbols: new Set(['m2', 'm^2']), default: true, system: UnitSystem._metric, transformations: [] },
    ha: { symbols: new Set(['ha']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(10000))] },
    km2: { symbols: new Set(['km2', 'km^2']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    D: { symbols: new Set(['D', 'Darcy', 'darcy']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(9.869232999999999e-13))] },
    mD: { symbols: new Set(['mD', 'md', 'Millidarcy', 'millidarcy']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(9.869232999999999e-16))] },
    uD: { symbols: new Set(['uD', 'ud', 'Microdarcy', 'microdarcy']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(9.869233e-19))] },
    nD: { symbols: new Set(['nD', 'nd', 'Nanodarcy', 'nanodarcy']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(9.869233e-22))] },
    in2: { symbols: new Set(['in2', 'in^2']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0006451606243503233))] },
    yd2: { symbols: new Set(['yd2']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.836128169158019))] },
    ft2: { symbols: new Set(['ft2', 'ft^2']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.09290312990644656))] },
    ac: { symbols: new Set(['ac']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(4046.860338724812))] },
    mi2: { symbols: new Set(['mi2']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(2589990.6167838797))] },
};

const quantity: Quantity = new Quantity('Area', units, ['Permeability']);

export default quantity;
