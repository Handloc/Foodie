class searchView {
  _parentElement = document.querySelector(".search-bar-container");

  getQuery() {
    const queryValue = this._parentElement.querySelector("#search-bar").value;
    this._clearInput();
    return queryValue;
  }

  _clearInput() {
    this._parentElement.querySelector("#search-bar").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
