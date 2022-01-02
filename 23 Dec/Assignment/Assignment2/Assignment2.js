/*
Q. Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).

        
        
        
        
   Example  :
        input n= 20 
        output =2,4,6,8,10,12,14,16,18,20
        input n = 50
        output= 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50
     
     
     
     
   How to do ==>
                    1 input from user  using prompt 
                    2. prompt gives string using parsenInt convart number datatype .
                    3 .using for loop why ==> 2 to n all geting with loop 
                    4 .in loop increment will be +2 (get  even number)

                   
        */
  //input from user  using prompt     
let n = prompt("Enter a number");
//prompt gives string using parsenInt convart number datatype .
n = parseInt(n);

// using for loop why ==> 2 to n get 
for (let i = 2; i <= n; i = i + 2) {
    //in loop increment +2 why ==> +2 get  even number
    console.log(i);
    // print 2 to n using console i


}