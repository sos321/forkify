import icons from 'url:../../img/icons.svg';
import { RES_PER_PAGE } from '../config';
import View from './View';

class Pagination extends View {
  _parentContainer = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentContainer.addEventListener('click', e => {
      const goTo = +e.target.closest('.btn--inline')?.dataset.goto;
      if (!goTo) return;

      handler(goTo);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / RES_PER_PAGE);
    const curPage = this._data.page;

    if (curPage === 1 && numPages > 1) {
      return this._rightButton(curPage);
    }

    if (curPage === numPages && numPages > 1) {
      return this._leftButton(curPage);
    }

    if (curPage < numPages) {
      return [this._leftButton(curPage), this._rightButton(curPage)].join('');
    }

    return '';
  }

  _leftButton(curPage) {
    return `
    <button class="btn--inline pagination__btn--prev" data-goto="${
      curPage - 1
    }">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
    </button>
    `;
  }

  _rightButton(curPage) {
    return `
    <button class="btn--inline pagination__btn--next" data-goto="${
      curPage + 1
    }">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        <span>Page ${curPage + 1}</span>
    </button>
    `;
  }
}

export default new Pagination();
