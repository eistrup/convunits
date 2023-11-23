import { Add, Div, Expression, Mul, Num, Sub } from './expression';

export enum UnitSystem {
    _imperial = 'imperial',
    _metric = 'metric',
}
export type UnitSystemType = UnitSystem._imperial | UnitSystem._metric;

export interface IOperation {
    readonly opValue: Num;
    apply: (value: Expression) => Expression;
    unapply: (value: Expression) => Expression;
}

export class FactorOperation implements IOperation {
    readonly opValue: Num;
    constructor(factor: Num) {
        this.opValue = factor;
    }

    apply = (value: Expression): Expression => {
        return new Mul(value, this.opValue);
    };
    unapply = (value: Expression): Expression => {
        return new Div(value, this.opValue);
    };
}

export class ShiftOperation implements IOperation {
    readonly opValue: Num;
    constructor(shift: Num) {
        this.opValue = shift;
    }
    apply = (value: Expression) => {
        return new Add(value, this.opValue);
    };
    unapply = (value: Expression) => {
        return new Sub(value, this.opValue);
    };
}

export interface Unit {
    transformations: IOperation[];
    symbols: Set<string>;
    system: UnitSystemType;
    default?: boolean;
    quantityName?: string;
    note?: string;
}

export class Quantity {
    public readonly name: string;
    public readonly units: Record<string, Unit>;
    public readonly subquantities: string[];

    constructor(name: string, units: Record<string, Unit>, subquantities: string[]) {
        this.name = name;
        this.units = units;
        this.subquantities = subquantities;
    }

    public findDefaultUnit(): string | undefined {
        const symbolsSet = Object.values(this.units).find((unit) => unit.default).symbols;
        return symbolsSet.values().next().value;
    }
}
