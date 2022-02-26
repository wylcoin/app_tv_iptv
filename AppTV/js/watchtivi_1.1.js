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

var list = document.querySelector("#list-tv");
var html = "";

for (let i = 0; i < chanelList.length / 10; i++) {
  var rows = '<li class="item-group"> </li>';
  list.innerHTML += rows;

  var rowsElement = document.querySelectorAll(".item-group");
  var x = 0;
  for (let j = i * 10; j < 10 * i + 10; j++) {
    if (j < chanelList.length) {
      const item = chanelList[j];
      // var row = `<a class="item" href="#" data-position="${x}-${i}"><img src="${item.IMG}"  alt="${item.TEN}"></a>`;
      var row =
        '<a href="#" class="chanel-item item" data-position="' +
        x +
        "-" +
        i +
        '">' +
        '<div class="img-wrap">' +
        '<img src="' +
        item.IMG +
        '" alt="d" />' +
        "</div>" +
        '<p class="chanel-name">' +
        item.TEN +
        "</p>" +
        "</a>";

      x++;
      rowsElement[i].innerHTML += row;
    }
  }
  html += rows;
}

var defaultPosition = "0-0"; //x-y
var currentX = Number(defaultPosition.split("-")[0]);
var currentY = Number(defaultPosition.split("-")[1]);

var items = document.querySelectorAll(".item");
console.log(items);

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
