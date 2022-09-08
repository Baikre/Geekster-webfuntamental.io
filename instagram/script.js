var post_btnRef = document.getElementById("post_btn")

var all_post = document.getElementById("all_post")
let store_image = ["./images/Spider-Man_MCU.jpg","./images/instagram_post.jpg","./images/download.jpg"]

let store_post = []




function newPost(){
    var postimg = prompt("Enter a post img Url");
    var postHtml= `<div class="post">
    <div class="post-heading">
        <div class="post-heading-left">
            <img src="./images/profile_image.jpeg" />
        </div>
        <div class="post-heading-right"> • • •</div>

    </div>
    <div class="post-img">
        <img src=${postimg} class="dubleClick">
    </div>
    <div class="post-like-comment">
        <ul class="post-like-comment-right">
            <li><img src="./images/heart_icon.png" class="like" /></li>
            <li><img src="./images/bubble_chat_chatting_comment_message_icon.png" /></li>
            <li> <img src="./images/plane_paper airplane_send_airplane_multimedia_icon.png" /></li>
        </ul>
    </div>
    <div class="post-comment">
        <p><span class="like-counter"> </span> Likes</p>
        <p>View all .... comment </p>
        <p>...Days ago</p>
    </div>
    <hr>
    <div class="comment">
        <img src="./images/happy.png">
        <input type="text" placeholder="Add a comment ...">
    </div>
</div>
`



all_post.innerHTML += postHtml
store_image.push(postimg)
store_post.push(postHtml)

 }

post_btnRef.addEventListener("click",newPost);


console.log(store_post)
console.log(store_image)










var likebtn = document.querySelectorAll(".like");







likebtn.forEach((EachIcon)=>{
 

        EachIcon.addEventListener('click',  ()=> {
            EachIcon.src="./images/red_heart.png"
        })
      
      })






