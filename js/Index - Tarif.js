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
