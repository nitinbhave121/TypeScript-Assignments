
class Circle2
{
    radius:number;
    pi:number
    constructor(r:number)
    {
        this.radius=r;
        this.pi=3.142
    }

    cal():number
    {
        let Ans:number=0;
        Ans=this.pi*this.radius*this.radius
        return Ans;
    }
}

var obj1=new Circle2(10.7)
var obj2=new Circle2(15.2)

var ret:number=0
ret=obj1.cal()
console.log("Area is :"+ret)
ret=obj2.cal()
console.log("Area of circle is "+ret);
