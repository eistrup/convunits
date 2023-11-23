import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'm3/s/Pa': { symbols: new Set(['m3/s/Pa']), default: true, system: UnitSystem._metric, transformations: [] },
    'STB/D/psia': { symbols: new Set(['STB/D/psia', 'STB/D/PSIA', 'STB/D/P', 'stbpd/psi', 'STBPD/PSI']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(2.66888e-10))] },
};

const quantity: Quantity = new Quantity('Productivity Index', units, []);

export default quantity;
