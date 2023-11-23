import acceleration from './ts-definitions/Acceleration';
import angle from './ts-definitions/Angle';
import angularFrequency from './ts-definitions/AngularFrequency';
import apiGravity from './ts-definitions/APIGravity';
import apparentPower from './ts-definitions/ApparentPower';
import area from './ts-definitions/Area';
import charge from './ts-definitions/Charge';
import conductivity from './ts-definitions/Conductivity';
import current from './ts-definitions/Current';
import density from './ts-definitions/Density';
import doglegSeverity from './ts-definitions/DoglegSeverity';
import each from './ts-definitions/Each';
import energy from './ts-definitions/Energy';
import force from './ts-definitions/Force';
import frequency from './ts-definitions/Frequency';
import illuminance from './ts-definitions/Illuminance';
import inverseLength from './ts-definitions/InverseLength';
import inverseResistivity from './ts-definitions/InverseResistivity';
import length from './ts-definitions/Length';
import mass from './ts-definitions/Mass';
import ratio from './ts-definitions/Ratio';
import power from './ts-definitions/Power';
import pressure from './ts-definitions/Pressure';
import pressureGradient from './ts-definitions/PressureGradient';
import productivityIndex from './ts-definitions/ProductivityIndex';
import reactiveEnergy from './ts-definitions/ReactiveEnergy';
import reactivePower from './ts-definitions/ReactivePower';
import resistivity from './ts-definitions/Resistivity';
import slowness from './ts-definitions/Slowness';
import velocity from './ts-definitions/Velocity';
import temperature from './ts-definitions/Temperature';
import temperatureDifference from './ts-definitions/TemperatureDifference';
import time from './ts-definitions/Time';
import torque from './ts-definitions/Torque';
import voltage from './ts-definitions/Voltage';
import volume from './ts-definitions/Volume';
import volumeRatio from './ts-definitions/VolumeRatio';
import volumetricFlowRate from './ts-definitions/VolumetricFlowRate';
import massFlowRate from './ts-definitions/MassFlowRate';
import money from './ts-definitions/Money';
import moneyPerEnergy from './ts-definitions/MoneyPerEnergy';
import gammaRay from './ts-definitions/GammaRay';
import unitless from './ts-definitions/Unitless';
import pixels from './ts-definitions/Pixels';
import { Quantity } from './models';

export const Definitions = [
    acceleration,
    angle,
    angularFrequency,
    apiGravity,
    apparentPower,
    area,
    charge,
    conductivity,
    current,
    density,
    doglegSeverity,
    each,
    energy,
    force,
    frequency,
    illuminance,
    inverseLength,
    inverseResistivity,
    length,
    ratio,
    power,
    pressure,
    pressureGradient,
    productivityIndex,
    reactiveEnergy,
    reactivePower,
    resistivity,
    slowness,
    velocity,
    temperature,
    temperatureDifference,
    time,
    torque,
    voltage,
    volume,
    volumeRatio,
    volumetricFlowRate,
    mass,
    massFlowRate,
    money,
    moneyPerEnergy,
    gammaRay,
    unitless,
    pixels,
] as const;

const unitKeyToQuantityCache: { [key: string]: Quantity } = {};

export const findQuantityBy = (unitKey: string): Quantity | undefined => {
    const cached = unitKeyToQuantityCache[unitKey];
    if (cached) {
        return cached;
    }
    const quantity = Definitions.find((definition) => definition.units[unitKey]);
    if (quantity) {
        unitKeyToQuantityCache[unitKey] = quantity;
    }
    return quantity;
};

const unitSymbolToKeyCache: { [symbol: string]: string } = {};

export const findUnitStandard = (unitSymbol: string): string | undefined => {
    const cached = unitSymbolToKeyCache[unitSymbol];
    if (cached) {
        return cached;
    }

    let unitKey: string | undefined;
    Definitions.map((definition) => {
        Object.entries(definition.units).map(([key, unit]) => {
            // this holds when unitSymbol == unitKey
            // because we have guaranteed unitKey is in symbols list
            if (unit.symbols.has(unitSymbol)) {
                unitKey = key;
                return;
            }
        });
    });
    if (unitKey) {
        unitSymbolToKeyCache[unitSymbol] = unitKey;
    }
    return unitKey;
};

const quantityNameToUnitsCache: { [quantityName: string]: string[] } = {};
/**
 * return units per given quantity name e.g. Length ==> m, cm, mm, ft, inc etc
 */
export const findUnitsByQuantity = (quantityName: string): string[] => {
    const cached = quantityNameToUnitsCache[quantityName];
    if (cached) {
        return cached;
    }

    const units: string[] = [];
    Definitions.forEach((quantity: Quantity) => {
        if (quantity.name === quantityName) {
            Object.entries(quantity.units).forEach(([unitName]) => {
                units.push(unitName);
            });
        }
    });

    if (units) {
        quantityNameToUnitsCache[quantityName] = units;
    }

    return units;
};

const unitSymbolToUnitCache: { [unitSymbol: string]: Quantity } = {};
/**
 * return quantity per given unit symbol e.g. m ==> Length
 */
export const findQuantityByUnitSymbol = (unitSymbol: string): Quantity => {
    const cached = unitSymbolToUnitCache[unitSymbol];
    if (cached) {
        return cached;
    }

    let quantityToBeReturned: Quantity;
    Definitions.forEach((quantity) => {
        Object.entries(quantity.units).forEach(([, unit]) => {
            if (unit.symbols.has(unitSymbol)) {
                quantityToBeReturned = quantity;
                return;
            }
        });
    });

    if (quantityToBeReturned) {
        unitSymbolToUnitCache[unitSymbol] = quantityToBeReturned;
    }

    return quantityToBeReturned;
};
