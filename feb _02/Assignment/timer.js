

   var minute = prompt("Enter a number");
    minute=  parseInt(minute);

    var counder_S_value = 60;
    
    var counder_M_value = minute-1;
 
    
    var minute_ref = document.getElementById("minute")
   
      minute_ref.innerText = counder_M_value
 
    var interval_in_second = setInterval(() => {
        counder_S_value  = counder_S_value - 1 ;
        document.getElementById("second").innerText = counder_S_value
        if(counder_S_value == 0){
          counder_S_value=60;
          counder_M_value = counder_M_value - 1; 
          
        minute_ref.innerText = counder_M_value;
        }
    if(counder_M_value < 0 ){
        
            compleateTimer()
            minute_ref.innerText = "0"
    }

    }, 1000);

 
 function compleateTimer(){
    clearInterval(interval_in_second) ;
 }   
    

    document.getElementById("stop").addEventListener("click", function(){

        clearInterval(interval_in_second)
        this.innerText= "START" 
    })

    
   