var array = [105, 5, 293, 153, 17, 8208, 2, 1, 371, 95, 407, 54748];
var armstrong = function (num) {
    var arm = num;
    var a = arm;
    var digits = arm.toString().length;
    var rem = 0, temp = 0;
    while (arm > 0) {
        rem = arm % 10;
        temp = temp + (Math.pow(rem, digits));
        arm = Math.floor(arm / 10);
    }
    if (temp == a)
        return true;
};
var armArray = array.filter(armstrong);
console.log(armArray);
