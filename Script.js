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
=======================================================================
 *Gestion du changement de style de la barre de navigation lors du défilement
=======================================================================
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
/*!
=======================================================================
      Annimation de la page
=======================================================================
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
=======================================================================
     *Darck Mode
=======================================================================
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




/*!
=======================================================================
     *Show Hide texte
=======================================================================
*/
function toggleText() {
  var moreText = document.querySelector('.more-text');
  var showMore = document.querySelector('.show-more');
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    showMore.textContent = "Lire moins";
  } else {
    moreText.style.display = "none";
    showMore.textContent = "Lire la suite";
  }
}


/*!
=======================================================================
     *stats
=======================================================================
*/
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 50% de visibilité
  };

  // Sélectionner tous les éléments avec les classes spécifiques
  const targets = document.querySelectorAll('.stat1 h1, .stat2 h1, .stat3 h1, .stat4 h1');

  const endValues = {
      'stat1': 10,
      'stat2': 6,
      'stat3': 20,
      'stat4': 40,
  };

  function countUp(target, end, duration) {
      let start = 0;
      let startTime = null;
      const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const easing = Math.pow(progress / duration, 3); // Accélération cubique
          const value = Math.floor(start + easing * (end - start));
          target.innerText = value;
          if (progress < duration) {
              window.requestAnimationFrame(step);
          } else {
              target.innerText = end;
          }
      };
      window.requestAnimationFrame(step);
  }

  function handleIntersection(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const target = entry.target;
              const parentClass = target.parentElement.classList[0];
              const endValue = endValues[parentClass];
              countUp(target, endValue, 2000); // Compter jusqu'à la valeur finale en 2 secondes
              observer.unobserve(target); // Arrêter d'observer après le déclenchement
          }
      });
  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  targets.forEach(target => observer.observe(target));
});