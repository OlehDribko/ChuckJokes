import { jokeCard } from "./createJokeCard.js";

const listOfJoke = document.querySelector(".cards-of-joke-list");

export default function renderJokeCard(data) {
  let jokes = [];

  if (Array.isArray(data)) {
    jokes = data;
  } else if (Array.isArray(data.result)) {
    jokes = data.result;
  } else {
    jokes = [data];
  }
  jokes.forEach((joke) => {
    const card = jokeCard(joke);
    listOfJoke.append(card);
  });
}
