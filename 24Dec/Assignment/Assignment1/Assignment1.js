/* 
Q. Factorial of a number input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 -> Take n from the user and alert the factorial of that number.



Example
        input = 10 
        output = 3628800
        input = 15
        output= 1307674368000


How to do ==>
              1 input from user using prompt 
              2 prompt gives String using parseaInt convert number datatype.       
              3 j is intialization (use in loop )
              4 using loop for decremention
              5( ex n= 5 : 5*1 = 5 ,5*4 =20 , 20*3= 60, 60* 2 = 120, 120*1= 120 ) How to do using (j=j*i)
              6 only last output  get in out of loop 
*/

console.log("✋");
//input from user using prompt 
let n = prompt("Enter a number of factorial")
//prompt gives String using parseaInt convert number datatype.
n = parseInt(n)
let j = 1
// using loop for decremention(for revers)(ex n = 5 : 5,4,3,2,1)
// i=n why ==> n = 10, i=10 
for (let i = n; i > 1; i--) {
//    ( ex n= 5 : 5*1 = 5 ,5*4 =20 , 20*3= 60, 60* 2 = 120, 120*1= 120 ) How to do using (j=j*i)
    j = j * i
    // console.log(j);
}
// only last output 
console.log("factorial of " + n + " = " + j);





