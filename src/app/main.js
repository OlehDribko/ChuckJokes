getJokeButton.addEventListener("click", () => {
  const selectChoise = document.querySelector(
    "input[name=filter]:checked"
  ).value;
  console.log(selectChoise);
});
