import { Unit, Quantity, UnitSystem, FactorOperation } from '../models';
import { Num } from '../expression';

const units: Record<string, Unit> = {
    nm3: { symbols: new Set(['nm3', 'nm^3']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-27))] },
    um3: { symbols: new Set(['um3', 'um^3']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-18))] },
    mm3: { symbols: new Set(['mm3', 'mm^3']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1e-9))] },
    cm3: { symbols: new Set(['cm3', 'cm^3']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    ml: { symbols: new Set(['ml']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    cl: { symbols: new Set(['cl']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.00001))] },
    dl: { symbols: new Set(['dl']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0001))] },
    l: { symbols: new Set(['l', 'Litres', 'Liters', 'litres', 'liter', 'liters', 'L']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.001))] },
    kl: { symbols: new Set(['kl']), system: UnitSystem._metric, transformations: [] },
    m3: { symbols: new Set(['m3', 'm^3', 'v', 'meter3']), default: true, system: UnitSystem._metric, transformations: [] },
    km3: { symbols: new Set(['km3', 'km^3']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(1000000000))] },
    krm: { symbols: new Set(['krm']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000001))] },
    tsk: { symbols: new Set(['tsk']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000005))] },
    msk: { symbols: new Set(['msk']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.000014999999999999999))] },
    kkp: { symbols: new Set(['kkp']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.00015))] },
    glas: { symbols: new Set(['glas']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.0002))] },
    kanna: { symbols: new Set(['kanna']), system: UnitSystem._metric, transformations: [new FactorOperation(new Num(0.002617))] },
    tsp: { symbols: new Set(['tsp']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000004928921608595207))] },
    Tbs: { symbols: new Set(['Tbs']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000014786764825785619))] },
    in3: { symbols: new Set(['in3', 'in^3']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.00001638698851523214))] },
    'fl-oz': { symbols: new Set(['fl-oz']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.000029573529651571238))] },
    cup: { symbols: new Set(['cup']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0002365882372125699))] },
    pnt: { symbols: new Set(['pnt']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0004731764744251398))] },
    qt: { symbols: new Set(['qt']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0009463529488502796))] },
    gal: { symbols: new Set(['gal', 'Gal', 'Galon', 'galon']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0037854117954011185))] },
    galUS: { symbols: new Set(['galUS', 'GalUS', 'GalonUS', 'galonUS']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.0031520146935112067))] },
    yd3: { symbols: new Set(['yd3']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.7645555900231757))] },
    bbl: {
        symbols: new Set(['bbl', 'barrel', 'STB', 'StandardBarrel', 'StdBarrel', 'StockTankBarrel', 'RB', 'ReservoirBarrel', 'rb']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(0.15898711796566906))],
        note: 'reservoir or standard are not the unit itself (which is barrel or bbl) and are only information about the conditions in which that unit was measured (the unit itself is independent of conditions). Therefore, to not loose this information, we decided to keep track of the original unit symbol, meaning rb, RB or ReservoirBarrel and display it along with the data so that the client (UI or user) knows where that number comes from. We should however bear this in mind if we make conversions from rb to any other unit, because the reservoir detail will be ignored.',
    },
    ft3: { symbols: new Set(['ft3', 'ft^3', 'SCF']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(0.028316832082557367))] },
    MSCF: { symbols: new Set(['MSCF', 'ThousandStandardCubicFeet', 'ThousandStdCubicFeet']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(28.31683208255737))] },
    MMSCF: { symbols: new Set(['MMSCF', 'MillionStandardCubicFeet', 'MillionStandardCubicFeet']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(28316.83208255737))] },
    BSCF: { symbols: new Set(['BSCF', 'BillionStandardCubicFeet', 'BillionStandardCubicFeet']), system: UnitSystem._imperial, transformations: [new FactorOperation(new Num(28316832.082557365))] },
    MSTB: {
        symbols: new Set(['MSTB', 'ThousandStandardBarrel', 'ThousandStdBarrel', 'ThousandStockTankBarrel']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(158.98711796566906))],
    },
    MMSTB: {
        symbols: new Set(['MMSTB', 'MillionStandardBarrel', 'MillionStdBarrel', 'MillionStockTankBarrel']),
        system: UnitSystem._imperial,
        transformations: [new FactorOperation(new Num(158987.11796566905))],
    },
};

const quantity: Quantity = new Quantity('Volume', units, []);

export default quantity;
