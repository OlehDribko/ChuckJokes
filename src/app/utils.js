import { URL } from "./main.js";

function getTimeHoursAgo(lastDate) {
  const date = dayjs(lastDate);
  return dayjs().diff(date, "hour");
}

function createDomElment(elementTag, className) {
  const element = document.createElement(elementTag);
  element.classList.add(className);

  return element;
}

export function getUrlByChoice(choice, categories, query) {
  switch (choice) {
    case "categories":
      return `${URL}/random?category=${categories}`;

    case "search":
      return `${URL}/search?query=${query}`;

    default:
      return `${URL}/random`;
  }
}

export { getTimeHoursAgo, createDomElment };
