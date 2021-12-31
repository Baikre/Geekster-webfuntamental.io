let num = 625;
var chek = true;

for (let i = 0; i < num; i++) {
  
    let square = i * i
    if (square == num) {
        console.log(num + " perfect squar");
        chek = false;
        break;

    }

}

if (chek == true) {
    console.log("not");
}





