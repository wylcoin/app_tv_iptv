// const inf = [
//   {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
//   {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
//   {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
//   {"IMG":"assets/Disney.png", "TEN":"Disney"},
//   {"IMG":"assets/Disney.png", "TEN":"Disney"},
//   {"IMG":"assets/VTV1.png", "TEN":"VTV1"},
//   {"IMG":"assets/VTV3.png", "TEN":"VTV3"},
//   {"IMG":"assets/VTV6.png", "TEN":"VTV6"},
//   {"IMG":"assets/Disney.png", "TEN":"Disney"},
//   {"IMG":"assets/Disney.png", "TEN":"Disney"}
// ];


// buildTable1(inf)
// function buildTable1(data){
//   var tb1 = document.getElementById('idd1')
//   for(var i = 0; i < data.length/5; i++)
//   {
//       var row1 = `<div style="display: flex;" id="id${i}"></div>`
//       tb1.innerHTML+=row1       
      
//       var tb2 = document.getElementById('id'+i)
//       for(var j =i*5; j < 5*i+5; j++)
//       {
//         if(j<data.length)
//         {
//           var row2 = `<div class="wrap">
//                           <img src="${data[j].IMG}" style="width:100%; border:1px solid rgba(0, 0, 0, 0.15)"/>  
//                           <p class="stylep" style="font-weight: 600;">${data[j].TEN}</p>                       
//                       </div>`
//               tb2.innerHTML+=row2
//         } 
//       }
//   }
// }


buildTable1()
function buildTable1(){
    $.ajax({
      url: 'http://127.0.0.1:50005/api/tivi',
      type: 'GET',
      dataType: 'json',
      success: function (data, textStatus, xhr) {
        var tb1 = document.getElementById('idd1')
        for(var i = 0; i < data.length/5; i++)
        {
            var row1 = `<div style="display: flex;" id="id${i}"></div>`
            tb1.innerHTML+=row1       
            
            var tb2 = document.getElementById('id'+i)
            for(var j =i*5; j < 5*i+5; j++)
            {
              if(j<data.length)
              {
                var row2 = `<div class="wrap">
                                <img src="assets/${data[j].image}" style="width:100%; border:1px solid rgba(0, 0, 0, 0.15)"/>  
                                <p class="stylep" style="font-weight: 600;">${data[j].name}</p>                       
                            </div>`
                    tb2.innerHTML+=row2
              } 
            }
        }
      },
  });  
}