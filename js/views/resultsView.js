import View from "./View";

class resultsView extends View {
  _parentElement = document.querySelector("#results-container");

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupResult).join("");
  }

  _generateMarkupResult(result) {
    return `
    <div class="result">
      <img src="${result.image}" class="result-image" />
      <a class="result-title" href="#${result.id}"
        >${result.title}</a>
    </div>
  `;
  }
}

export default new resultsView();
