/*!
=================================================================================================================================
     *Gestion du changement de style de la barre de navigation lors du défilement
=================================================================================================================================
*/

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var navLinks = document.querySelectorAll(".links a");
  var logoLink = document.querySelector("#logo a");
  var loginBtn = document.querySelector(".login-btn");
  var btnHumbergur = document.querySelector(".hamburger-btn");
  var scrolled = window.scrollY > 5; // 3mm de défilement

  if (scrolled) {
    navbar.classList.add("scrolled");
    navLinks.forEach(function (link) {
      link.classList.add("scrolled");
    });
    logoLink.classList.add("scrolled");
    loginBtn.classList.add("scrolled");
    navbar.classList.add("color");
  } else {
    navbar.classList.remove("scrolled");
    navLinks.forEach(function (link) {
      link.classList.remove("scrolled");
    });
    logoLink.classList.remove("scrolled");
    loginBtn.classList.remove("scrolled");
    navbar.classList.remove("color");
  }
});

/*!
=================================================================================================================================
     *Responsive Nav Bar
=================================================================================================================================
*/
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});

/*!
=================================================================================================================================
     *DEFILEMENT AUTOMATIQUE DU SLIDER 
=================================================================================================================================
*/
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

function handleScrollNext(direction) {
  const cards = document.querySelector(".card-content");
  cards.scrollLeft = cards.scrollLeft +=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

function handleScrollPrev(direction) {
  const cards = document.querySelector(".card-content");
  cards.scrollLeft = cards.scrollLeft -=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

next.addEventListener("click", handleScrollNext);
prev.addEventListener("click", handleScrollPrev);
