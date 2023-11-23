import { Quantity } from './models';
import { Unit } from './models';
import { UnitNotFoundError, ConversionNotSupportedError, ConversionNotInitializedError } from './errors';
import { findQuantityBy, findUnitStandard } from './definitions';
import { Expression, Num } from './expression';

export class Convert {
    private fromU?: Unit;
    private toU?: Unit;
    private result?: Expression;
    private quantity?: Quantity;

    constructor(value: number | string) {
        this.result = new Num(value.toString());
    }

    from(unitSymbol: string): Convert {
        const unitKey = findUnitStandard(unitSymbol);
        if (!unitKey) throw new UnitNotFoundError(unitSymbol);
        const quantity = findQuantityBy(unitKey);
        this.quantity = quantity;
        this.fromU = quantity.units[unitKey];
        this.fromU.transformations.forEach((operation) => {
            this.result = operation.apply(this.result);
        });
        return this;
    }

    to(unitSymbol: string): Expression {
        if (!this.fromU) throw new ConversionNotInitializedError();
        const unitKey = findUnitStandard(unitSymbol);
        if (!unitKey) throw new UnitNotFoundError(unitSymbol);
        const quantity = findQuantityBy(unitKey);
        if (quantity !== this.quantity) throw new ConversionNotSupportedError(this.quantity.name, quantity.name);
        this.toU = quantity.units[unitKey];
        [...this.toU.transformations].reverse().forEach((operation) => {
            this.result = operation.unapply(this.result);
        });
        return this.result;
    }

    toDefault(unitSymbol: string): Expression {
        return this.from(unitSymbol).result;
    }
}
