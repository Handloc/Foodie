import View from "./View";
import previewView from "./previewView";

class bookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks");
  _errorMessage = "No bookmarked recipes found";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new bookmarksView();
