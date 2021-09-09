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

updateSubTotal(); 

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



const ages1 = [
    {"IMG":"assets/ComChienTrung.png", "TENMON":"Cơm chiên trứng", "GIA":20, "LOAI":"1"},
    {"IMG":"assets/ComChienDuongChau.png", "TENMON":"Cơm chiên dương châu", "GIA":20, "LOAI":"1"},
    {"IMG":"assets/ComRangDuaBo.png", "TENMON":"Cơm rang dưa bò", "GIA":30, "LOAI":"1"},
    {"IMG":"assets/MyXaoHaiSan.png", "TENMON":"Mì xào hải sản", "GIA":30, "LOAI":"1"},
    {"IMG":"assets/MiBoXao.png", "TENMON":"Mì xào bò", "GIA":30, "LOAI":"1"},
    {"IMG":"assets/BanhBaoHap.png", "TENMON":"Bánh bao hấp", "GIA":15, "LOAI":"1"},
    {"IMG":"assets/NuocSuoi.png", "TENMON":"Nước suối", "GIA":10, "LOAI":"2"},
    {"IMG":"assets/CoCaCoLa.png", "TENMON":"Coca Cola", "GIA":15, "LOAI":"2"},
    {"IMG":"assets/Sting.png", "TENMON":"Sting", "GIA":15, "LOAI":"2"},
    {"IMG":"assets/Pepsi.png", "TENMON":"Pepsi", "GIA":15, "LOAI":"2"},
    {"IMG":"assets/BanhSnackBo.png", "TENMON":"Bánh snack bò", "GIA":10, "LOAI":"3"},
    {"IMG":"assets/BanhSnackKhoaiTay.png", "TENMON":"Bánh snack khoai tây", "GIA":10, "LOAI":"3"}
  ];




  buildTable1(ages1)
function buildTable1(data){
  var tb1 = document.getElementById('idd1')
  for(var i = 0; i < data.length/4; i++)
  {
      var row1 = `<div style="display: flex;" id="id${i}"></div>`
      tb1.innerHTML+=row1       
      
      var tb2 = document.getElementById('id'+i)
      for(var j =i*4; j < 4*i+4; j++)
      {
          var row2 = `<div class="wrap">
                          <img src="${data[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                          <label class="lbl">${data[j].GIA}K</label></label>
                          <span style="margin: 15px; font-weight: 600;">${data[j].TENMON}</span>  
                      </div>`
              tb2.innerHTML+=row2
      }
  }
}



  function myFunction1() {
    var x =document.getElementById("idd1")
    var xx=`<img src="assets/bvhd.png" style="padding: 5px 0 0 20px; width: 140px;height: 56px;"> `;
    for(var i = 0; i < ages1.length/4; i++)
    {
        var row1 = `<div style="display: flex;" id="id${i}"></div>`
        xx+=row1   
        x.innerHTML=xx;    
    }
  
    for(var k = 0; k < ages1.length/4; k++)
    {
        var tb2 = document.getElementById('id'+k)
        var tb3 ="";
        for(var j =k*4; j < 4*k+4; j++)
        {
            var row2 = `<div class="wrap">
                          <img src="${ages1[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                          <label class="lbl">${ages1[j].GIA}K</label></label>
                          <span style="margin: 15px; font-weight: 600;">${ages1[j].TENMON}</span>  
                      </div>`
                tb3+=row2
                tb2.innerHTML=tb3    
        }  
    } 
  }
  
  var ages2 = [];
          
  for(var i = 0; i < ages1.length; i++)
  {
      if(ages1[i].LOAI=="1")
      {
          var element = {};
          element.IMG = ages1[i].IMG;
          element.TENMON = ages1[i].TENMON;
          element.GIA = ages1[i].GIA;
          element.LOAI = ages1[i].LOAI;
          ages2.push(element);
      }     
  }   

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
            var row2 = `<div class="wrap">
                          <img src="${ages2[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                          <label class="lbl">${ages2[j].GIA}K</label></label>
                          <span style="margin: 15px; font-weight: 600;">${ages2[j].TENMON}</span>  
                      </div>`
                tb3+=row2
                tb2.innerHTML=tb3    
        }
        
    } 
}

var ages3 = [];
          
for(var i = 0; i < ages1.length; i++)
{
    if(ages1[i].LOAI=="2")
    {
        var element = {};
        element.IMG = ages1[i].IMG;
        element.TENMON = ages1[i].TENMON;
        element.GIA = ages1[i].GIA;
        element.LOAI = ages1[i].LOAI;
        ages3.push(element);
    }     
}   

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
          var row2 = `<div class="wrap">
                        <img src="${ages3[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                        <label class="lbl">${ages3[j].GIA}K</label></label>
                        <span style="margin: 15px; font-weight: 600;">${ages3[j].TENMON}</span>  
                    </div>`
              tb3+=row2
              tb2.innerHTML=tb3    
      }
      
  } 
}



var ages4 = [];
          
for(var i = 0; i < ages1.length; i++)
{
    if(ages1[i].LOAI=="3")
    {
        var element = {};
        element.IMG = ages1[i].IMG;
        element.TENMON = ages1[i].TENMON;
        element.GIA = ages1[i].GIA;
        element.LOAI = ages1[i].LOAI;
        ages4.push(element);
    }     
}   

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
          var row2 = `<div class="wrap">
                        <img src="${ages4[j].IMG}" alt="Snow" style="width:100%;margin-bottom: 5px;"/>  
                        <label class="lbl">${ages4[j].GIA}K</label></label>
                        <span style="margin: 15px; font-weight: 600;">${ages4[j].TENMON}</span>  
                    </div>`
              tb3+=row2
              tb2.innerHTML=tb3    
      }
      
  } 
}