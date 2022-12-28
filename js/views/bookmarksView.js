import View from "./View";
import previewView from "./previewView";

class bookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks");
  _errorMessage = "No bookmarked recipes found";

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new bookmarksView();
