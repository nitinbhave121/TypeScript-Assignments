// Typescript program for addition subtraction multiplication and division using class concept

class Arithmetic1
{
    Number1:number;
    Number2:number;

    constructor(A:number,B:number)
    {
        this.Number1=A;
        this.Number2=B;

    }
    Addition():number
    {
        return this.Number1+this.Number2;
    }
    Subtraction():number
    {
        return this.Number1-this.Number2;
    }
    Multiplication():number
    {
        return this.Number1*this.Number2;
    }

    Division():number
    {
        return this.Number1/this.Number2;
    }

}

    var ob1=new Arithmetic1(20,10);
    var ob2=new Arithmetic1(40,20);
    var ret:number=0;
    ret=ob1.Addition();
    console.log("Addition is :"+ret)
    ret=ob1.Subtraction();
    console.log("Subtraction is :"+ret)
    ret=ob1.Multiplication();
    console.log("Multiplication is :"+ret);
    ret=ob1.Division();
    console.log("division is "+ret)

    ret=ob2.Addition()
    console.log("Addition is :"+ret)
    ret=ob2.Subtraction();
    console.log("Subtraction is "+ret);
    ret=ob2.Multiplication()
    console.log("Multiplication is :"+ret)
    ret=ob2.Division();
    console.log("Division  is "+ret);