import { jokeCard } from "./jokeCard.js";

const listOfJoke = document.querySelector(".cards-of-joke-list");
const favoritesList = document.querySelector(".favorites-list");

function getFavoriteJokes() {
  return localStorageAbstraction.getItems(FAVORITE_KEY) || [];
}

export function renderJokeCards(jokes) {
  listOfJoke.innerHTML = "";
  jokes.forEach((joke) => {
    const card = jokeCard(joke);
    listOfJoke.append(card);
  });
}

export function renderFavoriteJokes(jokes = getFavoriteJokes()) {
  favoritesList.innerHTML = "";

  jokes.forEach((joke) => {
    const card = jokeCard(joke);
    favoritesList.append(card);
  });
}
