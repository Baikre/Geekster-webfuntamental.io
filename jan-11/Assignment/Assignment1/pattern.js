// console.log("❤");
document.write("💛")
/* input from user 
    udsing  loop
    use for document. write printing 
      
    *
    **
    ***
    ****
    *****
    ******
   
    */


document.write("<br>")
var n = prompt("Enter a number");




for (var i = 0; i <= n; i++) {

    var line = "";
    for (var j = 0; j <= i - 1; j++) {


        line = line + "*";


    }
    document.write(line)

    document.write("<br>")
}
