class SearchView {
  #parentComponent = document.querySelector('.search');

  getQuery() {
    return this.#parentComponent.querySelector('.search__field').value;
  }

  #clearInput() {
    this.#parentComponent.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentComponent.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      this.#clearInput();
    });
  }
}

export default new SearchView();
