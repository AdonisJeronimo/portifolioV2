// MENU SHOW Y HIDDEN

const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close");

//MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//MENU HIDDEN

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// PORTFOLIO

let swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Change Backgound header

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList;
  }
}

window.addEventListener("scroll", scrollHeader);

//SHOW SCROLL-UP

function scrollUp() {
  const scrollUp = document.getElementById("scroll_up");

  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

//VALIDATION FORM

let form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  //VERIFICATION AND VALIDATION

  const nameForm = document.getElementById("name"),
    emailForm = document.getElementById("email"),
    subjectForm = document.getElementById("subject"),
    messageForm = document.getElementById("message"),
    campos = document.querySelectorAll(".required"),
    spans = document.querySelectorAll(".span-required");

  function setError(index) {
    campos[index].style.border = "2px solid var(--invalid-field)";
    spans[index].style.display = "block";
  }

  function removeError(index) {
    campos[index].style.border = "";
    spans[index].style.display = "none";
  }

  function nameValidate() {
    if (campos[0] && nameForm.value.length <= 2) {
      setError(0);
      event.preventDefault();
    } else {
      removeError(0);
    }
  }
  nameValidate();

  function emailValidate() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(campos[1] && emailForm.value)) {
      setError(1);
      event.preventDefault();
    } else {
      removeError(1);
    }
  }
  emailValidate();

  function subjectValidate() {
    if (campos[2] && subjectForm.value.length == "") {
      setError(2);
      event.preventDefault();
    } else {
      removeError(2);
    }
  }
  subjectValidate();

  function messageValidate() {
    if (campos[2] && messageForm.value.length == "") {
      setError(3);
      event.preventDefault();
    } else {
      removeError(3);
    }
  }
  messageValidate();
});
