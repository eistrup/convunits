import { Quantity } from './models';
export declare const Definitions: readonly [Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity, Quantity];
export declare const findQuantityBy: (unitKey: string) => Quantity | undefined;
export declare const findUnitStandard: (unitSymbol: string) => string | undefined;
/**
 * return units per given quantity name e.g. Length ==> m, cm, mm, ft, inc etc
 */
export declare const findUnitsByQuantity: (quantityName: string) => string[];
/**
 * return quantity per given unit symbol e.g. m ==> Length
 */
export declare const findQuantityByUnitSymbol: (unitSymbol: string) => Quantity;
