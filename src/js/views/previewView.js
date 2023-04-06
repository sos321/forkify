import View from './View';

class PreviewView extends View {
  _parentContainer = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
        <li class="preview">
            <a class="preview__link ${
              this._data.id === id ? 'preview__link--active' : ''
            }" href="#${this._data.id}">
                <figure class="preview__fig">
                    <img src="${this._data.image}" alt="${this._data.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${this._data.title}</h4>
                    <p class="preview__publisher">T${this._data.publisher}</p>
                </div>
            </a>
        </li>
        `;
  }
}

export default new PreviewView();
