"use strict";let cosmic=new Swiper(".cosmic-slider",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},navigation:{nextEl:".comics__btn-next",prevEl:".comics__btn-prev"},pagination:{el:".swiper-pagination",clickable:!0}});window.addEventListener("scroll",(()=>{document.querySelector(".navbar").classList.toggle("header--sticky",window.scrollY>0)}),{passive:!0});
//# sourceMappingURL=custom.js.map