import { jokeCard } from "./createJokeCard.js";

const listOfJoke = document.querySelector(".cards-of-joke-list");

export default function renderJokeCard(data) {
  const jokes = Array.isArray(data) ? data : [data];

  jokes.forEach((joke) => {
    const card = jokeCard(joke);
    listOfJoke.append(card);
  });
  // if (Array.isArray(data)) {
  //   data.forEach((data) => {
  //     const card = jokeCard(data);
  //     listOfJoke.append(card);
  //   });
  //   return;
  // }

  // const card = jokeCard(data);
  // listOfJoke.append(card);
}
