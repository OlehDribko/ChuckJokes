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

export { getTimeHoursAgo, createDomElment };
