import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    deltaC: { symbols: new Set(['deltaC', 'delta_degC', 'deltaCelsius', 'delta°C']), system: UnitSystem._metric, transformations: [] },
    deltaK: { symbols: new Set(['deltaK', 'delta_degK', 'deltaKelvin', 'delta°K']), default: true, system: UnitSystem._metric, transformations: [] },
    deltaF: { symbols: new Set(['deltaF', 'delta_degF', 'deltaFahrenheit', 'delta°F']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.55555555555))] },
    deltaR: { symbols: new Set(['deltaR', 'delta_degR', 'deltaRankine', 'delta°R']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.55555555555))] },
};

const quantity: Quantity = new Quantity('Temperature Difference', units, []);

export default quantity;
