// MENU SHOW Y HIDDEN

const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

//MENU SHOW
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
 
//MENU HIDDEN

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
};
navLink.forEach(n => n.addEventListener('click',linkAction));

// PORTFOLIO

let swiper = new Swiper(".portfolio-container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

  //Change Backgound header

  function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 80){
        nav.classList.add('scroll-header')
    }else{
        nav.classList
    }
  };

  window.addEventListener('scroll',scrollHeader)

  //SHOW SCROLL-UP

  function scrollUp(){
    const scrollUp = document.getElementById('scroll_up');

    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
  };

  window.addEventListener('scroll',scrollUp);
