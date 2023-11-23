import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'kg/s': { symbols: new Set(['kg/s', 'Kg/s', 'KG/S', 'kg/sec']), system: UnitSystem._metric, default: true, transformations: [] },
    'kg/h': { symbols: new Set(['kg/h', 'Kg/h', 'KG/H', 'kg/hour']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0002777777777777778))] },
    'kg/d': { symbols: new Set(['kg/d', 'Kg/d', 'KG/D', 'kg/day']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.006666666666666667))] },
    'kg/y': { symbols: new Set(['kg/y', 'Kg/y', 'KG/Y', 'kg/year']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(2.433333333333333))] },
    't/y': { symbols: new Set(['t/y', 'ton/y', 'ton/year', 't/year']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(2433.3333333333335))] },
    'kt/y': {
        symbols: new Set(['kt/y', 'kiloton/y', 'kiloton/year', 'ThousandTon/Year', "MT'000 p.a.", "M.T. '000 p.a.", 'MT000 p.a.', 'Thousand Metric Tonnes Per Annum']),
        system: UnitSystem._metric,
        transformations: [new FactorOperation(new Num(2433333.3333333335))],
    },
};

const quantity: Quantity = new Quantity('Mass Flow Rate', units, []);

export default quantity;
