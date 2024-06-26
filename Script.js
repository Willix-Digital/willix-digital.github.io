/*!
=================================================================================================================================
     *Responsive Nav Bar
=================================================================================================================================
*/

const navbarMenu = document.querySelector(".navlinks ");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

/*!
=================================================================================================================================
     *Gestion du changement de style de la barre de navigation lors du défilement
=================================================================================================================================
*/

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var navLinks = document.querySelectorAll(".navlinks a");
    var logoLink = document.querySelector(".navbar h1 span");
    var logoImg = document.querySelector(".logoimg");
    var logoTxt = document.querySelector(".logotxt");
    var hamburgerBtn = document.querySelector(".hamburger-btn");

    var scrolled = window.scrollY > 8; // 3mm de défilement
  
    if (scrolled) {
      logoImg.classList.add("visible");
      logoTxt.classList.add("invisible");
      hamburgerBtn.classList.add("color");
    } else {
        logoImg.classList.remove("visible");
        logoTxt.classList.remove("invisible");
        hamburgerBtn.classList.remove("color");
    }

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
/* 
================================================================================================================================
 ****************Annimation de la page
================================================================================================================================
*/
document.addEventListener('DOMContentLoaded', () => {
    // Liste des éléments à animer avec leurs sélecteurs et décalages de déclenchement
    const elementsToAnimate = [
        { selector: '.an1', triggerOffset: window.innerHeight / 5 * 4 },
        { selector: '.an2', triggerOffset: window.innerHeight / 5 * 4 },
        { selector: '.an3', triggerOffset: window.innerHeight / 5 * 4 },
        { selector: '.an4', triggerOffset: window.innerHeight / 5 * 4 },
        { selector: '.an5', triggerOffset: window.innerHeight / 5 * 4 }
    ];

    // Fonction pour configurer l'animation pour un sélecteur spécifique
    const setupAnimation = (selector, triggerOffset) => {
        // Sélectionne tous les éléments correspondant au sélecteur
        const elements = document.querySelectorAll(selector);

        // Fonction pour vérifier la position des éléments par rapport à la fenêtre de visualisation
        const checkElements = () => {
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                // Si l'élément est visible dans la fenêtre de visualisation, ajoute la classe 'show'
                if (elementTop < triggerOffset) {
                    element.classList.add('show');
                } else {
                    // Sinon, retire la classe 'show'
                    element.classList.remove('show');
                }
            });
        };

        // Ajoute un écouteur d'événement de défilement pour vérifier les éléments
        window.addEventListener('load', checkElements);
        window.addEventListener('scroll', checkElements);


        // Vérifie initialement les éléments pour appliquer les animations au chargement de la page
        checkElements();
    };

    // Configure l'animation pour chaque configuration dans la liste elementsToAnimate
    elementsToAnimate.forEach(config => {
        setupAnimation(config.selector, config.triggerOffset);
    });
});

/*!
=================================================================================================================================
     *Darck Mode
=================================================================================================================================
*/
var btnMode = document.getElementById("mode");
var bodyElement = document.querySelector('body');
var elementsWithWhiteColor = document.querySelectorAll('.whitecolor');
var elementsWithClearColor = document.querySelectorAll('.clearcolor');
var elementsWithDarckColor = document.querySelectorAll('.darkcolor');


btnMode.addEventListener("click", () => {
  if (btnMode.classList.contains("clearcolor")) {
    btnMode.classList.remove("clearcolor");
    btnMode.classList.add("darkcolor");
    bodyElement.classList.add("whitebg");
  }
  else{
    btnMode.classList.add("clearcolor");
    btnMode.classList.remove("darkcolor");
    bodyElement.classList.remove("whitebg")
    elementsWithClearColor.classList.remove("darkcolor")
  }

  elementsWithWhiteColor.forEach((element) => {
    if (element.classList.contains('whitecolor')) {
        element.classList.remove('whitecolor');
        element.classList.add('darkcolor');
    } else if (element.classList.contains('darkcolor')) {
        element.classList.remove('darkcolor');
        element.classList.add('whitecolor');
    }
});
});
