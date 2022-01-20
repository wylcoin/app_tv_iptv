// var ListOrder = [
//     {"THOIGIAN":"13:00","BENHNHAN": "Lê Vũ Khánh My","GIUONG": "01", "BACSI":"Bs Ths. Nguyễn Dương Tuân"},
//     {"THOIGIAN":"13:30","BENHNHAN": "Huỳnh Thị Phương","GIUONG": "02", "BACSI":"Bs. Phạm Thanh Trúc"},
//     {"THOIGIAN":"14:00","BENHNHAN": "Lê Mỹ Kỳ","GIUONG": "03", "BACSI":"Bs. Phạm Thanh Trúc"},
//     {"THOIGIAN":"14:15","BENHNHAN": "Đỗ Mai Xuân","GIUONG": "04", "BACSI":"Bs. CKI Nguyễn Quý Tâm"},
//     {"THOIGIAN":"14:30","BENHNHAN": "Lê Thị Kim Yến","GIUONG": "05", "BACSI":"Bs. CKI Nguyễn Quý Tâm"},
//     {"THOIGIAN":"15:00","BENHNHAN": "Nguyễn Hoài Thương","GIUONG": "06", "BACSI":"Bs. CKI Nguyễn Quý Tâm"},
//   ]

//   buildTable(ListOrder)
//   function buildTable(data){
//     var tb = document.getElementById('myTB')
//     for(var i = 0; i < data.length; i++)
//     {
//       var row = `<tr onMouseOver="this.bgColor = 'lightcoral'"
//                     onMouseOut ="this.bgColor = ''">
//                     <td >${ListOrder[i].THOIGIAN}</td>
//                     <td >${ListOrder[i].BENHNHAN}</td>
//                     <td >${ListOrder[i].GIUONG}</td>
//                     <td >${ListOrder[i].BACSI}</td>
//                 </tr>
//                 `
//           tb.innerHTML+=row
//     }
//   }
var color = "lightcoral";
buildTable();
function buildTable() {
  $.ajax({
    url: "http://115.78.230.192:59064/api/medicalschedule",
    type: "GET",
    dataType: "json",
    success: function (data, textStatus, xhr) {
      var tb = document.getElementById("myTB");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // var col = '<tr  onmouseover="this.bgColor="'+'"lightcoral"'+'" "onmouseout="this.bgColor="">'
        //       +'<td >'+data[i].time_ms+'</td>'
        //           +'<td >'+data[i].name_patient+'</td>'
        //           +'<td >'+data[i].name_bed+'</td>'
        //          + '<td >'+data[i].name_doctor+'</td>'
        //       +'</tr>'
        // var col = `<tr onmouseover="this.bgColor='lightcoral'" onmouseout="this.bgColor=''">
        //   <td>${data[i].date_ms}</td>
        //   <td>${data[i].name_patient}</td>
        //   <td>${data[i].name_bed}</td>
        //   <td>${data[i].name_doctor}</td>
        //   </tr>`
        var col =
          "<tr onmouseover=\"this.bgColor='lightcoral'\" onmouseout=\"this.bgColor=''\">\n                      <td>" +
          data[i].date_ms +
          "</td>\n                      <td>" +
          data[i].name_patient +
          "</td>\n                      <td>" +
          data[i].name_bed +
          "</td>\n                      <td>" +
          data[i].name_doctor +
          "</td>\n                      </tr>";

        tb.innerHTML += col;

        ("use strict");

        // var col = '<tr onmouseover="this.bgColor='"lightcoral"'" onmouseout="this.bgColor=''">'
        // var col = '<tr onmouseover="this.bgColor='"lightcoral"'" onmouseout="this.bgColor=''">'
        //             +'<td>" + data[i].date_ms + "</td>'
        //             +'<td>" + data[i].name_patient + "</td>   '
        //             +'<td>" + data[i].name_bed + "</td>'
        //             +'<td>" + data[i].name_doctor + "</td>n  '
        //           +'</tr>';
      }
    },
  });
}

$.ajax({
  url: "http://115.78.230.192:59064/api/medicalschedule",
  type: "GET",
  dataType: "json",
  success: function (data, textStatus, xhr) {
    for (var i = 0; i < data.length; i++) {
      var m = new Date(data[i].date_ms);
      // var m = new Date("2021-09-16");
      var current_day = m.getDay() + 1;
      var day_name = "";

      switch (current_day) {
        case 1:
          day_name = "Chủ nhật";
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          day_name = "Thứ " + current_day;
          break;
      }
      var dateString =
        ("0" + m.getUTCDate()).slice(-2) +
        "/" +
        ("0" + (m.getUTCMonth() + 1)).slice(-2) +
        "/" +
        m.getUTCFullYear();

      document.getElementById("val").innerHTML = day_name + ", " + dateString;
      break;
    }
  },
});
