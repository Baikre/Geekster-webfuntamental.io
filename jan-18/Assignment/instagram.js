 


 

























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


// var dub = document.querySelectorAll(".dubleClick")
 



likebtn.forEach((EachIcon)=>{
 

    EachIcon.addEventListener('click',  change =()=> {
        EachIcon.src="./images/red_heart.png"
    })
  
  })


  // dub.addEventListener("dblclick",)

  //   EachImg.addEventListener('click',chang_likebtn)
    
  //   function chang_likebtn(){
  //     EachImg.src="./images/pngaaa.com-1336862.png"

  // }




// dub.forEach((EachImg)=>{
//   EachImg.addEventListener('dblclick',()=>{
//     Eachimg.src="./images/red_heart.png"
//   })
// })
  







  

 
  

 
