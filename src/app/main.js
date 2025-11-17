import { getUrlByChoice } from "./utils.js";
import { handleJokeRequest } from "./api.js";
import renderJokeCard from "./components/renderjokeCard.js";
const getJokeButton = document.querySelector(".get-joke-btn");

export function getChoiceCategory() {
  return document.querySelector("input[name=filter]:checked").value;
}

getJokeButton.addEventListener("click", async () => {
  const choice = getChoiceCategory();
  let categoriChoice;
  let query;
  const URL = getUrlByChoice(choice);

  const data = await handleJokeRequest(URL);

  renderJokeCard(data);
});
