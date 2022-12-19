import View from "./View";

class resultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found";
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupResult).join("");
  }

  _generateMarkupResult(result) {
    return `
    <div class="result">
      <div class="result-image-container">
        <img src="${result.image}" class="result-image" />
      </div>
      <div class="result-title-container">
      <a class="result-title" href="#${result.id}"
        >${result.title}</a>
      </div>
    </div>
  `;
  }
}

export default new resultsView();
