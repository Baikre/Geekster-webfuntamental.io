var url = " http://universities.hipolabs.com/search?country=";

var input = document.getElementById("input");
var btn_ref = document.getElementById("btn")

fetch(url)
.then((geek)=>geek.json())
.then((finResult)=>{
    console.log(finResult);


    var input_val = input.value;


    function fil (){

        for( var i =0 ; i< 10; i++){
            //   var m = finResult[i].name;
              
            // console.log(m);
        
              if( input_val == finResult[i].country ){
                 var n = finResult[i].name
                 console.log(n);
               }
           
            
            }
    }
btn_ref.addEventListener("click",fil)

})
