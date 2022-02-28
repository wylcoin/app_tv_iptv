
// var inf = [
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
    url: "http://115.78.230.192:59064/api/film",
    type: "GET",
    dataType: "json",
    success: function success(data, textStatus, xhr) {
      var tb1 = document.getElementById("firm-list-wrap");
      for (var i = 0; i < data.length / 5; i++) {
        var row1 = '<li class="film-group" id="id'+i+'"></li>';
        tb1.innerHTML += row1;

        var x = 0;
        var tb2 = document.getElementById("id" + i);
        for (var j = i * 5; j < 5 * i + 5; j++) {
          if (j < data.length) {
            var row2 =
              '<div class="wrap film-item" data-position="'+x+'-'+ i  +'"'+'>'+
              '<img src="assets/' +
              data[j].image +
              '" style="width:100%;"/>  ' +
              '<p class="stylep" style="font-weight: 600;">' +
              data[j].name +
              "</p></div>";
              x++
            tb2.innerHTML += row2;
          }
        }
      }
    },
  });
}
var defaultPosition = "0-0"; //x-y
var currentX = Number(defaultPosition.split("-")[0]);
var currentY = Number(defaultPosition.split("-")[1]);

var items =  document.getElementsByClassName('film-item')

console.log(items);

function loadItemActive() {
  for (var element of items) {
    var pos = element.dataset.position;
    if (pos === defaultPosition) {
      //   console.log(element);
      element.classList.add("active");
    } else element.classList.remove("active");
  }
}
loadItemActive();
function getNewCurrentPosition() {
  return currentX + "-" + currentY;
}
function isValidNode(location) {
  var positions = [];
  for (var node of items) {
    var position = node.dataset.position;
    positions.push(position);
  }
  return positions.includes(location);
}
function handlePosition(num, axis) {
  if (axis === "x") {
    if (isValidNode(currentX + num + "-" + currentY)) {
      currentX = currentX + num;
      handleScrollTvIntoView();
    }
  } else {
    if (isValidNode(currentX + "-" + (currentY + num))) {
      currentY = currentY + num;
      handleScrollTvIntoView();
    }
  }
  defaultPosition = getNewCurrentPosition();
  loadItemActive();
}
window.onkeydown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
      //   "x--"
      handlePosition(-1, "x");
      break;
    case 38:
      //   "y--"
      handlePosition(-1, "y");
      break;
    case 39:
      //   "x++"
      handlePosition(1, "x");
      break;
    case 40:
      //   "y++"
      handlePosition(1, "y");
      break;
    case 13:
      for (var node of items) {
        var locationItem = node.dataset.position;

        if (locationItem === defaultPosition) {
          // console.log(locationItem,node);
          node.onclick = function () {
            console.log("im here ", node);
          };
          node.click();
        }
      }

      break;
      case 10009: 
      goBack()
      break;
    default:
      break;
  }
};

function handleScrollTvIntoView() {
  setTimeout(function () {
    document.querySelector(".film-item.active").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, 350);
}
// window.onbeforeunload =  function() {
//   prompt('Are you want to close this?')
//   return "Do you really want to close?";
// }
