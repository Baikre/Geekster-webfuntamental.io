//input n=  
//output 2,4,6,8,10,12,14,......
//1.prompt 
//2.using for loop why ==> 0 to n
//3.even number (i=i+2)
let n = prompt("Enter a number");
n = parseInt(n);

for (let i = 2; i <= n; i = i + 2) {
    console.log(i);


}