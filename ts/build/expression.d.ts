export declare abstract class Expression {
    abstract evaluate(): number;
    abstract asString(): string;
}
export declare class Add extends Expression {
    evaluate(): number;
    asString(): string;
    private l;
    private r;
    constructor(l: Expression, r: Expression);
}
export declare class Sub extends Expression {
    evaluate(): number;
    asString(): string;
    private l;
    private r;
    constructor(l: Expression, r: Expression);
}
export declare class Mul extends Expression {
    evaluate(): number;
    asString(): string;
    private l;
    private r;
    constructor(l: Expression, r: Expression);
}
export declare class Div extends Expression {
    evaluate(): number;
    asString(): string;
    private l;
    private r;
    constructor(l: Expression, r: Expression);
}
export declare class Num extends Expression {
    evaluate(): number;
    asString(): string;
    private value;
    constructor(value: string | number);
}
