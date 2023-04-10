import View from './View';

class AddRecipeView extends View {
  _parentContainer = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _buttonOpen = document.querySelector('.nav__btn--add-recipe');
  _buttonClose = document.querySelector('.btn--close-modal');

  _message = 'Recipe was successfully uploaded.';

  constructor() {
    super();
    this._addHandlers();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlers() {
    this._buttonOpen.addEventListener('click', this.toggleWindow.bind(this));

    this._buttonClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentContainer.addEventListener('submit', e => {
      e.preventDefault();

      const dataArr = [...new FormData(this._parentContainer)];
      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }

  _generateMarkup() {
    return;
  }
}

export default new AddRecipeView();
