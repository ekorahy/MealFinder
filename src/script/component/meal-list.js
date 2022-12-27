import './meal-item.js';

class MealList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="text-danger text-center">" ${message} "</h2>`;
  }

  render() {
    this.innerHTML = '';
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }
}

customElements.define('meal-list', MealList);
