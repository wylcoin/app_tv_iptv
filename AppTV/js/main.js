// var ListOrder = [
//   {"STT":"1.","TENMON": "Cơm chiên dương châu","SOLUONG": 2, "GIA":40},
//   {"STT":"2.", "TENMON":"Cơm rang dưa bò", "SOLUONG":2, "GIA":60},
//   {"STT":"3.", "TENMON":"Cơm chiên trứng", "SOLUONG":1, "GIA":20},
//   {"STT":"4.", "TENMON":"Sting", "SOLUONG":3, "GIA":45},
//   {"STT":"5.", "TENMON":"Pepsi", "SOLUONG":1, "GIA":15},
//   {"STT":"6.", "TENMON":"Nước suối", "SOLUONG":2, "GIA":20},
//   {"STT":"7.", "TENMON":"Bánh snack khoai tây", "SOLUONG":1, "GIA":10},
//   {"STT":"8.", "TENMON":"Bánh bao hấp", "SOLUONG":2, "GIA":30},
// ]

// buildTable(ListOrder)
// function buildTable(data){
//   var tb = document.getElementById('myTB')
//   for(var i = 0; i < data.length; i++)
//   {
//     var row = '<tr onMouseOver="this.bgColor = 'lightcoral'"
//                   onMouseOut ="this.bgColor = ''">
//                   <td >${ListOrder[i].STT}</td>
//                   <td >${ListOrder[i].TENMON}</td>
//                   <td >${ListOrder[i].SOLUONG}</td>
//                   <td >${ListOrder[i].GIA} k</td>
//               </tr>
//               <tr class="more-info">
//                 <td colspan="4" style="background-color: white; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);">
//                   <button class="insertBtn5" >Xóa</button>
//                   <button class="insertBtn6" >Sửa</button>
//                 </td>
//               </tr>
//               '
//         tb.innerHTML+=row
//   }
// }
// $(document).ready(function() {
//   $('tr').click(function() {
//     $(this).next('.more-info').slideToggle('fast');
//   });
// });

// var tosubTotal = 0;
// var subTotal2 = 0;
// for(var i =0;i<ListOrder.length;i++)
// {
//     tosubTotal+=ListOrder[i].SOLUONG
//     subTotal2+=ListOrder[i].GIA
// }
// document.getElementById("val1").innerHTML = String(tosubTotal);
// document.getElementById("val2").innerHTML = String(subTotal2)+"K";

/// Lấy dữ liệu lên table detail
var baseAPi = "http://115.78.230.192:59064/api";
var menuIndex = 0;
var foodIndex = 0;
var menuList = document.querySelectorAll(".insertBtn");
var btnNavs = [
  { label: "Tất cả ", iconUri: "./assets/start_outline.svg", class: "all" },
  { label: "Đồ ăn", iconUri: "./assets/food.svg", class: "food" },
  { label: "Nước", iconUri: "./assets/glass.svg", class: "water" },
  { label: "Bánh", iconUri: "./assets/cake.svg", class: "cake" },
];

function renderMenuNav() {
  var html = "";
  var btnParent = document.querySelector("#menu-list");
  for (let i = 0; i < btnNavs.length; i++) {
    const btn = btnNavs[i];
    var btnTemplateStr = `<button  class="insertBtn item" data-position="${0}-${i}" onclick="myFunction${
      i + 1
    }()">
        <img class="img-menu ${btn.class}" src="${btn.iconUri}" alt="${
      btn.label
    }">
        <label class="lbl">${btn.label}</label>
    </button>`;
    html += btnTemplateStr;
  }
  btnParent.innerHTML = html;
}
var items = document.getElementsByClassName("item");

function handleNextMenuActive() {
  loadMenuActive(menuList);
  if (menuIndex >= menuList.length - 1) {
    menuIndex = 0;
  } else menuIndex++;
}
function handlePrevMenuActive() {
  loadMenuActive(menuList);
  if (menuIndex === 0) {
    menuIndex = menuList.length - 1;
  } else menuIndex--;
}
function menuClicked() {
  for (let i = 0; i < menuList.length; i++) {
    if (menuIndex == i) {
      menuList[i].click();
    }
  }
}

function loadMenuActive(domList) {
  for (let i = 0; i < domList.length; i++) {
    if (menuIndex === i) {
      domList[i].classList.add("active");
    } else domList[i].classList.remove("active");
  }
}

function GetListOrderDetailByID() {
  $.ajax({
    url: baseAPi + "/orderdetail",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      var tb = document.getElementById("myTB");
      var tb3 = "";
      for (var i = 0; i < data.length; i++) {
        var row =
          '<tr value="' +
          data[i].id_food +
          '" class="order-item">' +
          "    <td >" +
          i +
          1 +
          "</td>" +
          "    <td >" +
          data[i].name_food +
          "</td>" +
          "    <td > " +
          data[i].quantity +
          "</td>" +
          "    <td > " +
          data[i].price +
          "</td>" +
          "</tr>" +
          '<tr class="more-info" value="' +
          data[i].id_food +
          '">' +
          '<td colspan="4" style="background-color: white; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);">' +
          '<button class="insertBtn5" onclick="DeleteOrderDetail()">Xóa</button>' +
          '<button class="insertBtn6" id="update' +
          i +
          '">Sửa</button>' +
          "     </td>" +
          "</tr>";
        tb3 += row;
        tb.innerHTML = tb3;
      }
      for (var j = 0; j < data.length; j++) {
        document
          .getElementById("update" + j)
          .addEventListener("click", function onOpen() {
            if (typeof favDialog2.showModal === "function") {
              favDialog2.showModal();
            } else {
              alert("The <dialog> API is not supported by this browser");
            }
          });
      }
    },
  });
}
/// lấy dữ liệu total vs mã phiếu
var idord = 0;

function GetValues() {
  $.ajax({
    url: baseAPi + "/orderdetail",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      $(document).ready(function () {
        $("tr").click(function () {
          $(this).next(".more-info").slideToggle("fast");
        });
      });
      DeleteOrderDetail();
      var tosubTotal = 0;
      var subTotal2 = 0;

      for (var i = 0; i < data.length; i++) {
        tosubTotal += data[i].quantity;
        subTotal2 += data[i].price;
        idord = data[i].id_order;
      }
      document.getElementById("val1").innerHTML = String(tosubTotal);
      document.getElementById("val2").innerHTML = String(subTotal2) + "K";
      document.getElementById("val3").innerHTML = "P" + String(idord);
      loadItemActive();
    },
  });
}
// insert dữ chọn món vào table detail
var text = "";
// function getIDfood(ctrl) {
//   text = ctrl.getElementsByTagName("p")[0].innerHTML;
// }
function setIDfood(element) {
  console.log(element.dataset.id);
  text =  element.dataset.id
}
function insertOrderDetail() {
  var data = {
    id_food: parseInt(text),
    id_order: parseInt(idord),
    quantity: parseInt($("#sl").val()),
  };
  console.log(data);
  $.ajax({
    url: baseAPi + "/orderdetail",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    contentType: "application/json; charset=utf-8",
    type: "POST",
    data: JSON.stringify(data),
    success: function (result) {
      //  console.log('success' + result);
      GetListOrderDetailByID();
      GetValues();
    },
  });
}

// xóa món trên bảng table detail
var idfood_d = "";
$(".table").on("click", "tr", function (e) {
  e.preventDefault();
  idfood_d = $(this).attr("value");
  // console.log('id food: ',idfood_d);
});

function DeleteOrderDetail() {
  var data1 = {
    id_food: parseInt(idfood_d),
    id_order: parseInt(idord),
  };
  // console.log(data1);
  $.ajax({
    url: baseAPi + "/orderdetail",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    contentType: "application/json; charset=utf-8",
    type: "DELETE",
    data: JSON.stringify(data1),
    success: function (result) {
      console.log("success" + result);
      GetListOrderDetailByID();
      GetValues();
    },
  });
}

// cập nhật số lượng trên table detail

function UpdateOrderDetail() {
  var data2 = {
    id_food: parseInt(idfood_d),
    id_order: parseInt(idord),
    quantity: parseInt($("#slud").val()),
  };

  $.ajax({
    url: baseAPi + "/orderdetail",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    contentType: "application/json; charset=utf-8",
    type: "PUT",
    data: JSON.stringify(data2),
    success: function (result) {
      console.log("success" + result);
      GetListOrderDetailByID();
      GetValues();
    },
  });
}
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
// get list food and drink
// function getData() {
//   $.ajax({
//     url: baseAPi+"/order",
//     type: "GET",
//     dataType: "json",
//     success: function (data, textStatus, xhr) {
//       var tb1 = document.getElementById("foodDrinkList");
//       for (var i = 0; i < data.length / 4; i++) {
//         var row1 = '<div style="display: flex;" id="id' + i + '"></div>';
//         tb1.innerHTML += row1;

//         var tb2 = document.getElementById("id" + i);
//         for (var j = i * 4; j < 4 * i + 4; j++) {
//           if (j < data.length) {
//             var row2 =
//               '<div class="wrap" id="updateDetails' +
//               j +
//               '" onclick="setIDfood(this)">' +
//               '<p style="display:none">' +
//               data[j].id +
//               "</p>" +
//               '<img src="assets/' +
//               data[j].image +
//               '" alt="Snow" style="width:100%;margin-bottom: 5px;"/>' +
//               '<label class="lbl">' +
//               data[j].price +
//               "K</label>" +
//               '<span style="margin: 15px; font-weight: 600;">' +
//               data[j].name +
//               "</span>" +
//               "</div>";
//             tb2.innerHTML += row2;
//           }
//         }
//       }

//       for (var l = 0; l < data.length; l++) {
//         document
//           .getElementById("updateDetails" + l)
//           .addEventListener("click", function onOpen() {
//             if (typeof favDialog.showModal === "function") {
//               favDialog.showModal();
//             } else {
//               alert("The <dialog> API is not supported by this browser");
//             }
//           });
//       }
//     },
//   });
// }

function innerList(data) {
  var tb1 = document.getElementById("foodDrinkList");

  var html = "";
  var x = 1;
  var y = 0;
  var newCol = false;
  for (let i = 0; i < data.length; i++) {
    var row2 =
      '<div class=" col-lg-3 col-xxl-3 wrap item food-item" onclick="setIDfood(this);onOpen()" data-id="'+data[i].id+'" id="updateDetails' +
      i +
      '" data-position="' +
      x +
      "-" +
      y +
      '">' +
      '<div class="food-wrap">' +
      '<p style="display:none">' +
      data[i].id +
      "</p>" +
      '<div class="img-wrap">' +
      '<img  src="assets/' +
      data[i].image +
      '" alt="Snow" style=""/>' +
      "</div>" +
      '<label class="lbl">' +
      data[i].price +
      "K</label>" +
      '<div class="label-food">' +
      "<p>" +
      data[i].name +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
    if (x >= 4) {
      x = 1;
      newCol = true;
    } else {
      x++;
      newCol = false;
    }
    if (newCol === true) {
      y++;
    }
    html += row2;
  }
  tb1.innerHTML = html;
}
function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
}
function getData() {
  $.ajax({
    url: baseAPi + "/order",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      innerList(data);
    },
  });
}

//===========================================================================================================
//===========================================================================================================

function myFunction1() {
  $.ajax({
    url: baseAPi + "/order",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      innerList(data);
    },
  });
}

//===========================================================================================================
//===========================================================================================================
var ages2 = [];

$.ajax({
  url: baseAPi + "/order",
  type: "GET",
  dataType: "json",
  success: function (data, textStatus, xhr) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id_category == "4") {
        var element = {};
        element.ID = data[i].id;
        element.IMG = data[i].image;
        element.TENMON = data[i].name;
        element.GIA = data[i].price;
        ages2.push(element);
      }
    }
  },
});

//
function myFunction2() {
  $.ajax({
    url: baseAPi + "/order",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      var foods = data.filter(function (item) {
        return item.id_category == "4";
      });
      // console.log(foods);
      innerList(foods);
    },
  });
}

//===========================================================================================================
//===========================================================================================================

function myFunction3() {
  $.ajax({
    url: baseAPi + "/order",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      var foods = data.filter(function (item) {
        return item.id_category == "5";
      });
      // console.log(foods);
      innerList(foods);
    },
  });
}

//===========================================================================================================
//===========================================================================================================

function myFunction4() {
  $.ajax({
    url: baseAPi + "/order",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      var foods = data.filter(function (item) {
        return item.id_category == "6";
      });
      // console.log(foods);
      innerList(foods);
    },
  });
}

document.getElementById("btnXN").addEventListener("click", function onOpen() {
  if (typeof favDialog1.showModal === "function") {
    favDialog1.showModal();
    setTimeout(function () {
      favDialog1.close(); //favDialog.open = false
    }, 2000);
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
var imgWrapBtn = document.querySelector(".img-wrap");

imgWrapBtn.addEventListener("click", goBack);
function goBack() {
  window.history.back();
}

// handle remore

var defaultPosition = "0-0"; //x-y
var currentX = Number(defaultPosition.split("-")[0]);
var currentY = Number(defaultPosition.split("-")[1]);

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
  var result = positions.indexOf(location);

  if (result === -1) {
    return false;
  }
  return true;
}
function handlePosition(num, axis, key) {
  if(key == 39 && currentY > 0) {
    currentY = 0
  }

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

// var listScrolled = "";
function handleRemoteKey(e) {
  switch (e.keyCode) {
    case 13:
      // enter/ok
      for (const node of items) {
        const locationItem = node.dataset.position;


        if (locationItem === defaultPosition) {
          node.click();
          // console.log("im here ", node);
        }
      }
      break;
    case 39:
      // arrow right
      handlePosition(1, "x", 39);

      // handleNextMenuActive();
      break;
    case 40:
      //   "y++"
      handlePosition(1, "y");
      break;
    case 37:
      // arrow left
      //   "x--"
      handlePosition(-1, "x");
      // handlePrevMenuActive();
      break;
    case 38:
      //   "y--"

      handlePosition(-1, "y");
      break;
    case 10009:
      window.history.back();
      // alert("return click");
      break;
    case 10252: //node next: switch
      break;
    default:
      break;
  }
}

function render() {
  renderMenuNav();
  GetListOrderDetailByID();
  GetValues();
}
render();
