var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

let name1 = $('#name1');
let name2 = $('#name2');
let name3 = $('#name3');
let name4 = $('#name4');
let name5 = $('#name5');
let name6 = $('#name6');
let name7 = $('#name7');

let c1 =$('#c1');
let c2 =$('#c2');
let c3 =$('#c3');
let c4 =$('#c4');
let c5 =$('#c5');
let c6 =$('#c6');
let c7 =$('#c7');

function loading1(){
  let savedContent =JSON.parse(localStorage.getItem("mon"));
  name1.text(savedContent.name);
  c1.text(savedContent.calories);
}

function loading2(){
  let savedContent =JSON.parse(localStorage.getItem("tue"));
  name2.text(savedContent.name);
  c2.text(savedContent.calories);
}

function loading3(){
  let savedContent =JSON.parse(localStorage.getItem("wed"));
  name3.text(savedContent.name);
  c3.text(savedContent.calories);
}

function loading4(){
  let savedContent =JSON.parse(localStorage.getItem("thu"));
  name4.text(savedContent.name);
  c4.text(savedContent.calories);
}

function loading5(){
  let savedContent =JSON.parse(localStorage.getItem("fri"));
  name5.text(savedContent.name);
  c5.text(savedContent.calories);
}

function loading6(){
  let savedContent =JSON.parse(localStorage.getItem("sat"));
  name6.text(savedContent.name);
  c6.text(savedContent.calories);
}

function loading7(){
  let savedContent =JSON.parse(localStorage.getItem("sun"));
  name7.text(savedContent.name);
  c7.text(savedContent.calories);
}



loading1();
loading2();
loading3();
loading4();
loading5();
loading6();
loading7();
