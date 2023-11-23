import { Unit, Quantity, UnitSystem, FactorOperation, ShiftOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    Pa: { symbols: new Set(['Pa', 'PA', 'pa', 'pascales', 'pascal', 'Pascal', 'Pascales']), system: UnitSystem._metric, default: true, transformations: [] },
    kPa: { symbols: new Set(['kPa']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000))] },
    MPa: { symbols: new Set(['MPa']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000))] },
    GPa: { symbols: new Set(['GPa']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    hPa: { symbols: new Set(['hPa']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(100))] },
    bar: { symbols: new Set(['bar', 'Bar', 'BAR']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(100000))] },
    barg: { symbols: new Set(['barg', 'BARG', 'Barg', 'BarGauge']), system: UnitSystem._metric, transformations: [new ShiftOperation(new Num(1.01325)), new FactorOperation(new Num(100000))] },
    torr: { symbols: new Set(['torr']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(133.32236842105263))] },
    psi: {
        symbols: new Set(['psi', 'PoundsPerSquareInch', 'PSI', 'Psi', 'lb/in2', 'psia', 'PoundsPerSquareInchAbsolute', 'PsiAbsolute', 'PSIA', 'Psia']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(6894.76000045014))],
        note: 'After debate we have established that, in the domain of the oil&gas industry, the unit symbol PSI refers to PSIA (0 at full vaccuum) as opposed to PSIG (0 at sea level atmospheric pressure), where  [PSIG] = [PSIA] - 14.7.',
    },
    kpsi: { symbols: new Set(['kpsi', 'Kpsi', 'ksi', 'KPSI', 'kpsia', 'Kpsia', 'ksia', 'KPSIA']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6894760.00045014))] },
    Mpsi: { symbols: new Set(['Mpsi', 'MPSI', 'Mpsia', 'MPSIA']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(6894760000.45014))] },
    psig: {
        symbols: new Set(['psig', 'PSIG', 'Psig', 'PsiGauge']),
        system: UnitSystem._imperial,
        transformations: [new ShiftOperation(new Num(14.695948775)), new FactorOperation(new Num(6894.76000045014))],
    },
    kpsig: {
        symbols: new Set(['kpsig', 'Kpsig', 'ksig', 'KPSIG']),
        system: UnitSystem._imperial,
        transformations: [new ShiftOperation(new Num(0.014695948775)), new FactorOperation(new Num(6894760.00045014))],
    },
    Mpsig: { symbols: new Set(['Mpsig', 'MPSIG']), system: UnitSystem._imperial, transformations: [new ShiftOperation(new Num(0.000014695948775)), new FactorOperation(new Num(6894760000.45014))] },
    atm: { symbols: new Set(['atm', 'atmosphere', 'standard atmosphere', 'reference atmosphere', 'Atm', 'ATM']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(101325))] },
};

const quantity: Quantity = new Quantity('Pressure', units, []);

export default quantity;
