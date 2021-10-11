//*Slider
let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween:20,
    breakpoints: {
      320:{
        cssMode: true,
        direction: 'vertical',
        
      },
      768:{
        cssMode: true,
        direction: 'vertical',
        
      },
      1024:{
        direction: 'horizontal',
        cssMode: true,
        
        
      },
      1280: {
        grabCursor: true,
        mouseWheel: true,
        cssMode: false,
        direction: 'horizontal',
      },
    },
  });
  