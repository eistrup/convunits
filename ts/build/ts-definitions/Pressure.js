"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const expression_1 = require("../expression");
const units = {
    Pa: { symbols: new Set(['Pa', 'PA', 'pa', 'pascales', 'pascal', 'Pascal', 'Pascales']), system: models_1.UnitSystem._metric, default: true, transformations: [] },
    kPa: { symbols: new Set(['kPa']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000))] },
    MPa: { symbols: new Set(['MPa']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000))] },
    GPa: { symbols: new Set(['GPa']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(1000000000))] },
    hPa: { symbols: new Set(['hPa']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(100))] },
    bar: { symbols: new Set(['bar', 'Bar', 'BAR']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(100000))] },
    barg: { symbols: new Set(['barg', 'BARG', 'Barg', 'BarGauge']), system: models_1.UnitSystem._metric, transformations: [new models_1.ShiftOperation(new expression_1.Num(1.01325)), new models_1.FactorOperation(new expression_1.Num(100000))] },
    torr: { symbols: new Set(['torr']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(133.32236842105263))] },
    psi: {
        symbols: new Set(['psi', 'PoundsPerSquareInch', 'PSI', 'Psi', 'lb/in2', 'psia', 'PoundsPerSquareInchAbsolute', 'PsiAbsolute', 'PSIA', 'Psia']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.FactorOperation(new expression_1.Num(6894.76000045014))],
        note: 'After debate we have established that, in the domain of the oil&gas industry, the unit symbol PSI refers to PSIA (0 at full vaccuum) as opposed to PSIG (0 at sea level atmospheric pressure), where  [PSIG] = [PSIA] - 14.7.',
    },
    kpsi: { symbols: new Set(['kpsi', 'Kpsi', 'ksi', 'KPSI', 'kpsia', 'Kpsia', 'ksia', 'KPSIA']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6894760.00045014))] },
    Mpsi: { symbols: new Set(['Mpsi', 'MPSI', 'Mpsia', 'MPSIA']), system: models_1.UnitSystem._imperial, transformations: [new models_1.FactorOperation(new expression_1.Num(6894760000.45014))] },
    psig: {
        symbols: new Set(['psig', 'PSIG', 'Psig', 'PsiGauge']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.ShiftOperation(new expression_1.Num(14.695948775)), new models_1.FactorOperation(new expression_1.Num(6894.76000045014))],
    },
    kpsig: {
        symbols: new Set(['kpsig', 'Kpsig', 'ksig', 'KPSIG']),
        system: models_1.UnitSystem._imperial,
        transformations: [new models_1.ShiftOperation(new expression_1.Num(0.014695948775)), new models_1.FactorOperation(new expression_1.Num(6894760.00045014))],
    },
    Mpsig: { symbols: new Set(['Mpsig', 'MPSIG']), system: models_1.UnitSystem._imperial, transformations: [new models_1.ShiftOperation(new expression_1.Num(0.000014695948775)), new models_1.FactorOperation(new expression_1.Num(6894760000.45014))] },
    atm: { symbols: new Set(['atm', 'atmosphere', 'standard atmosphere', 'reference atmosphere', 'Atm', 'ATM']), system: models_1.UnitSystem._metric, transformations: [new models_1.FactorOperation(new expression_1.Num(101325))] },
};
const quantity = new models_1.Quantity('Pressure', units, []);
exports.default = quantity;
