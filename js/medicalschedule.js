var ListOrder = [
    {"THOIGIAN":"13:00","BENHNHAN": "Lê Vũ Khánh My","GIUONG": "01", "BACSI":"Bs Ths. Nguyễn Dương Tuân"},
    {"THOIGIAN":"13:30","BENHNHAN": "Huỳnh Thị Phương","GIUONG": "02", "BACSI":"Bs. Phạm Thanh Trúc"},
    {"THOIGIAN":"14:00","BENHNHAN": "Lê Mỹ Kỳ","GIUONG": "03", "BACSI":"Bs. Phạm Thanh Trúc"},
    {"THOIGIAN":"14:15","BENHNHAN": "Đỗ Mai Xuân","GIUONG": "04", "BACSI":"Bs. CKI Nguyễn Quý Tâm"},
    {"THOIGIAN":"14:30","BENHNHAN": "Lê Thị Kim Yến","GIUONG": "05", "BACSI":"Bs. CKI Nguyễn Quý Tâm"},
    {"THOIGIAN":"15:00","BENHNHAN": "Nguyễn Hoài Thương","GIUONG": "06", "BACSI":"Bs. CKI Nguyễn Quý Tâm"},
  ]
  
  buildTable(ListOrder)
  function buildTable(data){
    var tb = document.getElementById('myTB')
    for(var i = 0; i < data.length; i++)
    {
      var row = `<tr onMouseOver="this.bgColor = 'lightcoral'"
                    onMouseOut ="this.bgColor = ''">
                    <td >${ListOrder[i].THOIGIAN}</td>
                    <td >${ListOrder[i].BENHNHAN}</td>
                    <td >${ListOrder[i].GIUONG}</td>
                    <td >${ListOrder[i].BACSI}</td>
                </tr>
                `
          tb.innerHTML+=row
    }
  }