// var handleKeyCode = require('../main.js');

const chanelList = [
  {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
  {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
  {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
  {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
  {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},

  {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
  {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
  {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
  {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
  {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
  {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
  {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
  {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
  {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
  {"IMG":"assets/Disney.png", "TEN":"Disney"},
];

buildTable1(chanelList)
function buildTable1(data){
  var elementWrapper = document.querySelector('#chanel-list-slider')
  for(var i = 0; i < data.length/2; i++)
  {
      var row1 = '<div class="chanel-group" id="id' + i +'"></div>'
      elementWrapper.innerHTML+=row1

      var chanelGroup = elementWrapper.querySelector('#id'+i)
      
      for(var j =i*2; j < 2*i+2; j++){
        if(j<data.length)
        {
          var row2 =
          '<div class="chanel-item">'
            +'<div class="img-wrap">'
              +'<img src="'+data[j].IMG+'" alt="d" />'
            +'</div>'
            +'<p class="chanel-name">'+data[j].TEN+'</p>'
          +'</div>';         
          chanelGroup.innerHTML+=row2
        }
      }
  }
}

var prev = document.querySelector("#carousel-chanel-container .prev");
var next = document.querySelector("#carousel-chanel-container .next");

var track = document.querySelector("#chanel-list-slider");

var carouselWidth = document.querySelector("#carousel-chanel-container").offsetWidth;

window.addEventListener("resize", () => {
  carouselWidth = document.querySelector("#carousel-chanel-container").offsetWidth;
});
var index = 0;
var nextFeature = function () {
  index++;
  prev.classList.add("show");
  track.style.transform = "translateX(-" + index * carouselWidth + "px)";

  if (track.offsetWidth - index * carouselWidth < carouselWidth) {
    next.classList.add("hide");
  }
};
var prevFeature = function() {
  index--;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(-" + index * carouselWidth + "px)";
}

prev.addEventListener("click", prevFeature);
next.addEventListener("click", nextFeature);


// handle keycode remote
var handleKeyCode = function(event) {
  switch (event.keyCode) {
    case 10009:
      goBack();
      break;
      // arrow left
    case 37:
      if(!prev.classList.contains("hide")) {
        prevFeature()
      }
      break;
      // arrow right
    case 39:
      if(!next.classList.contains("hide")) {
        nextFeature()
      }
      break;
    default:
      console.log(event.keyCode);
      break;
  }
};
window.addEventListener('keydown', handleKeyCode);
// buildTable1();
// function buildTable1() {
//   $.ajax({
//     url: "http://115.78.230.192:59025/api/tivi",
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
