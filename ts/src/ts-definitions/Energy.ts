import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    Wh: { symbols: new Set(['Wh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3600))] },
    mWh: { symbols: new Set(['mWh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3.6))] },
    kWh: { symbols: new Set(['kWh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3600000))] },
    MWh: { symbols: new Set(['MWh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3600000000))] },
    GWh: { symbols: new Set(['GWh']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(3600000000000))] },
    J: { symbols: new Set(['J']), default: true, system: UnitSystem._metric, transformations: [] },
    kJ: { symbols: new Set(['kJ']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    'ft.lbf': { symbols: new Set(['ft.lbf']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1.3558179))] },
    'kft.lbf': { symbols: new Set(['kft.lbf']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1355.8179))] },
    BTU: { symbols: new Set(['BTU', 'British Thermal Unit']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(1055.0558526))] },
    BOE: { symbols: new Set(['BOE', 'Barrel Oil Equivalent']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6117863200))] },
    MBOE: { symbols: new Set(['MBOE', 'M BOE', 'Thousand Barrel Oil Equivalent']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6117863200000))] },
    MMBOE: { symbols: new Set(['MMBOE', 'MM BOE', 'Million Barrel Oil Equivalent']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6117863200000000))] },
};

const quantity: Quantity = new Quantity('Energy', units, []);

export default quantity;
