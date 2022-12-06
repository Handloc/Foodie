const searchBarContainer = document.querySelector(".search-bar-container");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const overlay = document.querySelector("#overlay");
const menuButton = document.querySelector(".fa-bars");
const menuContainer = document.querySelector("#menu-container");

searchIcon.addEventListener("click", function () {
  searchBarContainer.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

menuButton.addEventListener("click", function () {
  menuContainer.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

// overlay.addEventListener("click", function () {
//   searchBarContainer.classList.add("hidden");
// });
