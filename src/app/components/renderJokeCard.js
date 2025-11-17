import { createJokeCard } from "./createJokeCard.js";

const listOfJoke = document.querySelector(".cards-of-joke-list");

export default function renderJokeCard(data) {
  const card = createJokeCard(data);
  listOfJoke.append(card);
}
