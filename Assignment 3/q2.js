var Circle1 = /** @class */ (function () {
    function Circle1(r) {
        this.radius = r;
        this.pi = 3.142;
    }
    Circle1.prototype.cal = function () {
        var Ans = 0;
        Ans = this.pi * this.radius * this.radius;
        return Ans;
    };
    return Circle1;
}());
var obj1 = new Circle1(10.7);
var obj2 = new Circle1(15.2);
var ret = 0;
ret = obj1.cal();
console.log("Area is :" + ret);
ret = obj2.cal();
console.log("Area of circle is " + ret);
