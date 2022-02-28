// var handleKeyCode = require('../main.js');
var $ = document.querySelector.bind(document);
var chanelList = [
  { IMG: "assets/VTV1.png", TEN: "VTV1", id: 1 },
  { IMG: "assets/VTV3.png", TEN: "VTV3", id: 2 },
  { IMG: "assets/VTV6.png", TEN: "VTV6", id: 3 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 4 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 5 },
  { IMG: "assets/VTV1.png", TEN: "VTV1", id: 6 },
  { IMG: "assets/VTV3.png", TEN: "VTV3", id: 7 },
  { IMG: "assets/VTV6.png", TEN: "VTV6", id: 8 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 9 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 10 },
  { IMG: "assets/VTV1.png", TEN: "VTV1", id: 11 },
  { IMG: "assets/VTV3.png", TEN: "VTV3", id: 12 },
  { IMG: "assets/VTV6.png", TEN: "VTV6", id: 13 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 14 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 15 },
  { IMG: "assets/VTV1.png", TEN: "VTV1", id: 16 },
  { IMG: "assets/VTV3.png", TEN: "VTV3", id: 17 },
  { IMG: "assets/VTV6.png", TEN: "VTV6", id: 18 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 19 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 20 },
  { IMG: "assets/VTV1.png", TEN: "VTV1", id: 21 },
  { IMG: "assets/VTV3.png", TEN: "VTV3", id: 22 },
  { IMG: "assets/VTV6.png", TEN: "VTV6", id: 23 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 24 },
  { IMG: "assets/Disney.png", TEN: "Disney", id: 25 },
];


// console.log(getPartHaft(1), getPartHaft(2));

buildTable1(chanelList);
function buildTable1(data) {
  var elementWrapper = document.querySelector("#chanel-list-slider");
  for (var i = 0; i < data.length / 2; i++) {
    var row1 = '<div class="chanel-group" id="id' + i + '"></div>';
    elementWrapper.innerHTML += row1;

    var chanelGroup = elementWrapper.querySelector("#id" + i);

    for (var j = i * 2; j < 2 * i + 2; j++) {
      if (j < data.length) {
        var row2 =
          '<a href="#" class="chanel-item" tabindex="0" data-id="' +
          data[j].id +
          '">' +
          '<div class="img-wrap">' +
          '<img src="' +
          data[j].IMG +
          '" alt="d" />' +
          "</div>" +
          '<p class="chanel-name">' +
          data[j].TEN +
          "</p>" +
          "</a>";
        chanelGroup.innerHTML += row2;
      }
    }
  }
}

// buildTable1(chanelList);
// function buildTable1(data) {
//   var elementWrapper = document.querySelector("#chanel-list-slider");
//   var row1 = '<div class="chanel-group" id="id' + "" + '"></div>';
//   var html = "";
//   for (var i = 0; i < getPartHaft(1).length; i++) {
//     var col =
//       '<a href="#" class="chanel-item" tabindex="0" data-id="' +
//       data[i].id +
//       '">' +
//       '<div class="img-wrap">' +
//       '<img src="' +
//       data[i].IMG +
//       '" alt="d" />' +
//       "</div>" +
//       '<p class="chanel-name">' +
//       data[i].TEN +
//       "</p>" +
//       "</a>";
//     html += col;
//   }
//   for (var i = 0; i < getPartHaft(2).length; i++) {}

//   elementWrapper.innerHTML = html;
// }

var prev = document.querySelector("#carousel-chanel-container .prev");
var next = document.querySelector("#carousel-chanel-container .next");

var track = document.querySelector("#chanel-list-slider");

var carouselWidth = document.querySelector(
  "#carousel-chanel-container"
).offsetWidth;

var menuItemList = document.querySelectorAll(".chanel-item");
var itemSlideWidth = $(".img-wrap").offsetWidth;

window.addEventListener("resize", () => {
  carouselWidth = document.querySelector(
    "#carousel-chanel-container"
  ).offsetWidth;
});
var index = 0;
loopOrderList(index, menuItemList);
var nextFeature = function () {
  track.style.transform = "translateX(-" + (index * itemSlideWidth) / 2 + "px)";
  if (index >= menuItemList.length - 1) {
    // track.style.transform = "translateX(-" + index * itemSlideWidth + "px)";
    index = 0;
  } else index++;
  loopOrderList(index, menuItemList);
  // prev.classList.add("show");

  // if (track.offsetWidth - index * carouselWidth < carouselWidth) {
  //   next.classList.add("hide");
  // }
};
var prevFeature = function () {
  if (index <= 0) {
    index = menuItemList.length - 1;
  } else index--;
  track.style.transform = "translateX(-" + (index * itemSlideWidth) / 2 + "px)";
  loopOrderList(index, menuItemList);
  // next.classList.remove("hide");
  // if (index === 0) {
  //   prev.classList.remove("show");
  // }
};
function loopOrderList(currentIndex, someList) {
  for (var i = 0; i < someList.length; i++) {
    var idItem = someList[i].dataset.id;
    var index = chanelList.findIndex((i) => {
      return i.id == parseInt(idItem);
    });
    // var index = 0
    if (currentIndex == index) {
      someList[i].classList.add("active");
    } else {
      someList[i].classList.remove("active");
    }
  }
}

var objInput = {
  name: 'nasdsdsdsm'
}
var isVisiable = false;


(function reset() {
  if (!isVisiable) {

    objInput.name = ''
  }
  console.log(objInput);
})()

prev.addEventListener("click", prevFeature);
next.addEventListener("click", nextFeature);

// handle keycode remote
var handleKeyCode = function (event) {
  // console.log(event.keyCode);

  switch (event.keyCode) {
    case 10009:
      goBack();
      break;
    // arrow left
    case 37:
      if (!prev.classList.contains("hide")) {
        prevFeature();
      }
      break;
    // arrow right
    case 39:
      if (!next.classList.contains("hide")) {
        nextFeature();
      }
      break;
    default:
      break;
  }
};
window.addEventListener("keydown", handleKeyCode);
// buildTable1();
// function buildTable1() {
//   $.ajax({
//     url: "http://115.78.230.192:59064/api/tivi",
//     type: "GET",
//     dataType: "json",
//     success: function success(data, textStatus, xhr) {
//       var tb1 = document.getElementById("idd1");
//       for (var i = 0; i < data.length / 5; i++) {
//         var row1 = '<div style="display: flex; justify-content: center" id="id' + i + '"></div>';
//         tb1.innerHTML += row1;
//         var tb2 = document.getElementById("id" + i);
//         for (var j = i * 5; j < 5 * i + 5; j++) {
//           if (j < data.length) {
//             var row2 =
//               '<div class="wrap">'
//               +'<div class="img-wrapper">'
//               +  '<img src="assets/' +data[j].image +
//               '" style="width:100%;"/>'
//               +'</div>'
//               +' <p class="stylep" style="font-weight: 600;">' +
//               data[j].name +
//               "</p>" +
//               " </div>";
//             tb2.innerHTML += row2;
//           }
//         }
//       }

//     },
//   });
// }
