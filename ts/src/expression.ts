import { NotANumberError } from './errors';

export abstract class Expression {
    abstract evaluate(): number;
    abstract asString(): string;
}
export class Add extends Expression {
    evaluate(): number {
        return this.l.evaluate() + this.r.evaluate();
    }
    asString(): string {
        return `(${this.l.asString()}+${this.r.asString()})`;
    }
    private l: Expression;
    private r: Expression;
    constructor(l: Expression, r: Expression) {
        super();
        this.l = l;
        this.r = r;
    }
}
export class Sub extends Expression {
    evaluate(): number {
        return this.l.evaluate() - this.r.evaluate();
    }
    asString(): string {
        return `(${this.l.asString()}-${this.r.asString()})`;
    }
    private l: Expression;
    private r: Expression;
    constructor(l: Expression, r: Expression) {
        super();
        this.l = l;
        this.r = r;
    }
}
export class Mul extends Expression {
    evaluate(): number {
        return this.l.evaluate() * this.r.evaluate();
    }
    asString(): string {
        return `(${this.l.asString()}*${this.r.asString()})`;
    }
    private l: Expression;
    private r: Expression;
    constructor(l: Expression, r: Expression) {
        super();
        this.l = l;
        this.r = r;
    }
}
export class Div extends Expression {
    evaluate(): number {
        return this.l.evaluate() / this.r.evaluate();
    }
    asString(): string {
        return `(${this.l.asString()}/${this.r.asString()})`;
    }
    private l: Expression;
    private r: Expression;
    constructor(l: Expression, r: Expression) {
        super();
        this.l = l;
        this.r = r;
    }
}
export class Num extends Expression {
    evaluate(): number {
        try {
            const num = Number(this.value);
            if (isNaN(num)) throw Error();
            return num;
        } catch (error) {
            throw new NotANumberError(`${this.value}`);
        }
    }
    asString(): string {
        return `${this.value}`;
    }
    private value: string | number;
    constructor(value: string | number) {
        super();
        this.value = value;
    }
}
