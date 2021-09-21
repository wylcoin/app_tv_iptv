var ListOrder = [
    {"IMG":"assets/Introduce.png", "TEN":"Giới thiệu"},
    {"IMG":"assets/WatchTV.png", "TEN":"Xem tivi"},
    {"IMG":"assets/WatchFilm.png", "TEN":"Xem phim"},
    {"IMG":"assets/Rules.png", "TEN":"Nội quy"},
    {"IMG":"assets/ListDoctor.png", "TEN":"Danh sách bác sĩ"},

    {"IMG":"assets/MedicalSchedule.png", "TEN":"Lịch khám"},
    {"IMG":"assets/Order.png", "TEN":"Gọi món"},
    {"IMG":"assets/Restaurants.png", "TEN":"Nhà Hàng"},
    {"IMG":"assets/HandBook.png", "TEN":"Cẩm nang"},
    {"IMG":"assets/Evaluate.png", "TEN":"Đánh giá"}
  ]
  
  buildTable(ListOrder)
  function buildTable(data){
    var tb = document.getElementById('MyTB1')
    for(var i = 0; i < data.length; i++)
    {
      var row = `<div class="wrap" >
      <img src="${data[i].IMG}" style="width:80px; height:80px;margin: 20px 0 0 50px;"/>
      <h2 class="lblTitle">${data[i].TEN}</h2>  
  </div>`
          tb.innerHTML+=row
    }
  }
  

  const prev  = document.querySelector('.prev');
  const next = document.querySelector('.next');
  
  const track = document.querySelector('.track');
  
  let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
  
  window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
  })
  
  let index = 0;
  
  next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
    
    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
      next.classList.add('hide');
    }
  })
  
  prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if (index === 0) {
      prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
  })
  





  var ListOrder1 = [
    {"IMG":"assets/TT1.png" },
    {"IMG":"assets/BVHD1.png" },
    {"IMG":"assets/TT2.png" }
  ]
  
  buildTable1(ListOrder1)
  function buildTable1(data){
    var tb = document.getElementById('sli')
    for(var i = 0; i < data.length; i++)
    {
      var row = `<div class="slidee ra">
                <img src="${data[i].IMG}" style="width: 100%; height: 100%; border-radius:16px"/>
            </div>`
          tb.innerHTML+=row
    }

    var nut = document.getElementById('bt')
    for(var j = 0; j < data.length; j++)
    {
      var row = `<li></li>`
          nut.innerHTML+=row
    }
  }

        document.addEventListener("DOMContentLoaded",function(){
        var nut = document.querySelectorAll('div.nut ul li');
        var slides = document.querySelectorAll('div.slide div');
        for(var i = 0 ; i < nut.length; i++){
        nut[i].addEventListener('click',function(){
    var nutnay = this;
    var vitrislide = 0;
    console.log(nutnay.previousElementSibling);
    for(var i = 0;nutnay = nutnay.previousElementSibling; vitrislide++){
        //chay den khi nut nay  = null thi dung.
        // chay xong lenh nay khi click vao nut ta lay dc vitrislide
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].classList.remove('ra');
    }
    for(var i = 0; i < slides.length; i++){
        slides[vitrislide].classList.add('ra');
    }
})
}
// Click chuyen slide
 
    auto();
    function auto(){
    var thoigian = setInterval(function(){
        var slide = document.querySelector('div.slide div.ra');
        var vitrislide = 0;
        for(var i = 0 ; slide = slide.previousElementSibling ; vitrislide ++){
        }
        for(var i = 0 ; i < slides.length; i++){
            slides[i].classList.remove('ra'); // remove hết những thằng đang có class 'ra'
        }
        if(vitrislide == slides.length - 1){
            slides[0].classList.add('ra');
                // Thằng này có nghĩa là sau khi tự động chuyển đến slide cuối cùng nó quay lại thằng 0
        }
        else{
        slides[vitrislide].nextElementSibling.classList.add('ra');
               // Đây là then chốt của auto slide nó sẽ chuyển sang cái thằng tiếp theo.
    }
    },2000)
}
 
 
})