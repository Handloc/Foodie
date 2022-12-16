import spinnerGIF from "url:/icons/spinner.gif";

export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(error = this._errorMessage) {
    const markup = `
      <div class="error">
        <a>${error}</a>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  spinner() {
    const markup = `
      <div class="spinner">
        <img src="${spinnerGIF}" />
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}