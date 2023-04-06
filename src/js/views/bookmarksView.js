import View from './View';
import previewView from './previewView';

class BookmarksView extends View {
  _parentContainer = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(bk => previewView.render(bk, false)).join('');
  }
}

export default new BookmarksView();
