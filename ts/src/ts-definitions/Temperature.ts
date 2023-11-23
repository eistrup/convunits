import { Unit, Quantity, UnitSystem, FactorOperation, ShiftOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    C: { symbols: new Set(['C', 'degC', 'Celsius', '°C']), system: UnitSystem._metric, transformations: [new ShiftOperation(new Num(273.15))] },
    K: { symbols: new Set(['K', 'degK', 'Kelvin', '°K']), default: true, system: UnitSystem._metric, transformations: [] },
    F: { symbols: new Set(['F', 'degF', 'Fahrenheit', '°F']), system: UnitSystem._imperial, transformations: [new ShiftOperation(new Num(459.67)), new FactorOperation(new Num(0.55555555555))] },
    R: { symbols: new Set(['R', 'degR', 'Rankine', '°R']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.55555555555))] },
};

const quantity: Quantity = new Quantity('Temperature', units, []);

export default quantity;
