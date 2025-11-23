import { jokeCard } from "./createJokeCard.js";

const listOfJoke = document.querySelector(".cards-of-joke-list");

export default function renderJokeCard(data) {
  const jokes = [];
  jokes.push(data);

  jokes.forEach((joke) => {
    const card = jokeCard(joke);
    listOfJoke.append(card);
  });
}
