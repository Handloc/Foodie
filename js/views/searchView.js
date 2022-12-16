class searchView {
  #parentElement = document.querySelector(".search-bar-container");

  getQuery() {
    return this.#parentElement.querySelector("#search-bar").value;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
