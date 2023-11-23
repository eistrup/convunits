"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findQuantityByUnitSymbol = exports.findUnitsByQuantity = exports.findUnitStandard = exports.findQuantityBy = exports.Definitions = void 0;
const Acceleration_1 = require("./ts-definitions/Acceleration");
const Angle_1 = require("./ts-definitions/Angle");
const AngularFrequency_1 = require("./ts-definitions/AngularFrequency");
const APIGravity_1 = require("./ts-definitions/APIGravity");
const ApparentPower_1 = require("./ts-definitions/ApparentPower");
const Area_1 = require("./ts-definitions/Area");
const Charge_1 = require("./ts-definitions/Charge");
const Conductivity_1 = require("./ts-definitions/Conductivity");
const Current_1 = require("./ts-definitions/Current");
const Density_1 = require("./ts-definitions/Density");
const DoglegSeverity_1 = require("./ts-definitions/DoglegSeverity");
const Each_1 = require("./ts-definitions/Each");
const Energy_1 = require("./ts-definitions/Energy");
const Force_1 = require("./ts-definitions/Force");
const Frequency_1 = require("./ts-definitions/Frequency");
const Illuminance_1 = require("./ts-definitions/Illuminance");
const InverseLength_1 = require("./ts-definitions/InverseLength");
const InverseResistivity_1 = require("./ts-definitions/InverseResistivity");
const Length_1 = require("./ts-definitions/Length");
const Mass_1 = require("./ts-definitions/Mass");
const Ratio_1 = require("./ts-definitions/Ratio");
const Power_1 = require("./ts-definitions/Power");
const Pressure_1 = require("./ts-definitions/Pressure");
const PressureGradient_1 = require("./ts-definitions/PressureGradient");
const ProductivityIndex_1 = require("./ts-definitions/ProductivityIndex");
const ReactiveEnergy_1 = require("./ts-definitions/ReactiveEnergy");
const ReactivePower_1 = require("./ts-definitions/ReactivePower");
const Resistivity_1 = require("./ts-definitions/Resistivity");
const Slowness_1 = require("./ts-definitions/Slowness");
const Velocity_1 = require("./ts-definitions/Velocity");
const Temperature_1 = require("./ts-definitions/Temperature");
const TemperatureDifference_1 = require("./ts-definitions/TemperatureDifference");
const Time_1 = require("./ts-definitions/Time");
const Torque_1 = require("./ts-definitions/Torque");
const Voltage_1 = require("./ts-definitions/Voltage");
const Volume_1 = require("./ts-definitions/Volume");
const VolumeRatio_1 = require("./ts-definitions/VolumeRatio");
const VolumetricFlowRate_1 = require("./ts-definitions/VolumetricFlowRate");
const MassFlowRate_1 = require("./ts-definitions/MassFlowRate");
const Money_1 = require("./ts-definitions/Money");
const MoneyPerEnergy_1 = require("./ts-definitions/MoneyPerEnergy");
const GammaRay_1 = require("./ts-definitions/GammaRay");
const Unitless_1 = require("./ts-definitions/Unitless");
const Pixels_1 = require("./ts-definitions/Pixels");
exports.Definitions = [
    Acceleration_1.default,
    Angle_1.default,
    AngularFrequency_1.default,
    APIGravity_1.default,
    ApparentPower_1.default,
    Area_1.default,
    Charge_1.default,
    Conductivity_1.default,
    Current_1.default,
    Density_1.default,
    DoglegSeverity_1.default,
    Each_1.default,
    Energy_1.default,
    Force_1.default,
    Frequency_1.default,
    Illuminance_1.default,
    InverseLength_1.default,
    InverseResistivity_1.default,
    Length_1.default,
    Ratio_1.default,
    Power_1.default,
    Pressure_1.default,
    PressureGradient_1.default,
    ProductivityIndex_1.default,
    ReactiveEnergy_1.default,
    ReactivePower_1.default,
    Resistivity_1.default,
    Slowness_1.default,
    Velocity_1.default,
    Temperature_1.default,
    TemperatureDifference_1.default,
    Time_1.default,
    Torque_1.default,
    Voltage_1.default,
    Volume_1.default,
    VolumeRatio_1.default,
    VolumetricFlowRate_1.default,
    Mass_1.default,
    MassFlowRate_1.default,
    Money_1.default,
    MoneyPerEnergy_1.default,
    GammaRay_1.default,
    Unitless_1.default,
    Pixels_1.default,
];
const unitKeyToQuantityCache = {};
const findQuantityBy = (unitKey) => {
    const cached = unitKeyToQuantityCache[unitKey];
    if (cached) {
        return cached;
    }
    const quantity = exports.Definitions.find((definition) => definition.units[unitKey]);
    if (quantity) {
        unitKeyToQuantityCache[unitKey] = quantity;
    }
    return quantity;
};
exports.findQuantityBy = findQuantityBy;
const unitSymbolToKeyCache = {};
const findUnitStandard = (unitSymbol) => {
    const cached = unitSymbolToKeyCache[unitSymbol];
    if (cached) {
        return cached;
    }
    let unitKey;
    exports.Definitions.map((definition) => {
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
exports.findUnitStandard = findUnitStandard;
const quantityNameToUnitsCache = {};
/**
 * return units per given quantity name e.g. Length ==> m, cm, mm, ft, inc etc
 */
const findUnitsByQuantity = (quantityName) => {
    const cached = quantityNameToUnitsCache[quantityName];
    if (cached) {
        return cached;
    }
    const units = [];
    exports.Definitions.forEach((quantity) => {
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
exports.findUnitsByQuantity = findUnitsByQuantity;
const unitSymbolToUnitCache = {};
/**
 * return quantity per given unit symbol e.g. m ==> Length
 */
const findQuantityByUnitSymbol = (unitSymbol) => {
    const cached = unitSymbolToUnitCache[unitSymbol];
    if (cached) {
        return cached;
    }
    let quantityToBeReturned;
    exports.Definitions.forEach((quantity) => {
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
exports.findQuantityByUnitSymbol = findQuantityByUnitSymbol;
