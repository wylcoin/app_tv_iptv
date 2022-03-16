// var inf = [
//     {"IMG":"assets/PhamVanBung.png", "TEN":"Ts. Bs. CKII Phạm Văn Bùng", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/NguyenMinhHung.png", "TEN":"Ts. Bs. Nguyễn Minh Hùng", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/LeVanHoai.png", "TEN":"Bs. CKII Lê Văn Hoài", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/PhanThiDieuHien.png", "TEN":"Bs. CKI Phan Thị Diệu Hiền", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/PhanHoaiBao.png", "TEN":"Ts. Bs. CKII Phan Hoài Bảo", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/DangVanLam.png", "TEN":"Ts. Bs. CKII Đặng Văn Lâm", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/DaoThiChauAnh.png", "TEN":"Ts. Bs. CKII Đào Thị Châu Anh", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/PhamVanTien.png", "TEN":"Ts. Bs. CKII Phạm Văn Tiến", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/PhanThiDieuHien.png", "TEN":"Bs. CKI Phan Thị Diệu Hiền", "KHOA":"Khoa ung bướu"},
//     {"IMG":"assets/PhanHoaiBao.png", "TEN":"Ts. Bs. CKII Phan Hoài Bảo", "KHOA":"Khoa ung bướu"}
//   ];


//   buildTable1(inf)
//   function buildTable1(data){
//     var tb1 = document.getElementById('idd1')
//     for(var i = 0; i < data.length/5; i++)
//     {
//         var row1 = `<div style="display: flex;" id="id${i}"></div>`
//         tb1.innerHTML+=row1       
        
//         var tb2 = document.getElementById('id'+i)
//         for(var j =i*5; j < 5*i+5; j++)
//         {
//           if(j<data.length)
//           {
//             var row2 = `<div class="wrap">
//                             <img src="${data[j].IMG}" style="width:100%;"/>  
//                             <p class="stylep" style="font-weight: 600;">${data[j].TEN}</p>                       
//                             <p class="stylep" style="color:gray">${data[j].KHOA}</p>  
//                         </div>`
//                 tb2.innerHTML+=row2
//           } 
//         }
//     }
//   }





var items
buildTable1()
function buildTable1(){
    $.ajax({
      url: 'http://115.78.230.192:59064/api/doctor',
      type: 'GET',
      dataType: 'json',
      success: function (data, textStatus, xhr) {
        var tb1 = document.getElementById('doctor-list')
        for(var i = 0; i < data.length/5; i++)
        {
            var row1 = '<ul class="item-group" style="display: flex;" id="id'+i+'"></ul>'
            tb1.innerHTML+=row1       
            
            var tb2 = document.getElementById('id'+i)
            var x = 0;

            for(var j =i*5; j < 5*i+5; j++)
            {
              if(j<data.length)
              {
                var row2 = '<li class="wrap item"'+'data-position="'+x+'-'+i+'"'+'>'
                                +'<img src="assets/'+data[j].image+'" style="width:100%;"/>'  
                                +'<p class="stylep" style="font-weight: 600;">'+data[j].name+'</p>'                       
                                +'<p class="stylep" style="color:gray">'+data[j].dname+'</p>'  
                            +'</li>'
                            x++
                    tb2.innerHTML+=row2
              } 
            }
        }      
        // async... fix is in 1st load
        items  = document.querySelectorAll('.item')
        loadItemActive();
      },
  });  
}

var defaultPosition = "0-0"; //x-y
var currentX = Number(defaultPosition.split("-")[0]);
var currentY = Number(defaultPosition.split("-")[1]);

// var items =  document.getElementsByClassName('item')



function loadItemActive() {
  for (var element of items) {
    var pos = element.dataset.position;
    console.log(element);
    if (pos === defaultPosition) {
      element.classList.add("active");
    } else element.classList.remove("active");
  }
}

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
  // console.log(e.keyCode);
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
      // case 10009: 
      // goBack()
      // break;
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