import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered
   * @param {boolean} [render=true] Whether to render or just create a markup string
   * @returns {undefined | string} Markup string is returned when render = false
   * @this {Obect} View instance
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const markup = this._generateMarkup();
    const DOM = document.createRange().createContextualFragment(markup);

    const newEls = Array.from(DOM.querySelectorAll('*'));
    const curEls = Array.from(this._parentContainer.querySelectorAll('*'));

    newEls.forEach((newEl, i) => {
      const curEl = curEls[i];

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() != ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentContainer.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
        `;

    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
        `;

    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
        `;

    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }
}
