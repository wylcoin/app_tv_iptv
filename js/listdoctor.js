const ages1 = [
    {"IMG":"assets/PhamVanBung.png", "TEN":"Ts. Bs. CKII Phạm Văn Bùng", "KHOA":"Khoa ung bướu"},
    {"IMG":"assets/NguyenMinhHung.png", "TEN":"Ts. Bs. Nguyễn Minh Hùng", "KHOA":"Khoa ung bướu"},
    {"IMG":"assets/LeVanHoai.png", "TEN":"Bs. CKII Lê Văn Hoài", "KHOA":"Khoa ung bướu"},
    {"IMG":"assets/PhanThiDieuHien.png", "TEN":"Bs. CKI Phan Thị Diệu Hiền", "KHOA":"Khoa ung bướu"},
    {"IMG":"assets/PhanHoaiBao.png", "TEN":"Ts. Bs. CKII Phan Hoài Bảo", "KHOA":"Khoa ung bướu"},
    {"IMG":"assets/DangVanLam.png", "TEN":"Ts. Bs. CKII Đặng Văn Lâm", "KHOA":"Khoa ung bướu"},
    {"IMG":"assets/DaoThiChauAnh.png", "TEN":"Ts. Bs. CKII Đào Thị Châu Anh", "KHOA":"Khoa ung bướu"},
    {"IMG":"assets/PhamVanTien.png", "TEN":"Ts. Bs. CKII Phạm Văn Tiến", "KHOA":"Khoa ung bướu"}
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
        if(j<data.length)
        {
          var row2 = `<div class="wrap">
                          <img src="${data[j].IMG}" style="width:100%;"/>  
                          <p class="stylep" style="font-weight: 600;">${data[j].TEN}</p>                       
                          <p class="stylep" style="color:gray">${data[j].KHOA}</p>  
                      </div>`
              tb2.innerHTML+=row2
        } 
      }
  }
}