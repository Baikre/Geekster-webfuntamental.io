var url = "https://api2.binance.com/api/v3/ticker/24hr";

var table_ref = document.getElementById("table")
fetch(url)
.then((geekster) =>geekster.json())
.then ((GetResult)=>{
    console.log(GetResult[1]);
    for ( var i =0 ; i<1 ;i++){
        
        tr = document.createElement("tr")
        td1 =document.createElement("td")
        td2 =document.createElement("td")
        td3 =document.createElement("td")
        td4 =document.createElement("td")
        td5 =document.createElement("td")
        td6 =document.createElement("td")
        

        // li1.in 

        td1.innerText = GetResult[i].symbol;
        td2.innerText = GetResult[i].openPrice;
        td3.innerText = GetResult[i].lowPrice;
        td4.innerText = GetResult[i].count;
        td5.innerText = GetResult[i].volume;
        td6.innerText = GetResult[i].highPrice;

        tr.append(td1, td2, td3,td4,td5,td6);
        table_ref.appendChild(tr);
    }
    
})