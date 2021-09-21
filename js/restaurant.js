const inf = [
    {"IMG":"assets/lotteria.png", "TEN":"Lotteria", "SANH":"Sảnh A"},
    {"IMG":"assets/mcdonalds.png", "TEN":"McDonald's", "SANH":"Sảnh A"},
    {"IMG":"assets/tokyodeli.png", "TEN":"Tokyo Deli", "SANH":"Sảnh A"},
    {"IMG":"assets/highland.png", "TEN":"Highland", "SANH":"Sảnh A"},
    {"IMG":"assets/vietcombank.png", "TEN":"ATM Vietcombank", "SANH":"Sảnh A"}
  ];


buildTable1(inf)
function buildTable1(data){
  var tb1 = document.getElementById('idd1')
  for(var i = 0; i < data.length/5; i++)
  {
      var row1 = `<div style="display: flex;" id="id${i}"></div>`
      tb1.innerHTML+=row1       
      
      var tb2 = document.getElementById('id'+i)
      for(var j =i*5; j < 5*i+5; j++)
      {
        if(j<data.length)
        {
          var row2 = `<div class="wrap">
                          <img src="${data[j].IMG}" style="width:100%; border:1px solid rgba(0, 0, 0, 0.15)"/>  
                          <p class="stylep" style="font-weight: 600;">${data[j].TEN}</p>                       
                          <p class="stylep" style="color:gray">${data[j].SANH}</p>  
                      </div>`
              tb2.innerHTML+=row2
        } 
      }
  }
}