//Typescript program to find the sum of array elements
function sum(arr) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var a = [23, 6, 7, 4, 5, 7];
var ret = 0;
ret = sum(a);
console.log("Addition is " + ret);
