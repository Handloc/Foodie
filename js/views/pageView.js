const searchBarContainer = document.querySelector(".search-bar-container");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const overlay = document.querySelector("#overlay");
const menuButton = document.querySelector(".fa-bars");
const menuContainer = document.querySelector("#menu-container");
const addRecipeButton = document.querySelector(".fa-pen-to-square");
const addRecipeModal = document.querySelector(".add-recipe-modal");
const bookmarksButton = document.querySelector(".open-bookmarks");
const bookmarksModal = document.querySelector(".bookmarks-container");

class pageView {
  pageEventListeners() {
    searchIcon.addEventListener("click", function () {
      searchBarContainer.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });

    menuButton.addEventListener("click", function () {
      menuContainer.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });

    addRecipeButton.parentElement.addEventListener("click", function () {
      menuContainer.classList.toggle("hidden");
      addRecipeModal.classList.toggle("hidden");
    });

    bookmarksButton.parentElement.addEventListener("click", function () {
      menuContainer.classList.toggle("hidden");
      bookmarksModal.classList.toggle("hidden");
    });

    overlay.addEventListener("click", function () {
      if (!addRecipeModal.classList.contains("hidden"))
        addRecipeModal.classList.add("hidden");
      if (!searchBarContainer.classList.contains("hidden"))
        searchBarContainer.classList.add("hidden");
      if (!menuContainer.classList.contains("hidden"))
        menuContainer.classList.add("hidden");
      if (!bookmarksModal.classList.contains("hidden"))
        bookmarksModal.classList.add("hidden");
      overlay.classList.toggle("hidden");
    });
  }
}

export default new pageView();
