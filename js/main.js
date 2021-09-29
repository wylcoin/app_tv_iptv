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
//     var row = `<tr onMouseOver="this.bgColor = 'lightcoral'"
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
//               `
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


buildTable()
        function buildTable(){
            $.ajax({
                url: 'http://127.0.0.1:50005/api/orderdetail',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    var tb = document.getElementById('myTB')
                    for(var i = 0; i < data.length; i++)
                    {
                        var row = `<tr onMouseOver="this.bgColor = 'lightcoral'"
                                    onMouseOut ="this.bgColor = ''">
                                    <td >${i+1}.</td>
                                    <td >${data[i].name_food}</td>
                                    <td >${data[i].quantity}</td>
                                    <td >${data[i].price} k</td>
                                </tr>
                                <tr class="more-info">
                                    <td colspan="4" style="background-color: white; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);">
                                    <button class="insertBtn5" >Xóa</button>
                                    <button class="insertBtn6" >Sửa</button>
                                    </td>
                                </tr>
                                `
                            tb.innerHTML+=row
                    }
                },
            });   
        }


        

        $.ajax({
                url: 'http://127.0.0.1:50005/api/orderdetail',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {

                    $(document).ready(function() {
                    $('tr').click(function() {
                        $(this).next('.more-info').slideToggle('fast');
                    });
                    });
                    
                    var tosubTotal = 0;
                    var subTotal2 = 0;
                    for(var i = 0; i < data.length; i++)
                    {
                        tosubTotal+=data[i].quantity
                        subTotal2+=data[i].price
                    }
                    document.getElementById("val1").innerHTML = String(tosubTotal);
                    document.getElementById("val2").innerHTML = String(subTotal2)+"K";
                },
            });
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
//===========================================================================================================
        getData()
        function getData() {
            $.ajax({
                url: 'http://127.0.0.1:50005/api/order',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    var tb1 = document.getElementById('idd1')
                    for(var i = 0; i < data.length/4; i++)
                    {
                        var row1 = `<div style="display: flex;" id="id${i}"></div>`
                        tb1.innerHTML+=row1       
                        
                        var tb2 = document.getElementById('id'+i)
                        for(var j =i*4; j < 4*i+4; j++)
                        {
                            if(j<data.length)
                            {
                            var row2 = `<div class="wrap" id="updateDetails${j}">
                                            <img src="assets/${data[j].image}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                                            <label class="lbl">${data[j].price}K</label></label>
                                            <span style="margin: 15px; font-weight: 600;">${data[j].name}</span>  
                                        </div>`
                                tb2.innerHTML+=row2
                            } 
                        }
                    }

                    for(var l = 0; l < data.length; l++)
                    {
                        document.getElementById('updateDetails'+l).addEventListener('click', function onOpen() {
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


//===========================================================================================================
//===========================================================================================================

  function myFunction1() {
    $.ajax({
                url: 'http://127.0.0.1:50005/api/order',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    var x =document.getElementById("idd1")
                    var xx=`<img src="assets/bvhd.png" style="padding: 5px 0 0 20px; width: 140px;height: 56px;"> `;
                    for(var i = 0; i < data.length/4; i++)
                    {
                        var row1 = `<div style="display: flex;" id="id${i}"></div>`
                        xx+=row1   
                        x.innerHTML=xx;    
                    }
                
                    for(var k = 0; k < data.length/4; k++)
                    {
                        var tb2 = document.getElementById('id'+k)
                        var tb3 ="";
                        for(var j =k*4; j < 4*k+4; j++)
                        {
                        if(j<data.length)
                        {
                            var row2 = `<div class="wrap" id="updateDetails${j}">
                                        <img src="assets/${data[j].image}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                                        <label class="lbl">${data[j].price}K</label></label>
                                        <span style="margin: 15px; font-weight: 600;">${data[j].name}</span>  
                                    </div>`
                                tb3+=row2
                                tb2.innerHTML=tb3 
                        }     
                        }  
                    } 
                    for(var l = 0; l < data.length; l++)
                    {
                    document.getElementById('updateDetails'+l).addEventListener('click', function onOpen() {
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

//===========================================================================================================
//===========================================================================================================
  var ages2 = [];
  
  $.ajax({
            url: 'http://127.0.0.1:50005/api/order',
            type: 'GET',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                for(var i = 0; i < data.length; i++)
                {
                    if(data[i].id_category=="4")
                    {
                        var element = {};
                        element.IMG = data[i].image;
                        element.TENMON = data[i].name;
                        element.GIA = data[i].price;
                        ages2.push(element);
                    }     
                }   
            },
        });
  

function myFunction2() {
    var x =document.getElementById("idd1")
    var xx=`<img src="assets/bvhd.png" style="padding: 5px 0 0 20px; width: 140px;height: 56px;"> `;
    for(var i = 0; i < ages2.length/4; i++)
    {
        var row1 = `<div style="display: flex;" id="id${i}"></div>`
        xx+=row1   
        x.innerHTML=xx;    
    }

    for(var k = 0; k < ages2.length/4; k++)
    {
        var tb2 = document.getElementById('id'+k)
        var tb3 ="";
        for(var j =k*4; j < 4*k+4; j++)
        {
          if(j<ages2.length)
          {    
            var row2 = `<div class="wrap" id="updateDetails${j}">
                          <img src="assets/${ages2[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                          <label class="lbl">${ages2[j].GIA}K</label></label>
                          <span style="margin: 15px; font-weight: 600;">${ages2[j].TENMON}</span>  
                      </div>`
                tb3+=row2
                tb2.innerHTML=tb3       
          }       
        }     
    } 
    for(var l = 0; l < ages2.length; l++)
    {
      document.getElementById('updateDetails'+l).addEventListener('click', function onOpen() {
        if (typeof favDialog.showModal === "function") {
          favDialog.showModal();
        } else {
          alert("The <dialog> API is not supported by this browser");
        }
      });
    }
}

//===========================================================================================================
//===========================================================================================================
var ages3 = [];
          
$.ajax({
            url: 'http://127.0.0.1:50005/api/order',
            type: 'GET',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                for(var i = 0; i < data.length; i++)
                {
                    if(data[i].id_category=="5")
                    {
                        var element = {};
                        element.IMG = data[i].image;
                        element.TENMON = data[i].name;
                        element.GIA = data[i].price;
                        ages3.push(element);
                    }     
                }   
            },
        });  

function myFunction3() {
  var x =document.getElementById("idd1")
  var xx=`<img src="assets/bvhd.png" style="padding: 5px 0 0 20px; width: 140px;height: 56px;"> `;
  for(var i = 0; i < ages3.length/4; i++)
  {
      var row1 = `<div style="display: flex;" id="id${i}"></div>`
      xx+=row1   
      x.innerHTML=xx;    
  }

  for(var k = 0; k < ages3.length/4; k++)
  {
      var tb2 = document.getElementById('id'+k)
      var tb3 ="";
      for(var j =k*4; j < 4*k+4; j++)
      {
        if(j<ages3.length)
        {
          var row2 = `<div class="wrap" id="updateDetails${j}">
                        <img src="assets/${ages3[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                        <label class="lbl">${ages3[j].GIA}K</label></label>
                        <span style="margin: 15px; font-weight: 600;">${ages3[j].TENMON}</span>  
                    </div>`
              tb3+=row2
              tb2.innerHTML=tb3
        }            
      }    
  } 
  for(var l = 0; l < ages3.length; l++)
  {
    document.getElementById('updateDetails'+l).addEventListener('click', function onOpen() {
      if (typeof favDialog.showModal === "function") {
        favDialog.showModal();
      } else {
        alert("The <dialog> API is not supported by this browser");
      }
    });
  }
}

//===========================================================================================================
//===========================================================================================================
var ages4 = [];
          
$.ajax({
            url: 'http://127.0.0.1:50005/api/order',
            type: 'GET',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                for(var i = 0; i < data.length; i++)
                {
                    if(data[i].id_category=="6")
                    {
                        var element = {};
                        element.IMG = data[i].image;
                        element.TENMON = data[i].name;
                        element.GIA = data[i].price;
                        ages4.push(element);
                    }     
                }   
            },
        });   

function myFunction4() {
  var x =document.getElementById("idd1")
  var xx=`<img src="assets/bvhd.png" style="padding: 5px 0 0 20px; width: 140px;height: 56px;"> `;
  for(var i = 0; i < ages4.length/4; i++)
  {
      var row1 = `<div style="display: flex;" id="id${i}"></div>`
      xx+=row1   
      x.innerHTML=xx;    
  }

  for(var k = 0; k < ages4.length/4; k++)
  {
      var tb2 = document.getElementById('id'+k)
      var tb3 ="";
      for(var j =k*4; j < 4*k+4; j++)
      {
        if(j<ages4.length)
        {
          var row2 = `<div class="wrap" id="updateDetails${j}">
                        <img src="assets/${ages4[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                        <label class="lbl">${ages4[j].GIA}K</label></label>
                        <span style="margin: 15px; font-weight: 600;">${ages4[j].TENMON}</span>
                    </div>`
              tb3+=row2
              tb2.innerHTML=tb3 
        }        
      }  
  } 
  for(var l = 0; l < ages4.length; l++)
  {
    document.getElementById('updateDetails'+l).addEventListener('click', function onOpen() {
      if (typeof favDialog.showModal === "function") {
        favDialog.showModal();
      } else {
        alert("The <dialog> API is not supported by this browser");
      }
    });
  }
}

document.getElementById('btnXN').addEventListener('click', function onOpen() {
  if (typeof favDialog1.showModal === "function") {
    favDialog1.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});