


let num = prompt("Enter a Number to check prime or Not");
num = parseInt(num)
if (num == 1) {
    alert(num + " Not prime or Not composite ")
}

else if (1 < num) {
    var check = true;
    for (let i = 2; i <= num - 1; i++) {

        if (num % i == 0) {
            console.log(num + " is not prime Number ");
            check = false;
            break;
        }

    }
    if (check == true)
        console.log(num + " is prime number");



}


