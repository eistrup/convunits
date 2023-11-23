import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    A: { symbols: new Set(['A']), default: true, system: UnitSystem._metric, transformations: [] },
    mA: { symbols: new Set(['mA']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kA: { symbols: new Set(['kA']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    MA: {
        symbols: new Set(['MA']),
        system: UnitSystem._metric,
        transformations: [new FactorOperation(new Num(1000000))],
        note: 'symbol occurred in a DLIS file in the context of BHI where we have resistivity related data channels. Mega-ampère (MA) is the most plausible unit it represents.',
    },
};

const quantity: Quantity = new Quantity('Current', units, []);

export default quantity;
