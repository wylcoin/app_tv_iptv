// const inf = [
//     {"IMG":"assets/lotteria.png", "TEN":"Lotteria", "SANH":"Sảnh A"},
//     {"IMG":"assets/mcdonalds.png", "TEN":"McDonald's", "SANH":"Sảnh A"},
//     {"IMG":"assets/tokyodeli.png", "TEN":"Tokyo Deli", "SANH":"Sảnh A"},
//     {"IMG":"assets/highland.png", "TEN":"Highland", "SANH":"Sảnh A"},
//     {"IMG":"assets/vietcombank.png", "TEN":"ATM Vietcombank", "SANH":"Sảnh A"}
//   ];

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
//                           <img src="${data[j].IMG}" style="width:100%; border:1px solid rgba(0, 0, 0, 0.15)"/>
//                           <p class="stylep" style="font-weight: 600;">${data[j].TEN}</p>
//                           <p class="stylep" style="color:gray">${data[j].SANH}</p>
//                       </div>`
//               tb2.innerHTML+=row2
//         }
//       }
//   }
// }

function buildTable1() {
  $.ajax({
    url: "http://115.78.230.192:59064/api/restaurant",
    type: "GET",
    dataType: "json",
    success: function success(data, textStatus, xhr) {
      var tb1 = document.getElementById("restaurant-list");
      for (var i = 0; i < data.length / 5; i++) {
        var row1 = '<div style="display: flex;" id="id' + i + '"></div>';
        tb1.innerHTML += row1;

        var tb2 = document.getElementById("id" + i);
        var x = 0;
        for (var j = i * 5; j < 5 * i + 5; j++) {
          if (j < data.length) {
            var row2 =
              '<div class="wrap item" data-position="' +
              x +
              "-" +
              i +
              '">' +
              '<img src="assets/' +
              data[j].image +
              '" class="brand-logo"/>';
            '<p class="stylep" style="font-weight: 600;">' +
              data[j].name +
              "</p>" +
              '<p class="stylep" style="color:gray">' +
              data[j].location +
              "</p>" +
              "</div>";
            x++;
            tb2.innerHTML += row2;
          }
        }
      }
    },
  });
}
buildTable1();

var defaultPosition = "0-0"; //x-y
var currentX = Number(defaultPosition.split("-")[0]);
var currentY = Number(defaultPosition.split("-")[1]);

var items = document.getElementsByClassName("wrap");

function loadItemActive() {
  for (const element of items) {
    const pos = element.dataset.position;
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
  let positions = [];
  for (const node of items) {
    const position = node.dataset.position;
    positions.push(position);
  } 
  var result = positions.indexOf(location)

  if(result === -1) {
    return false
  } 
  return true
  // } else return positions.includes(location);
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
      for (const node of items) {
        const locationItem = node.dataset.position;

        if (locationItem === defaultPosition) {
          // console.log(locationItem,node);
          node.onclick = function () {
            console.log("im here ", node);
            alert("im here," + node.dataset.position);
          };
          node.click();
        }
      }

      break;
    case 10009:
      goBack();
      break;
    default:
      break;
  }
};

function handleScrollTvIntoView() {
  setTimeout(function () {
    document.querySelector(".item.active").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "end",
    });
  }, 350);
}
function goBack() {
  window.history.back();
}
