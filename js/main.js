var ListOrder = [
  {"STT":"1.","TENMON": "Cơm chiên dương châu","SOLUONG": 2, "GIA":40},
  {"STT":"2.", "TENMON":"Cơm rang dưa bò", "SOLUONG":2, "GIA":60},
  {"STT":"3.", "TENMON":"Cơm chiên trứng", "SOLUONG":1, "GIA":20},
  {"STT":"4.", "TENMON":"Sting", "SOLUONG":3, "GIA":45},
  {"STT":"5.", "TENMON":"Pepsi", "SOLUONG":1, "GIA":15},
  {"STT":"6.", "TENMON":"Nước suối", "SOLUONG":2, "GIA":20},
  {"STT":"7.", "TENMON":"Bánh snack khoai tây", "SOLUONG":1, "GIA":10},
  {"STT":"8.", "TENMON":"Bánh bao hấp", "SOLUONG":2, "GIA":30},
]

buildTable(ListOrder)
function buildTable(data){
  var tb = document.getElementById('myTB')
  for(var i = 0; i < data.length; i++)
  {
    var row = `<tr>
                  <td>${data[i].STT}</td>
                  <td>${data[i].TENMON}</td>
                  <td>${data[i].SOLUONG}</td>
                  <td>${data[i].GIA} k</td>
              </tr>`
        tb.innerHTML+=row
  }
}

updateSubTotal(); // Initial call

function updateSubTotal() {
  var table = document.getElementById("myTB");
  let subTotal = Array.from(table.rows).slice(0).reduce((total, row) => {
    return total + parseInt(row.cells[2].innerHTML);
  }, 0);
  let subTotal2 = Array.from(table.rows).slice(0).reduce((total, row) => {
    return total + parseInt(row.cells[3].innerHTML);
  }, 0);
  document.getElementById("val1").innerHTML = subTotal;
  document.getElementById("val2").innerHTML = subTotal2 +"k";
}

