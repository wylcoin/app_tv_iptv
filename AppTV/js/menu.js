var ListOrder = [
  { IMG: "assets/Introduce.png", TEN: "Giới thiệu" },
  { IMG: "assets/WatchTV.png", TEN: "Xem tivi" },
  { IMG: "assets/WatchFilm.png", TEN: "Xem phim" },
  { IMG: "assets/ListDoctor.png", TEN: "Danh sách bác sĩ" },
  { IMG: "assets/MedicalSchedule.png", TEN: "Lịch khám" },
  { IMG: "assets/Order.png", TEN: "Gọi món" },
  { IMG: "assets/Rules.png", TEN: "Nội quy" },
  { IMG: "assets/Restaurants.png", TEN: "Nhà Hàng" },
  { IMG: "assets/HandBook.png", TEN: "Cẩm nang" },
  { IMG: "assets/Evaluate.png", TEN: "Đánh giá" },
];

buildTable(ListOrder);
function buildTable(data) {
  var tb = document.getElementById("MyTB1");
  var rows = [];
  for (var i = 0; i < data.length; i++) {
    var hrefValue = "";

    switch (data[i].TEN) {
      case "Giới thiệu":
        hrefValue = "./introduce.html";
        break;
      case "Xem tivi":
        hrefValue = "./watchtivi.html";
        break;
      case "Xem phim":
        hrefValue = "./watchfilm.html";
        break;
      case "Danh sách bác sĩ":
        hrefValue = "./listdoctor.html";
        break;
      case "Lịch khám":
        hrefValue = "./medicalschedule.html";
        break;
      case "Gọi món":
        hrefValue = "./orderapp.html";
        break;
      case "Nội quy":
        hrefValue = "./rules.html";
        break;
      case "Nhà Hàng":
        hrefValue = "./restaurant.html";
        break;
      case "Cẩm nang":
        hrefValue = "./handbook.html";
        break;
      case "Đánh giá":
        hrefValue = "#";
        break;
      default:
        hrefValue = "#";
        break;
    }
    var row =
      '<a class="wrap menu-item" data-index="' +
      i +
      '" tabindex="0" href="' +
      hrefValue +
      '" >' +
      '<img src="' +
      data[i].IMG +
      '"/>' +
      '<h2 class="lblTitle">' +
      data[i].TEN +
      "</h2>" +
      "</a>";
    rows.push(row);
  }
  tb.innerHTML = rows.join("");
}

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var track = document.querySelector(".track");
var itemSlideWidth = document.querySelector(".wrap").offsetWidth;
var menuItemList = document.querySelectorAll(".menu-item");
var slideWidth = document.querySelector(".carousel-inner").offsetWidth;

var hrefCurrent = window.location.href

// var carouselWidth = document.querySelector(".carousel-container").offsetWidth;

// window.addEventListener("resize", () => {
//   carouselWidth = document.querySelector(".carousel-container").offsetWidth;
// });
// window.addEventListener("resize", function() {
//   itemSlideWidth = itemSlideWidth
// })
var index = 0;
loopOrderList(index, menuItemList);
var nextFeature = function () {
  if (index >= menuItemList.length - 1) {
    index = 0;
  } else index++;
  track.style.transform = "translateX(-" + index * itemSlideWidth + "px)";
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
  track.style.transform = "translateX(-" + index * itemSlideWidth + "px)";
  loopOrderList(index, menuItemList);
  // next.classList.remove("hide");
  // if (index === 0) {
  //   prev.classList.remove("show");
  // }
};
prev.addEventListener("click", prevFeature);
next.addEventListener("click", nextFeature);
// listen when arrow left/right is clicked on remote
document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37: //arrow left
      if (!prev.classList.contains("hide")) {
        prevFeature();
      }
      break;
    case 39: //arrow right
      if (!next.classList.contains("hide")) {
        nextFeature();
      }
      break;
    case 13:
      for (let i = 0; i < menuItemList.length; i++) {
        if (index == i) {
          console.log("item clicked: ", menuItemList[i]);
          var href = [menuItemList[i].href]
          callback(true, href)
        }
      }
    default:
      break;
  }
});

function loopOrderList(currentIndex, someList) {
  for (let i = 0; i < someList.length; i++) {
    var index = someList[i].dataset.index;
    if (currentIndex == index) {
      someList[i].classList.add("active");
    } else {
      someList[i].classList.remove("active");
    }
  }
}

function callback(ste,href) {
      window.location.href=href
//or put your url into var and put it there
}

//===================================================================================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
var ListOrder1 = [
  { IMG: "assets/TT1.png" },
  { IMG: "assets/BVHD1.png" },
  { IMG: "assets/TT2.png" },
];

buildTable1(ListOrder1);
function buildTable1(data) {
  var tb = document.getElementById("sli");
  for (var i = 0; i < data.length; i++) {
    var row =
      '<div class="slidee ra">' +
      '<img src="' +
      data[i].IMG +
      '" style="width: 100%; height: 100%; border-radius:16px"/>' +
      "</a>" +
      "</div>";
    tb.innerHTML += row;
  }

  var nut = document.getElementById("bt");
  for (var j = 0; j < data.length; j++) {
    var row = "<li></li>";
    nut.innerHTML += row;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var nut = document.querySelectorAll("div.nut ul li");
  var slides = document.querySelectorAll("div.slide div");
  for (var i = 0; i < nut.length; i++) {
    nut[i].addEventListener("click", function () {
      var nutnay = this;
      var vitrislide = 0;
      console.log(nutnay.previousElementSibling);
      for (var i = 0; (nutnay = nutnay.previousElementSibling); vitrislide++) {
        //chay den khi nut nay  = null thi dung.
        // chay xong lenh nay khi click vao nut ta lay dc vitrislide
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ra");
      }
      for (var i = 0; i < slides.length; i++) {
        slides[vitrislide].classList.add("ra");
      }
    });
  }
  // Click chuyen slide

  auto();
  function auto() {
    setInterval(function () {
      var slide = document.querySelector("div.slide div.ra");
      var vitrislide = 0;
      for (var i = 0; (slide = slide.previousElementSibling); vitrislide++) {}
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ra"); // remove hết những thằng đang có class 'ra'
      }
      if (vitrislide == slides.length - 1) {
        slides[0].classList.add("ra");
        // Thằng này có nghĩa là sau khi tự động chuyển đến slide cuối cùng nó quay lại thằng 0
      } else {
        slides[vitrislide].nextElementSibling.classList.add("ra");
        // Đây là then chốt của auto slide nó sẽ chuyển sang cái thằng tiếp theo.
      }
    }, 30000);
  }
});
