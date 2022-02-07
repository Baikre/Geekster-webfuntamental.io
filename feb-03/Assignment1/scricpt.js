
 

function add(a,b,...sid){
        console.log(sid)
        let ans =0
        ans=ans+a+b
        for(var i=0;i<sid.length;i++){
            ans+=sid[i]
        }
        console.log(ans)
    }
   
 
console.log(add(14, 21, 18));   