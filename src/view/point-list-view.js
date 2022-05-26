import {createElement} from '../render.js';

const createPointListTemplate = () => '<div class="trip-events__list"></div>';

export default class PointListView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createPointListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
