var ListOrder = [
  {"IMG":"assets/EndGame.png", "TEN":"End Game"},
  {"IMG":"assets/BlackWidow.png", "TEN":"Black Widow"},
  {"IMG":"assets/Mission6.png", "TEN":"Mission: Impossible 6"},
  {"IMG":"assets/FastAndFurious8.png", "TEN":"Fast and Furious 8"},
  {"IMG":"assets/GodzillaAndKong.png", "TEN":"Godzilla & Kong"},
  {"IMG":"assets/WandaVision.png", "TEN":"Wanda Vision"},
  {"IMG":"assets/Loki.png", "TEN":"Loki"},
  {"IMG":"assets/FastAndFurious8.png", "TEN":"Fast and Furious 8"},
  {"IMG":"assets/EndGame.png", "TEN":"End Game"},
  {"IMG":"assets/BlackWidow.png", "TEN":"Black Widow"},
  {"IMG":"assets/Mission6.png", "TEN":"Mission: Impossible 6"},
  {"IMG":"assets/FastAndFurious8.png", "TEN":"Fast and Furious 8"},
  {"IMG":"assets/GodzillaAndKong.png", "TEN":"Godzilla & Kong"},
  {"IMG":"assets/WandaVision.png", "TEN":"Wanda Vision"},
  {"IMG":"assets/Loki.png", "TEN":"Loki"},
  {"IMG":"assets/GodzillaAndKong.png", "TEN":"Godzilla & Kong"},
  {"IMG":"assets/WandaVision.png", "TEN":"Wanda Vision"},
  {"IMG":"assets/Loki.png", "TEN":"Loki"}
]

buildTable(ListOrder)
function buildTable(data){
  var tb = document.getElementById('MyTB')
  for(var i = 0; i < data.length; i++)
  {
    var row = `<div class="card-container">
          <div class="card">
            <img src="${data[i].IMG}" style="width:100%;margin-bottom: 5px;"/> 
            <span style="margin: 10px;font-size: 20px; font-weight: 600;">${data[i].TEN}</span>  
          </div>
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