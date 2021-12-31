



let arr = [];

let num1 = (prompt("Enter Number 1st"))
num1 = parseInt(num1)
let number1 = arr.push(num1)

let num2 = (prompt("Enter a Number 2nd"))
num2 = parseInt(num2)
let number2 = arr.push(num2)

let num3 = (prompt("Enter a Number 3rd"))
num3 = parseInt(num3)
let number3 = arr.push(num3)

console.log(arr);
let max = Math.max(...arr)
console.log("max is =" + max);

