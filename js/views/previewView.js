import View from "./View";

class previewView extends View {
  _parentElement = "";

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
    <div class="result ${this._data.id === id ? "active-result" : ""}">
      <div class="result-image-container">
        <img src="${this._data.image}" class="result-image" />
      </div>
      <div class="result-title-container">
      <a class="result-title" href="#${this._data.id}"
        >${this._data.title}</a>
      </div>
    </div>
  `;
  }
}

export default new previewView();
