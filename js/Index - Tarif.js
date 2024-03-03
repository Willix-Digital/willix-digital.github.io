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
     *Responsive Nav Bar
=================================================================================================================================
*/
document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector(".carousel");
  var leftButton = document.getElementById("left");
  var rightButton = document.getElementById("right");

  leftButton.addEventListener("click", function () {
    // Logique pour déplacer le slider vers la gauche
    slider.scrollLeft -= 200; // Vous pouvez ajuster la valeur selon votre besoin
  });

  rightButton.addEventListener("click", function () {
    // Logique pour déplacer le slider vers la droite
    slider.scrollLeft += 200; // Vous pouvez ajuster la valeur selon votre besoin
  });
});

/*!
=================================================================================================================================
     *Affichage des soins
=================================================================================================================================
*/
const listesSoinsVisages = document.querySelectorAll("#SOINS-VISAGES");
const listesMassages = document.querySelector("#MASSAGE");
const zonnedAffichage = document.querySelector("#cartessoins");

listesMassages.addEventListener("click", () => {
  // Use fetch to get the content of "massage.html"
  fetch("massages.html")
    .then((response) => response.text())
    .then((content) => {
      // Set the innerHTML of cartessoins to the content of "massage.html"
      zonnedAffichage.innerHTML = content;
    })
    .catch((error) => console.error("Error fetching massage content:", error));
});
