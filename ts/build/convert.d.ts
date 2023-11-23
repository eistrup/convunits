import { Expression } from './expression';
export declare class Convert {
    private fromU?;
    private toU?;
    private result?;
    private quantity?;
    constructor(value: number | string);
    from(unitSymbol: string): Convert;
    to(unitSymbol: string): Expression;
    toDefault(unitSymbol: string): Expression;
}
