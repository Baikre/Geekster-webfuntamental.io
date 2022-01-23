// var button_reference = document.getElementById("add_item");

// var todo = [];


// function display(){

//     var ref_div = document.getElementById("all_todo_item");
  
//     ref_div.innerText= ""
    
//     for(var i =0; i<todo.length;i++){

//         var single_item = todo[i]
//         var new_element = document.createElement("div");

//         new_element.innerText = single_item;
        
//         ref_div.appendChild(new_element);

//     }

// }


// function add_task(){

// var input_ref =document.getElementById("get_item");


//      var get_value = input_ref.values
      
//      todo.push(get_value);
    
//   display();
// }





// button_reference.addEventListener("click",add_task)


var button_reference = document.getElementById("add_item");

var todo = [];


function display(){

    var ref_div = document.getElementById("all_todo_item");
  
    ref_div.innerText= ""
    
    for(var i =0; i<todo.length;i++){

        var single_item = todo[i]
        var new_element = document.createElement("div");

        new_element.innerText = single_item;
        
        ref_div.appendChild(new_element);
        
        
        
        
    }

}


function add_task(){

var input_ref =document.getElementById("get_item");


     var get_value = input_ref.value
      
     todo.push(get_value);
    
  display();
  input_ref.value="";
}





button_reference.addEventListener("click",add_task)









// var button_reference = document.getElementById("add_item");

// var todo = [254,346,154,];

// function add_task(){
 
 
//     var ref_div = document.getElementById("all_todo_item")

//     for(var i =0; i<todo.length;i++){
//         var single_item = todo[i];
//         var task_in_dom = document.createElement("div")
//         task_in_dom.innerText= single_item
//         ref_div.appendChild(task_in_dom)
//     }


// }

// var input_ref = document.getElementById("get_item");
// var run =input_ref.value
// console.log(run);

// button_reference.addEventListener("click",add_task)








