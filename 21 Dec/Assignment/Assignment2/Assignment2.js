/*


Check whether the given chracter is a vowel or not. (Also check for capital characters)


Example : 
          input : U 
          output : character is vowel 
          input : c
          output : character is not vowel
          input : e
          output : character is vowel
          
  how to do ==>
          
            1 taking input from user using prompt
            2. cheking 
              2.1.character is (a or A) = true then  output is vowel
              2.2 character is (e or E) = true then output is vowel
              2.3 character is (i or I) = true then output is vowel
              2.4 character is (o or O) = true then output is vowel
              2.3 character is (u or U) = true then output is vowel
              2.4  character is not (a,e,i,o,u) or (A,E,I,O,U) then output character is not vowel

              


*/

  // input from user 
let char = prompt("Enter a chracter")
  // cheking char is "a" or "A"
if ((char == "a") || (char == "A")) {
    alert(char + " chracter is  vowel ");
}
  // cheking char is "e"  or "E"
else if ((char == "e") || (char == "E")) {
    alert(char +" chrcter is vowel");
}
  // cheking char is "i" or "I"
else if ((char == "i") || (char == "I")) {
    alert(char +" chrcter is vowel");
}
  // cheking char is "o" or "O"
else if ((char == "o") || (char == "O")) {
    alert(char +" chrcter is vowel");
}
  // cheking char is "u" or "U"
else if ((char == "u") || (char == "U")) {
    alert(char +" chrcter is vowel");
}
  //  char not a,e,i,o,u then  chrcter is not vowel
else {
    alert(char +" chrcter is not vowel");
}
