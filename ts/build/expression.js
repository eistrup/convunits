"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Num = exports.Div = exports.Mul = exports.Sub = exports.Add = exports.Expression = void 0;
const errors_1 = require("./errors");
class Expression {
}
exports.Expression = Expression;
class Add extends Expression {
    evaluate() {
        return this.l.evaluate() + this.r.evaluate();
    }
    asString() {
        return `(${this.l.asString()}+${this.r.asString()})`;
    }
    constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
    }
}
exports.Add = Add;
class Sub extends Expression {
    evaluate() {
        return this.l.evaluate() - this.r.evaluate();
    }
    asString() {
        return `(${this.l.asString()}-${this.r.asString()})`;
    }
    constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
    }
}
exports.Sub = Sub;
class Mul extends Expression {
    evaluate() {
        return this.l.evaluate() * this.r.evaluate();
    }
    asString() {
        return `(${this.l.asString()}*${this.r.asString()})`;
    }
    constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
    }
}
exports.Mul = Mul;
class Div extends Expression {
    evaluate() {
        return this.l.evaluate() / this.r.evaluate();
    }
    asString() {
        return `(${this.l.asString()}/${this.r.asString()})`;
    }
    constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
    }
}
exports.Div = Div;
class Num extends Expression {
    evaluate() {
        try {
            const num = Number(this.value);
            if (isNaN(num))
                throw Error();
            return num;
        }
        catch (error) {
            throw new errors_1.NotANumberError(`${this.value}`);
        }
    }
    asString() {
        return `${this.value}`;
    }
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.Num = Num;
