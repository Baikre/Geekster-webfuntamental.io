/*
Q. Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.




Example  : 
         input  =  85 <= mark
          output = 
                  lasya = 90
                  abhishek = 92
                  divya = 86
                   nikhil = 88
                   prabhuranjan = 89
                   rohit = 91
HOW TO DO ==>
            1. create a an object 

            2.in object create a an array 
            3 in Array separate separate Object for student information
             and  puting all student name and mark 
                
            4.use for loop for increment index of an array
              4.1.get in object Geeks student array index
              4.2. checking condition  marks >= 85 
              4.2.i.printting  all mark >=85 student name = mark
*/






console.log("✋");
//Geeks is a boject
var Geeks = {
    //  'key': "value"
    'Techer' : "Ayush Sinha",
    'subject': "MERN" ,
    'batch'  : "web funtamental",
    //student is a array
    'student':[
        // in Array separate separate Object for student information
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
            'mark': 85,
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



 // use for loop for increment index of an array
for(let i = 0 ; i <= Geeks.student.length; i++){
    //get in object Geeks student array index
   let a = Geeks.student[i]
   //  checking condition  marks >= 85 
   if(a.mark >= 85){
         
    // printting  all mark >=85 student name = mark
       console.log(a.name +" = "+ a.mark);
   }

     

}