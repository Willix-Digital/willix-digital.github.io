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

//DEFILEMENT AUTOMATIQUE DE MON CAROUSSELLE

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
     *Gestion du changement de style de la barre de navigation lors du défilement
=================================================================================================================================
*/

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var navLinks = document.querySelectorAll(".links a");
  var logoLink = document.querySelector("#logo a");
  var loginBtn = document.querySelector(".login-btn");
  var scrolled = window.scrollY > 3; // 3mm de défilement

  if (scrolled) {
    navbar.classList.add("scrolled");
    navLinks.forEach(function (link) {
      link.classList.add("scrolled");
    });
    logoLink.classList.add("scrolled"); // Ajout de la classe pour le lien du logo
    loginBtn.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navLinks.forEach(function (link) {
      link.classList.remove("scrolled");
    });
    logoLink.classList.remove("scrolled"); // Suppression de la classe pour le lien du logo
    loginBtn.classList.remove("scrolled");
  }
});

/*!
=================================================================================================================================
     *
=================================================================================================================================
*/

// Gestion du carrousel infini
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = Array.from(carousel.children);

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.floor(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  if (
    carousel.scrollLeft === 0 ||
    Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return;
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 5000);
};

autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// Gestion du carrousel infini
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne l'élément du bouton "to-top"
  var toTopButton = document.querySelector(".to-top");

  // Affiche ou masque le bouton "to-top" en fonction de la position de défilement
  window.addEventListener("scroll", function () {
    // Vérifie si la position de défilement est supérieure à 1000px avant d'afficher le bouton
    if (
      (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) &&
      (document.body.scrollTop < 1000 ||
        document.documentElement.scrollTop < 1000)
    ) {
      toTopButton.style.display = "block";
    } else {
      toTopButton.style.display = "none";
    }
  });
  /*!
=================================================================================================================================
     *BOUTON TOP
=================================================================================================================================
*/
$(document).ready(function(){
  $(window).on('scroll', function(){
      var heightWindow = $(window).height(),
          heightPage = $(document).height(),
          total = heightPage - heightWindow;
      if(total >= 115){
          if($(this).scrollTop() > 150){ // Correction ici
              $('#btnTop').fadeIn();
          } else {
              $('#btnTop').fadeOut();
          }
      }
  });

  $('#btnTop').on('click', function(){
      $('html, body').animate({scrollTop : 0}, 500);
      return false;
  });
});
