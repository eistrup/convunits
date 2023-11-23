import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    ns: { symbols: new Set(['ns', 'nsec']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    us: { symbols: new Set(['us', 'usec']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    ms: { symbols: new Set(['ms', 'msec']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    s: { symbols: new Set(['s', 'sec', 'second']), default: true, system: UnitSystem._metric, transformations: [] },
    min: { symbols: new Set(['min', 'minute']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(60))] },
    h: { symbols: new Set(['h', 'hour', 'H']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3600))] },
    day: { symbols: new Set(['day', 'Day', 'd', 'Days', 'days', 'DAYS']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(86400))] },
    week: { symbols: new Set(['week', 'Week', 'w']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(604800))] },
    month: { symbols: new Set(['month', 'Month', 'M']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(2628000))] },
    year: { symbols: new Set(['year', 'years', 'Year', 'Years', 'yr', 'yrs', 'Yr', 'Yrs', 'Y', 'y']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(31536000))] },
};

const quantity: Quantity = new Quantity('Time', units, []);

export default quantity;
