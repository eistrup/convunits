import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    Nm: { symbols: new Set(['Nm']), default: true, system: UnitSystem._metric, transformations: [] },
    'lbf.ft': { symbols: new Set(['lbf.ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1.355818))] },
    'klbf.ft': { symbols: new Set(['klbf.ft', '1000lbf.ft', 'klb-ft', '1000lb-ft']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1355.818))] },
};

const quantity: Quantity = new Quantity('Torque', units, []);

export default quantity;
