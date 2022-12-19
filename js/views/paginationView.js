import View from "./View";
import { setResultsPerPage } from "../helpers";

class paginationView extends View {
  _parentElement = document.querySelector("#pagination-container");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".page-button");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / setResultsPerPage());

    // Page 1 with more pages
    if (currentPage === 1 && numPages > 1) {
      return `<button data-goto="${
        currentPage + 1
      }" class="page-button next-page-button">Page ${currentPage + 1}</button>`;
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return `<button data-goto="${
        currentPage - 1
      }" class="page-button previous-page-button">Page ${
        currentPage - 1
      }</button>`;
    }

    // Other page
    if (currentPage < numPages) {
      return `
        <button data-goto="${
          currentPage - 1
        }" class="page-button previous-page-button">Page ${
        currentPage - 1
      }</button>
        <button data-goto="${
          currentPage + 1
        }" class="page-button next-page-button">Page ${currentPage + 1}</button>
      `;
    }

    // Only one page
    return ``;
  }
}

export default new paginationView();
