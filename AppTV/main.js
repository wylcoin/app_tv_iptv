function goBack() {
    window.history.back();
}
window.addEventListener('keydown', handleKeyCode);

// var index = 0
// var nextFeature = function (prevBtnElement, nextBtnElement, containItemElement,carouselWidth) {
//   index++;
//   prevBtnElement.classList.add("show");
//   containItemElement.style.transform = "translateX(-" + index * carouselWidth + "px)";

//   if (track.offsetWidth - index * carouselWidth < carouselWidth) {
//     nextBtnElement.classList.add("hide");
//   }
// };
// var prevFeature = function(prevBtnElement, nextBtnElement, containItemElement,carouselWidth) {
//   index--;
//   nextBtnElement.classList.remove("hide");
//   if (index === 0) {
//     prevBtnElement.classList.remove("show");
//   }
//   containItemElement.style.transform = "translateX(-" + index * carouselWidth + "px)";
// }



// handle keycode remote
var handleKeyCode = function(event) {
  switch (event.keyCode) {
    case 10009:
      goBack();
      break;
  
    default:
      console.log(event.keyCode);
      break;
  }
};
// module.exports.handleKeyCode = handleKeyCode;