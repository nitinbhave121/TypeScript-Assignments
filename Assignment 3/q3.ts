// Inheritance concept

class Circle1
{
    radius:number;
    pi:number;
    constructor(data:number)
    {
          this.radius=data;
          this.pi=3.142
    }

    area():number
    {
        let Ans:number=0;
        Ans=this.pi*this.radius*this.radius;
        return Ans;
    }
}

class Circle3 extends Circle1
{
    constructor(data:number)
    {
        super(data);
    }
    circumference():number
    {
        let Ans:number=0
        Ans=2*this.pi*this.radius
        return Ans;
    }
}

var obj=new Circle3(10.7);
var Ret :number=0;

Ret=obj.area();
console.log("area is :"+Ret);

Ret=obj.circumference();
console.log("Circumference  is :"+Ret);