var url = "https://api2.binance.com/api/v3/ticker/24hr";





div_ref =document.getElementById("div")

fetch(url)
  .then((geek) => geek.json())
  .then((finalResult) => {
    // console.log(finalResult);
    for (var i = 0; i <100; i++) {
      ul = document.createElement("ul");
      li1 = document.createElement("li");
      li2 = document.createElement("li");
      li3 = document.createElement("li");
      li1.innerText ="Symbol : "+ finalResult[i].symbol;
      li2.innerText = "openPrice : "+ finalResult[i].openPrice;
      li3.innerText = "count: "+finalResult[i].count;
      //   tr.appendChild(td1).appendChild(td2).appendChild(td3);
      ul.append(li1,li2,li3);
      div_ref.appendChild(ul);
    }
  });


