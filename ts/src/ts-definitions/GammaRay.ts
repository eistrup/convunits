import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    gAPI: { symbols: new Set(['gAPI', 'GAPI']), system: UnitSystem._metric, default: true, transformations: [new FactorOperation(new Num(1))] },
};

const quantity: Quantity = new Quantity('Gamma Ray', units, []);

export default quantity;
