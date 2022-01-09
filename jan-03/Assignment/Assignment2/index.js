 let outputscreen= document.getElementById("output");
 

 function display(num){
     outputscreen.value +=num;
 }
 function calculator(){
    outputscreen.value =eval(outputscreen.value);
 }
 function del(){
     outputscreen.value= ""
 }
//  function clear(){
//      outputscreen.value= 
//  }