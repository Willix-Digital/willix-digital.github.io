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
     *DEFILEMENT AUTOMATIQUE DE MON CAROUSSELLE
=================================================================================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
  var radioButtons = document.querySelectorAll(".control");

  function autoChangeSlide() {
    // Trouvez l'index du bouton radio actuellement coché
    var currentIndex = Array.from(radioButtons).findIndex(
      (radio) => radio.checked
    );
    // Calculez l'index du prochain bouton radio
    var nextIndex = (currentIndex + 1) % radioButtons.length;
    // Cochez le prochain bouton radio pour changer de slide
    radioButtons[nextIndex].checked = true;
  }
  // Changez de slide automatiquement toutes les 40 secondes
  setInterval(autoChangeSlide, 20000);
});

/*!
=================================================================================================================================
     *
=================================================================================================================================
*/
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
/*!
=================================================================================================================================
     *BOUTON TOP
=================================================================================================================================
*/
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

/*!
=================================================================================================================================
     *DEFILEMENT AUTOMATIQUE DU SLIDER 
=================================================================================================================================
*/

$(document).ready(function () {
  var currentSlide = 1;
  var totalSlides = $(".slider > div").length; // Nombre total de slides
  var slideInterval = 5000; // Intervalle en millisecondes entre chaque changement de slide

  function nextSlide() {
    if (currentSlide < totalSlides) {
      currentSlide++;
    } else {
      currentSlide = 1;
    }

    // Calcule la nouvelle position du slider en pourcentage
    var newPosition = (currentSlide - 1) * -100;

    // Applique la transformation au slider
    $(".slider").css("transform", "translateX(" + newPosition + "%)");
  }

  // Démarre le défilement automatique
  var autoSlide = setInterval(nextSlide, slideInterval);

  // Arrête le défilement automatique lorsque la souris survole le slider
  $(".slider").hover(
    function () {
      clearInterval(autoSlide);
    },
    function () {
      autoSlide = setInterval(nextSlide, slideInterval);
    }
  );
});
