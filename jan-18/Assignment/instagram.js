 


 

























// function likeButton(){
//   var heart = document.querySelectorAll('.heart')
//   console.log(heart);

//   if(heart.src.match("./images/heart_icon.png")){
//     heart.src = "./images/red_heart.png";
//   }
//   else{
//     heart.src = "./images/heart_icon.png";
//   }
//   // if(heart.scr.match("./images/heart_icon.png")){
//   //   heart.scr = "./images/red_heart.png";

//   // }
//   // else{
//   //   heart.scr = "./images/heart_icon.png'";
//   // }

// }




























var likebtn = document.querySelectorAll(".like");
// console.log(likebtn);



 



likebtn.forEach((EachImg)=>{
    EachImg.addEventListener('click',()=>{
        EachImg.src="./images/red_heart.png"
    })
    

  //   EachImg.addEventListener('click',chang_likebtn)
    
  //   function chang_likebtn(){
  //     EachImg.src="./images/pngaaa.com-1336862.png"

  // }

})


  







  

//   dub.addEventListener('dblclick',chang_likebtn)
  

 
