import { Add, Expression, Num, Sub } from './expression';
export declare enum UnitSystem {
    _imperial = "imperial",
    _metric = "metric"
}
export type UnitSystemType = UnitSystem._imperial | UnitSystem._metric;
export interface IOperation {
    readonly opValue: Num;
    apply: (value: Expression) => Expression;
    unapply: (value: Expression) => Expression;
}
export declare class FactorOperation implements IOperation {
    readonly opValue: Num;
    constructor(factor: Num);
    apply: (value: Expression) => Expression;
    unapply: (value: Expression) => Expression;
}
export declare class ShiftOperation implements IOperation {
    readonly opValue: Num;
    constructor(shift: Num);
    apply: (value: Expression) => Add;
    unapply: (value: Expression) => Sub;
}
export interface Unit {
    transformations: IOperation[];
    symbols: Set<string>;
    system: UnitSystemType;
    default?: boolean;
    quantityName?: string;
    note?: string;
}
export declare class Quantity {
    readonly name: string;
    readonly units: Record<string, Unit>;
    readonly subquantities: string[];
    constructor(name: string, units: Record<string, Unit>, subquantities: string[]);
    findDefaultUnit(): string | undefined;
}
