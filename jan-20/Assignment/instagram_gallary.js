

var button_reference = document.getElementById("post");

var img_arr =[
   "./images/Spider-Man_MCU.jpg",
   "./images/instagram_post.jpg",
     "./images/download.jpg"
    
   
]

// console.log(img_arr);


function showImages()  {
   
   var container_ref = document.getElementById("gallery_container");

 
   container_ref.innerText="";
  
  

for(var i =0; i<img_arr.length;i++){

  var single_img = img_arr[i];
  var img_ref = document.createElement("img");
  img_ref.src = img_arr[i];
  container_ref.appendChild(img_ref);
}

   // console.log(img_ref);
}


button_reference.addEventListener("click", showImages);
