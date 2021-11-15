
// const inf = [
//   {"IMG":"assets/EndGame.png", "TEN":"End Game"},
//   {"IMG":"assets/BlackWidow.png", "TEN":"Black Widow"},
//   {"IMG":"assets/Mission6.png", "TEN":"Mission: Impossible 6"},
//   {"IMG":"assets/FastAndFurious8.png", "TEN":"Fast and Furious 8"},
//   {"IMG":"assets/GodzillaAndKong.png", "TEN":"Godzilla & Kong"},
//   {"IMG":"assets/WandaVision.png", "TEN":"Wanda Vision"},
//   {"IMG":"assets/Loki.png", "TEN":"Loki"},
//   {"IMG":"assets/FastAndFurious8.png", "TEN":"Fast and Furious 8"},
//   {"IMG":"assets/EndGame.png", "TEN":"End Game"},
//   {"IMG":"assets/BlackWidow.png", "TEN":"Black Widow"},
  
//   {"IMG":"assets/Mission6.png", "TEN":"Mission: Impossible 6"},
//   {"IMG":"assets/FastAndFurious8.png", "TEN":"Fast and Furious 8"},
//   {"IMG":"assets/GodzillaAndKong.png", "TEN":"Godzilla & Kong"},
//   {"IMG":"assets/WandaVision.png", "TEN":"Wanda Vision"},
//   {"IMG":"assets/Loki.png", "TEN":"Loki"},
//   {"IMG":"assets/GodzillaAndKong.png", "TEN":"Godzilla & Kong"},
//   {"IMG":"assets/WandaVision.png", "TEN":"Wanda Vision"},
//   {"IMG":"assets/Loki.png", "TEN":"Loki"}
// ];

// buildTable1(inf)
// function buildTable1(data){
//   var tb1 = document.getElementById('idd1')
//   for(var i = 0; i < data.length/5; i++)
//   {
//       var row1 = `<div style="display: flex;" id="id${i}"></div>`
//       tb1.innerHTML+=row1       
      
//       var tb2 = document.getElementById('id'+i)
//       for(var j =i*5; j < 5*i+5; j++)
//       {
//         if(j<data.length)
//         {
//           var row2 = `<div class="wrap">
//                           <img src="${data[j].IMG}" style="width:100%;"/>  
//                           <p class="stylep" style="font-weight: 600;">${data[j].TEN}</p>                       
//                       </div>`
//               tb2.innerHTML+=row2
//         } 
//       }
//   }
// }


buildTable1();
function buildTable1() {
  $.ajax({
    url: "http://115.78.230.192:59025/api/film",
    type: "GET",
    dataType: "json",
    success: function success(data, textStatus, xhr) {
      var tb1 = document.getElementById("idd1");
      for (var i = 0; i < data.length / 5; i++) {
        var row1 = '<div style="display: flex;" id="id' + i + '"></div>';
        tb1.innerHTML += row1;

        var tb2 = document.getElementById("id" + i);
        for (var j = i * 5; j < 5 * i + 5; j++) {
          if (j < data.length) {
            var row2 =
              '<div class="wrap">' +
              '<img src="assets/' +
              data[j].image +
              '" style="width:100%;"/>  ' +
              '<p class="stylep" style="font-weight: 600;">' +
              data[j].name +
              "</p></div>";
            tb2.innerHTML += row2;
          }
        }
      }
    },
  });
}
