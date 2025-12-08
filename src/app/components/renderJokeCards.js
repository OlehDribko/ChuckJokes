import { jokeCard } from "./jokeCard.js";

const listOfJoke = document.querySelector(".cards-of-joke-list");

export default function renderJokeCards(jokes, plaseFoRender) {
  plaseFoRender.innerHTML = "";
  jokes.forEach((joke) => {
    const card = jokeCard(joke);
    plaseFoRender.append(card);
  });
}
