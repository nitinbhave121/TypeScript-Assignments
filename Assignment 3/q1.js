// Typescript program for addition subtraction multiplication and division using class concept
var Arithmetic1 = /** @class */ (function () {
    function Arithmetic1(A, B) {
        this.Number1 = A;
        this.Number2 = B;
    }
    Arithmetic1.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic1.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic1.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic1.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmetic1;
}());
var ob1 = new Arithmetic1(20, 10);
var ob2 = new Arithmetic1(40, 20);
var ret = 0;
ret = ob1.Addition();
console.log("Addition is :" + ret);
ret = ob1.Subtraction();
console.log("Subtraction is :" + ret);
ret = ob1.Multiplication();
console.log("Multiplication is :" + ret);
ret = ob1.Division();
console.log("division is " + ret);
ret = ob2.Addition();
console.log("Addition is :" + ret);
ret = ob2.Subtraction();
console.log("Subtraction is " + ret);
ret = ob2.Multiplication();
console.log("Multiplication is :" + ret);
ret = ob2.Division();
console.log("Division  is " + ret);
