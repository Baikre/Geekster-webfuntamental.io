/*
Q2. Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.




Example  : 
input =  20 , 10 ,30
 output =  30 is greatest than other

 input =  82,76,58
 output = 82 is greatest than othe  

 How to do 1st approach==>
         1 take 3 input from user using prompt
            
        2 promt gives string using parseInt cnovert number datatype
            
        3 using condition 
            if( num1 > num2 and num1 > num3 )= true num1 greatest
            if( num2 > num1 and num2 > num3 )= true num2 greatest
            if( num3 > num1 and num3 > num1 )= true num3 greatest  
            

        2nd approach==>
        1 take 3 input from user using prompt
        2 promt gives string using parseInt cnovert number datatype
             
        3 And  in console.log( Math.max(num1,num2,num3))
                
*/
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
