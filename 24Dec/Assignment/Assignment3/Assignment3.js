
/*

Q. Write a program to check the given number is a perfect square or not! (Don't use function)



Example = 
          input =  25
          output = 25 is perfect squar

          input = 63 
          output = 63 is not a per fect squar


    How to do ==>
                 1. input from user using prompt 
                 2. prompt gives String using parseaInt convert number datatype.
                 3. boolean intialization use for codition true or flase
                 4.using loop for incremention
                  4.1 square(ex 4*4=16)= i*i   
                  4.2 checking num == i*i this is true then perfect square   
                   4.2.i. boolean check is false
                   4.2.ii. break a condition
                5.boolean check==true then num  not perfect squar 

*/

// input from user using prompt 
let num = prompt("Enter a Number to check if it is Perfect Square or Not");
// prompt gives String using parseaInt convert number datatype.
num = parseInt(num);

//boolean intialization
var check = true;
// using loop for incremention
for (let i = 0; i < num; i++) {
     //square(ex 4*4=16)= i*i
    let square = i * i
    // checking num == i*i this is true then perfect square
    if (square == num) {
        console.log(num + " perfect squar");
        //boolean check is false 
        check = false;
        //break a condition
        break;

    }

}
//boolean check==true then num  not perfect squar
if (check == true) {
    console.log(num +" not perfect squar");
}





