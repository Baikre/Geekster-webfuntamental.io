Assignment:
/* Q.create an array using .push with prompt and also using parseInt();
 Take three numbers and find max. (Using arrays) 
 


 Example  : 
            input : [10,12,15]
            output :  max is = 15
            
            input : [157,145,248]
            output : max is = 248

 how to do ==>
           apporach 1 : 
                  1.  create empty arr
                   2. taking 3 input from user and 
                    3. these input pushing in arr using 
                     .push()
                    4. using Math.max 
                     Math.max gives maximum value     



        apporach 2:
                       // create empty arr
                        let arr = [];
                        // taking input from user using prompt 
                        let num1 = (prompt("Enter Number 1st"))
                        //prompt gives string using parseInt convert datatype
                        num1 = parseInt(num1)
                        //num1 pushing in arr
                        let number1 = arr.push(num1)

                        // taking input from user using prompt 
                        let num2 = (prompt("Enter a Number 2nd"))
                        //prompt gives string using parseInt convert datatype
                        num2 = parseInt(num2)
                        //num2 pushing in arr
                        let number2 = arr.push(num2)

                        // taking input from user using prompt 
                        let num3 = (prompt("Enter a Number 3rd"))
                        //prompt gives string using parseInt convert datatype
                        num3 = parseInt(num3)
                        //num3 pushing in arr
                        let number3 = arr.push(num3)

                        console.log(arr);
                             //num1> num2 and num3
                        if (num1 > num2 && num1 > num3) {
                            console.log("Number 1st = " + num1 + " is Greatest");

                        }
                         //num2> num1 and num3
                        else if (num2 > num1 && num2 > num3) {
                            console.log("Number 2nd = " + num2 + " is Greatest");

                        }
                        //num3> num1 and num2
                        else if (num3 > num1 && num3 > num2) {
                            console.log("Number 3rd = " + num3 + " is Greatest");
                        }
                         //num1 = num2 = num3
                        else {
                            console.log(" Number 1st 2nd 3rd is Equal Number");

                            */

                    
 


    // create empty arr
    var arr =[];
    // taking input from user using prompt 
    let num1 = (prompt("Enter Number 1st"))
    //prompt gives string using parseInt convert datatype
    num1 = parseInt(num1)
    //num1 pushing in arr
    var number1 = arr.push(num1)

    // taking input from user using prompt 
    var num2 = (prompt("Enter a Number 2nd"))
    //prompt gives string using parseInt convert datatype
    num2 = parseInt(num2)
    //num2 pushing in arr
    var number2 = arr.push(num2)

    // taking input from user using prompt 
    var num3 = (prompt("Enter a Number 3rd"))
    //prompt gives string using parseInt convert datatype
    num3 = parseInt(num3)
    //num3 pushing in arr
    var number3 = arr.push(num3)

    console.log(arr);
    //  Math.max gives  maximum value in arr
    var max = Math.max(...arr)
    console.log("max is =" + max);

