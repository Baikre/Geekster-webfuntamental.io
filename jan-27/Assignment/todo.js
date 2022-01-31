


var input = document.getElementById("input");
var btn_Ref = document.getElementById("btn");
var Alltodo_ref = document.getElementById("all_todoItem");




var todo = [];



  

 

function display_OnScreen() {

    Alltodo_ref.innerText ="";
    for (var i = 0; i < todo.length; i++) {

        var single_item = todo[i];
        var todoHtml = `<div>
<span>${single_item}</span>
<i class="fas fa-edit" id=""></i>
<i class="fas fa-check-circle"></i>
<i class="far fa-trash-alt" id="delete_${single_item}"></i>
</div>`
        Alltodo_ref.innerHTML += todoHtml;

    }



}

function additem(e) {
    e.preventDefault();
    input_val = input.value
    var item = todo.push(input_val)
    console.log(item);

    display_OnScreen();
    input_val = ""
}
btn_Ref.addEventListener("click", additem)