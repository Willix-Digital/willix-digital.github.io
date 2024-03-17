var photoDeProfil = document.getElementsByClassName("mon-img");
const txAnim = document.getElementById("#tp");

new Typewriter(txAnim, {
  deleteSpeed: 20,
})
  .changeDelay(20)
  .typeString("Moi c'est John Doe")
  .pauseFor(300)
  .typeString("<strong>, Dev Full-Stack</strong>")
  .pause(1000)
  .deleteChars(13)
  .start();
