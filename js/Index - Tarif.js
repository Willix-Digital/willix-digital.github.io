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
     *SLIDER
=================================================================================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".carousel");
  var interval = 15000; // 15 secondes

  function moveCarousel() {
    var firstCard = carousel.querySelector(".card:first-child");
    carousel.appendChild(firstCard);
  }

  setInterval(moveCarousel, interval);
});

/*!
=================================================================================================================================
     *Affichage des soins
=================================================================================================================================
*/
const listesSoinsVisages = document.querySelectorAll("#SOINS-VISAGES");
const listesMassages = document.querySelector("#MASSAGE");
const zonnedAffichage = document.querySelector("#cartessoins");

function chargerContenu(url, idZone) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(idZone).innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}
