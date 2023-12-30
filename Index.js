var genreImc = document.getElementById("genre");
var tailleImc = document.getElementById("taille");
var poidsImc = document.getElementById("poids");
var buttonCalculer = document.getElementById("CALULERIMC");
var reponseImc = document.getElementById("texteréponse");
var resultatImc = document.getElementById("résultat");
var interpretationIMC = document.getElementById("interpretation");
// SCRIPT POUR LE CALCULATEUR D'IMC

buttonCalculer.addEventListener("click", function () {
  // Réinitialise les bordures avant de vérifier à nouveau
  tailleImc.style.border = "";
  poidsImc.style.border = "";
  genreImc.style.border = "";

  // Vérifie si au moins un champ est vide
  if (
    isNaN(parseFloat(tailleImc.value)) ||
    isNaN(parseFloat(poidsImc.value)) ||
    genreImc.value === ""
  ) {
    reponseImc.style.color = "orange";
    reponseImc.innerHTML = "Nous avons besoin de plus d'informations.";

    // Ajoute une bordure rouge aux champs vides
    if (isNaN(parseFloat(tailleImc.value))) {
      tailleImc.style.border = "1px solid rgb(244, 60, 60)";
    }
    if (isNaN(parseFloat(poidsImc.value))) {
      poidsImc.style.border = "1px solid rgb(244, 60, 60)";
    }
    if (genreImc.value === "") {
      genreImc.style.border = "1px solid rgb(244, 60, 60)";
    }
  } else {
    // Calcul de l'IMC
    var taille = parseFloat(tailleImc.value);
    var poids = parseFloat(poidsImc.value);
    var IMC = poids / (taille * taille);
    resultatImc.innerHTML = IMC;

    // Affiche le résultat
    reponseImc.style.color = "rgb(21, 182, 241)";
    reponseImc.innerHTML = "Votre IMC est de : ";
    resultatImc.innerHTML = IMC.toFixed(2); // Efface le message d'erreur s'il y en avait un

    // Conditions pour interprétation de l'IMC
    if (IMC < 18.5) {
      interpretationIMC.style.color = "red";
      interpretationIMC.innerHTML = "Vous êtes en insuffisance pondérale";
    } else if (IMC >= 18.5 && IMC < 24.9) {
      interpretationIMC.style.color = "white";
      interpretationIMC.innerHTML = "Vous avez un poids normal";
    } else if (IMC >= 25 && IMC < 29.9) {
      interpretationIMC.style.color = "orange";
      interpretationIMC.innerHTML = "Vous êtes  en surpoids";
    } else {
      interpretationIMC.style.color = "red";
      interpretationIMC.innerHTML = "Vous êtes obése";
    }
  }
});
