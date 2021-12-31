
let num1 = prompt("Enter a number 1st");
num1 = parseInt(num1);
let num2 = prompt("Enter a number 2nd");
num2 = parseInt(num2)
let num3 = prompt("Enter a number 3rd");
num3 = parseInt(num3);

if (num1 > num2 && num1 > num3) {
    console.log("Number 1st = " + num1 + " is Greatest");

}
else if (num2 > num1 && num2 > num3) {
    console.log("Number 2nd = " + num2 + " is Greatest");

}
else if (num3 > num1 && num3 > num2) {
    console.log("Number 3rd = " + num3 + " is Greatest");
}
else {
    console.log(" Number 1st 2nd 3rd is Equal Number");
}
