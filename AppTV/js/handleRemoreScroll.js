
var defaultPosition = "0-0"; //x-y
var currentX = Number(defaultPosition.split("-")[0]);
var currentY = Number(defaultPosition.split("-")[1]);

// var items = document.querySelectorAll(".item");
var items = document.getElementsByClassName("item");
console.log('item',items);

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
      inline: "center",
    });
  }, 350);
}
function goBack() {
  window.history.back();
}
