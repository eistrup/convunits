import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    rad: { symbols: new Set(['rad', 'radian', 'RAD']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(57.29577951308232))] },
    deg: { symbols: new Set(['deg', 'degrees', 'degree', 'DEG', 'dega']), default: true, system: UnitSystem._metric, transformations: [] },
    grad: { symbols: new Set(['grad']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.9))] },
    arcmin: { symbols: new Set(['arcmin']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.016666666666666666))] },
    arcsec: { symbols: new Set(['arcsec']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0002777777777777778))] },
};

const quantity: Quantity = new Quantity('Angle', units, []);

export default quantity;
