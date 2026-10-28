const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");

factButton.addEventListener("click", function () {
  bio.textContent = "Did you know that it's male seahorses that get pregnant and during birth they just shoot them out?.";
  factButton.textContent = "There you go!";
});