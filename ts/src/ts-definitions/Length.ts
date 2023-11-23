import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    nm: { symbols: new Set(['nm', 'nanometer', 'Nanometer']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    um: { symbols: new Set(['um', 'micrometer', 'Micrometer']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    mm: { symbols: new Set(['mm', 'milimeter', 'Milimeter']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    cm: { symbols: new Set(['cm', 'centimeter', 'Centimeter']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.01))] },
    m: { symbols: new Set(['m', 'meter', 'Meter', 'meters', 'Meters', 'METERS', 'METER']), default: true, system: UnitSystem._metric, transformations: [] },
    km: { symbols: new Set(['km', 'kilometer', 'Kilometer', 'Kilometers', 'KM', 'Km']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    in: { symbols: new Set(['in', 'inch', 'Inch', 'IN', 'inches', 'Inches']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.025399999187200026))] },
    '0.1in': { symbols: new Set(['0.1in', '0.1inch', '0.1Inch', '0.1 in', '_01in', '01in']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0025399999187200027))] },
    '64thsin': {
        symbols: new Set(['64thsin', '64ths in', '64ths_in', '64thsInch', '64thsIn', '1/64 in', '1/64_in', '1/64in', '64ths inch', '64ths inches', '1/64ths inch', '1/64ths inches']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.0003968749873))],
    },
    yd: { symbols: new Set(['yd', 'yard', 'Yard']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.914399970739201))] },
    'ft-us': { symbols: new Set(['ft-us', 'feetUS', 'feet-US', 'foot-us', 'USfeet']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.3048005998463808))] },
    ft: { symbols: new Set(['ft', 'FT', 'Ft', 'feet', 'Feet', 'foot', 'FEET']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.3047999902464003))] },
    fathom: { symbols: new Set(['fathom']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1.828799941478402))] },
    mi: { symbols: new Set(['mi', 'mile', 'miles', 'Miles']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1609.3439485009937))] },
    nMi: { symbols: new Set(['nMi', 'nmi', 'nmile', 'nauticalmiles', 'nauticalMiles']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1852.0013167359577))] },
};

const quantity: Quantity = new Quantity('Length', units, []);

export default quantity;
