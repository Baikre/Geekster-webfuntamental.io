/*
Q. Write a program to take an input from the user (num) and check whether it is a prime number or not.


Example =
           input = 57
           output = 57 is prime number
           
           input  = 46
            output = 46 is not prime number

            input = 27 
            output = 27 is no prime number 


How to do ==> 
             1 input from user using prompt

             2 prompt gives String using parseInt convert number datatype

             3 check codition num == 1 = true then 1 not prime or composite.

             4 second condition num >1  = true then 
                    4.1 using boolean cheking purpose condition true or flase
                    4.2 use for loop for increment index (ex num = 5 and i = 2,3,4) 
                            4.2.i. in for loop   cheking [num % i ==0]  (ex num = 5 and i = 2,3,4 puting
                                    these value in condition )  cheking ==0 =true then  num is not prime
                            4.2.ii. check boolean =flase 
                            4.2.iii. condition will be break
                    4.3.using condition for check boolean = true thrn num is prime 


 */

//input from user using prompt
let num = prompt("Enter a Number to check prime or Not");
// prompt gives String using parseInt convert number datatype
num = parseInt(num)
// check codition num == 1 = true then 1 not prime or composite.
if (num == 1) {
    alert(num + " Not prime or Not composite ")
}
//condition num >1
else if (num >1) {
    // using boolean cheking purpose condition true or flase
    var check = true;
    // use for loop for increment index (ex num = 5 and i = 2,3,4)
    for (let i = 2; i <= num - 1; i++) {
           //in for loop   cheking [num % i ==0]  (ex num = 5 and i = 2,3,4 puting
        //    these value in condition )  cheking ==0 =true then  num is not prime
        if (num % i == 0) {
            console.log(num + " is not prime Number ");
            // check boolean =flase
            check = false;
            //condition will be break
            break;
        }

    }
    // condition for check boolean = true thrn num is prime 
    if (check == true)
        console.log(num + " is prime number");



}


