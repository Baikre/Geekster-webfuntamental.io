
let  API_KEY = "8UtYDC2WD9j3J42aFF5kMYB6y07rEKoostTVaJPUQP0";
//  var search_param = "pen";


  var input =document.getElementById("input")

  var btn_ref =document.getElementById("btn")


  function get_value(){
    var input1 = input.value;
    input1 = "";
    fetch_amdget()
  }
  btn_ref.addEventListener("click",get_value)


  let Html_div_ref = document.getElementById("container")

function fetch_amdget(){
  fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${get_value()}&per_page=30`)
  .then( response=> response.json())
  .then((res)=>{
     console.log(res);
      for(let i = 0 ; i<res.results.length; i++){
            let single_img =res.results[i].urls.small;
            console.log(single_img);
            let img = document.createElement("img")
             img.src= single_img;
              
             Html_div_ref.appendChild(img);
  
      } 
  })


}


