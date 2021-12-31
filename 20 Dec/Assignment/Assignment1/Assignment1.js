 
 
 
 /*Write a program to check whether the number is greater than 10 or not




 Example 
        input : 20 
           output : 20 is greater than 10 

        input : 7
          output : 7 is less than 10

        input : 10
          output: 10 is equal 10 



How to do ==> 
              1. take a number from user 
                 1.1 using prompt
                 1.2 prompt  gives a string using parseInt to convert number datatype
              2.  check a condition useing (if, else)
                2.1 when number ==10 then (10 is equal 10)
                2.2 when number > 10 then (number is greater than 10)
                2.3when nuber < 10 then (number is less than 10)
*/
let num = prompt("Enter a number")
num = parseInt(num);
if(num == 10){
    console.log(num + " is  Equal  10");
}
else if (num > 10) {
    console.log(num + " is greater then 10");
}
else {
    console.log(num + " is less then 10");

}