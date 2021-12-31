console.log("🤔");
var Geeks = {
    'Techer': "Ayush Sinha",
    'subject': "MERN" ,
    'student':[
        {
            'name' : "lasya",
            'mark' :90,
            'id':"vision_1"
        },
        {
            'name' : "abhishek",
            'mark' :92,
            'id':"vision_2"
        },
        {
            'name':"sohail",
            'mark': 77,
            'id':"vision_3"
        },
        {
            'name':"divya" ,
            'mark': 86,
            'id':"vision_4"       
        },
        {
            'name':"manik",
            'mark':73,
            'id':"vision_5"
        },
        {
            'name':"nikhil",
            'mark': 88,
            'id':"vision_6"
        },
        {
            'name':"rishav",
            'mark': 69,
            'id':"vision_7"
        },
        {
            'name':"princes",
            'mark': 80,
            'id':"vision_8"
        },
        {
            'name':"prabhuranjan",
            'mark': 89,
            'id':"vision_9"

        },
        {
            'name':"ujjwal",
            'mark': 84,
            'id':"vision_10"
        },
        {
            'name':"rahul",
            'mark': 79,
            'id':"vision_11"
        },
        {
            'name':"rohit",
            'mark': 91,
            'id':"vision_12"
        }
    ]

   
}




for(let i = 0 ; i <= Geeks.student.length; i++){
   let a = Geeks.student[i]
   if(a.mark >= 85){

       console.log(a.name +" = "+ a.mark);
   }

     

}