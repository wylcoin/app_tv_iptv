function getData() {
    $.ajax({
        url: 'http://192.168.1.243:50005/api/order',
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            var tb1 = document.getElementById('idd1')
            for (var i = 0; i < data.length / 4; i++) {
                var row1 = '<div style="display: flex;" id="id${i}"></div>'
                tb1.innerHTML += row1

                var tb2 = document.getElementById('id' + i)
                for (var j = i * 4; j < 4 * i + 4; j++) {
                    if (j < data.length) {
                        var row2 = '<div class="wrap" id="updateDetails' + j + '" " onclick="getIDfood(this)">'
                        row2 += '<p style="display:none">${data[j].id}</p>'
                        row2 += ' <img src="assets/${data[j].image}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>'
                        row2 += ' <label class="lbl">${data[j].price}K</label></label>'
                        row2 += '<span style="margin: 15px; font-weight: 600;">${data[j].name}</span>'
                        row2 += '</div>'
                        tb2.innerHTML += row2
                    }
                }
            }

            for (var l = 0; l < data.length; l++) {
                document.getElementById('updateDetails' + l).addEventListener('click', function onOpen() {
                    if (typeof favDialog.showModal === "function") {
                        favDialog.showModal();
                    } else {
                        alert("The <dialog> API is not supported by this browser");
                    }
                });
            }
        },
    });
}

function GetListOrderDetailByID() {
    $.ajax({
        url: 'http://192.168.1.243:50005/api/orderdetail',
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            var tb = document.getElementById('myTB')
            var tb3 = "";
            for (var i = 0; i < data.length; i++) {
                var row = '<tr value="${data[i].id_food}>'
                row += '    <td >' + i + 1 + '</td>'
                row += '<td >' + data[i].name_food + '</td>'
                row += '        <td > ' + data[i].quantity + '</td>'
                row += '      <td > ' + data[i].price + '</td>'
                row += ' </tr>'
                row += '       <tr class="more-info" value="${data[i].id_food}">'
                row += '        <td colspan="4" style="background-color: white; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);">'
                row += '         <button class="insertBtn5" onclick="DeleteOrderDetail()">Xóa</button>'
                row += '          <button class="insertBtn6" id="update${i}">Sửa</button>'
                row += '          </td>'
                row += '     </tr>'
                tb3 += row
                tb.innerHTML = tb3
            }
            for (var j = 0; j < data.length; j++) {
                document.getElementById('update' + j).addEventListener('click', function onOpen() {
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

