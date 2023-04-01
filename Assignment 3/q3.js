// Inheritance concept
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle1 = /** @class */ (function () {
    function Circle1(data) {
        this.radius = data;
        this.pi = 3.142;
    }
    Circle1.prototype.area = function () {
        var Ans = 0;
        Ans = this.pi * this.radius * this.radius;
        return Ans;
    };
    return Circle1;
}());
var Circle3 = /** @class */ (function (_super) {
    __extends(Circle3, _super);
    function Circle3(data) {
        return _super.call(this, data) || this;
    }
    Circle3.prototype.circumference = function () {
        var Ans = 0;
        Ans = 2 * this.pi * this.radius;
        return Ans;
    };
    return Circle3;
}(Circle1));
var obj = new Circle3(10.7);
var Ret = 0;
Ret = obj.area();
console.log("area is :" + Ret);
Ret = obj.circumference();
console.log("Circumference  is :" + Ret);
