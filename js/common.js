// full page scroll
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let section = gsap.utils.toArray(".section_js");

// $(window).on('resize', function(){
//   if($(window).width() > 680){
//     function goToSection(i){
//       gsap.to(window, {
//         scrollTo: {y: i*innerHeight, autoKill: false, ease: "Power3.easeInOut"},
//         duration: 0.85
//       });
//     };
//     section.forEach((eachPanel, i) => {
//       ScrollTrigger.create({
//         trigger: eachPanel,
//         onEnter: () => goToSection(i)
//       });
//       ScrollTrigger.create({
//         trigger: eachPanel,
//         start: "bottom bottom",
//         onEnterBack: () => goToSection(i)
//       });
//     });
//   }
// })
// if($(window).width() > 680){
//   function goToSection(i){
//     gsap.to(window, {
//       scrollTo: {y: i*innerHeight, autoKill: false, ease: "Power3.easeInOut"},
//       duration: 0.85
//     });
//   };
//   section.forEach((eachPanel, i) => {
//     ScrollTrigger.create({
//       trigger: eachPanel,
//       onEnter: () => goToSection(i)
//     });
//     ScrollTrigger.create({
//       trigger: eachPanel,
//       start: "bottom bottom",
//       onEnterBack: () => goToSection(i)
//     });
//   });
// };

// function goToSection(i){
//   gsap.to(window, {
//     scrollTo: {y: i*innerHeight, autoKill: false, ease: "Power3.easeInOut"},
//     duration: 0.85
//   });
// };
// section.forEach((eachPanel, i) => {
//   ScrollTrigger.create({
//     trigger: eachPanel,
//     start: "top bottom",
//     onEnter: () => goToSection(i),
//     onEnterBack: () => goToSection(i)
//   });
// });






// header
const delay = 300;
let timer = null;

// 
// $(document).ready(function(){
//   $(window).on('resize', function(){
//     clearTimeout(timer);
//     timer = setTimeout(function(){
//       // document.location.reload(false);
//       if($(window).width() >= 1300){
//         $('.menu_js').on('mouseenter',function(){
//           $(this).children('.subMenu_js').addClass('active');
//         });
//         $('.menu_js').on('mouseleave',function(){
//           $(this).children('.subMenu_js').removeClass('active');
//         });
//       } else {
//         // 위 이벤트 제거
//         $('.menu_js').off('mouseenter');
//         $('.menu_js').off('mouseleave');

//         $('.menu_js > p').on('click', function(){
//           $(this).next().toggleClass('active');
//         });
//       };
//     }, delay);
//   });
// });

if($(window).width() >= 1300){
  $('.menu_js').on('mouseenter',function(){
    $(this).children('.subMenu_js').addClass('active');
  });
  $('.menu_js').on('mouseleave',function(){
    $(this).children('.subMenu_js').removeClass('active');
  });
} else {
  $('.menu_js').off('mouseenter');
  $('.menu_js').off('mouseleave');
  $('.menu_js > p').on('click', function(){
    $(this).next().toggleClass('active');
  });
};

// hamberger
const ham = document.querySelector('.ham');
const exit = document.querySelector('.exit');

// 닫기
$(exit).on('click', function(){
  $('header nav').css({'right':'-100%','opacity':'0','transition':'all .7s'});
});

$(window).on('resize', function(){
  if($(window).width() <= 1300){
    $('header nav').css({'right':'-100%','opacity':'0'});
    $(ham).on('click', function(){
      $('header nav').css({'right':'0','opacity':'1'});
    });
    $('section').on('click', function(){
      $('header nav').css({'right':'-100%','opacity':'0'});
    });
  } else if($(window).width() > 1300){
    $('header nav').css({'right':'0px','opacity':'1', 'transition':'all .1s'});
  };
});

if($(window).width() <= 1300){
  $(ham).on('click', function(){
    $('header nav').css({'right':'0px','opacity':'1'});
  });
  $('section').on('click', function(){
    $('header nav').css({'right':'-100%','opacity':'0'});
  });
} else if($(window).width() > 1300){
  $('header nav').css({'right':'0px','opacity':'1','transition':'all .1s'});
};











// section 01
var swiper1  = new Swiper('.serviceSwiper', {
  slidePerView: 3,
  spaceBetween: 30,
  touchRatio: 0,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function(){
      $('.intro_img').removeClass('active');
      $('.intro_img').eq(this.realIndex).addClass('active');
    },
  },
});





// section 02
var swiper2  = new Swiper('.remodelingSwiper', {
  slidePerView: 3,
  spaceBetween: 30,
  speed: 1000,
});
$('.remodelingSwiper .swiper-slide').on('mouseenter', function(){
  $('.remodelingSwiper .swiper-slide').children('img').addClass('active');
  $('.remodelingSwiper .swiper-slide').css({"opacity":"0.4","border":"1px solid #fff", "background-color":"transparent",});
  $(this).children('.text').find('a').addClass('active');
  $(this).css({"opacity":"1", "background-color":"rgba(0,0,0,0.2)"});
});
$('.remodelingSwiper .swiper-slide').on('mouseleave', function(){
  $('.remodelingSwiper .swiper-slide').children('img').removeClass('active');
  $('.remodelingSwiper .swiper-slide').css({"opacity":"1", "border":"0"});
  $(this).children('.text').find('a').removeClass('active');
});

$('.remodelingSwiper .swiper-slide').eq(0).hover(function(){
  $('.bgimg').toggleClass('bg1');
});
$('.remodelingSwiper .swiper-slide').eq(1).hover(function(){
  $('.bgimg').toggleClass('bg2');
});
$('.remodelingSwiper .swiper-slide').eq(2).hover(function(){
  $('.bgimg').toggleClass('bg3');
});





// section 03
var swiper3  = new Swiper('.productSwiper', {
  slidePerView: 'auto',
  spaceBetween: 50,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakPoint :{
    1300: {
      spaceBetween: 150,
    }
  }
});




// Scroll Event
window.onscroll =function(){myFunction()};

function myFunction(){
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = ((winScroll / height) * 100);
  document.getElementById("myBar").style.height = 25 + scrolled / 1.333 + "%";

  const text = document.querySelector(".progress-bar .text");
  if(scrolled <= 25){
    text.innerText = "VHOM 서비스소개"
  } else if(Math.floor(scrolled) <= 50){
    text.innerText = "VHOM 리모델링 패키지"
  } else if(Math.floor(scrolled) <= 75){
    text.innerText = "VHOM 추천 아이템"
  } else {
    text.innerText = "CS center";
  }
}; 