export default function categoriesListRender(categoriesList) {
  const categoriList = document.querySelector(".caterogies-list");

  for (let i = 0; i < categoriesList.length; i++) {
    const li = document.createElement("li");
    li.classList.add("categori");
    li.textContent = categoriesList[i];
    categoriList.append(li);
  }
}
