class SearchView {
  _parentComponent = document.querySelector('.search');

  getQuery() {
    return this._parentComponent.querySelector('.search__field').value;
  }

  _clearInput() {
    this._parentComponent.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentComponent.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      this._clearInput();
    });
  }
}

export default new SearchView();
