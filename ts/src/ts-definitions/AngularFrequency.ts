import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    'rad/s': { symbols: new Set(['rad/s', 'radian/s', 'radians/s', 'rad/sec', 'radian/sec', 'radians/sec']), default: true, system: UnitSystem._metric, transformations: [] },
    rpm: { symbols: new Set(['rpm', 'RPM', 'rotation/min', 'cycle/min']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.10471975512))] },
    cps: { symbols: new Set(['cps', 'CPS', 'cycle/s', 'cycle/sec', 'rotation/s', 'rotation/sec']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(6.28318530725))] },
    'deg/s': { symbols: new Set(['deg/s', 'degree/s', 'degree/sec', 'deg/sec']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.01745329251))] },
};

const quantity: Quantity = new Quantity('Angular Frequency', units, []);

export default quantity;
