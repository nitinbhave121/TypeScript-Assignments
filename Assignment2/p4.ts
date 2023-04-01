let array :number[] = [105, 5, 293, 153, 17, 8208, 2, 1, 371, 95, 407, 54748];

let armstrong = (num:number) => {
let arm:number = num;
let a:number=arm;
let digits:number = arm.toString().length;
let rem:number=0,temp:number=0;
while(arm>0){
    rem=arm%10;
    temp=temp+(Math.pow(rem,digits));   
    arm=Math.floor(arm/10);
}
if(temp==a) return true;}

let armArray:number[]=array.filter(armstrong);
console.log(armArray);

