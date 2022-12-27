class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="shadow p-2 mb-3 bg-body rounded">
      <img class="meal-img" src="${this._meal.strMealThumb}" alt="Meal Image">
      <div class="container-meal">
        <h2>${this._meal.strMeal}</h2>
        <p style="color: #ffd700;"><i class="fa fa-bookmark" aria-hidden="true">
         </i> Category: ${this._meal.strCategory}, <i class="fa fa-flag"
          aria-hidden="true"></i> Country: ${this._meal.strArea}
        </p>
        <span>
         <i class="fa fa-list-alt" aria-hidden="true"></i> Ingredients:<br> 
          ${this._meal.strIngredient1} ${this._meal.strIngredient2} 
          ${this._meal.strIngredient3} ${this._meal.strIngredient4} 
          ${this._meal.strIngredient5} ${this._meal.strIngredient6} 
          ${this._meal.strIngredient7} ${this._meal.strIngredient8} 
          ${this._meal.strIngredient9} ${this._meal.strIngredient10} 
          ${this._meal.strIngredient11} ${this._meal.strIngredient12} 
          ${this._meal.strIngredient13} ${this._meal.strIngredient14} 
          ${this._meal.strIngredient15} ${this._meal.strIngredient16} 
          ${this._meal.strIngredient17} ${this._meal.strIngredient18} 
          ${this._meal.strIngredient19} ${this._meal.strIngredient20}
        </span>
        <p><i class="fa fa-list-alt" aria-hidden="true"></i> Instructions: 
         <br>${this._meal.strInstructions}
        </p>
        <a href="${this._meal.strYoutube}" target="_blank"
         class="btn btn-outline-danger" style="text-align: center;
          display: block;"><i class="fa fa-youtube-play"
           aria-hidden="true"></i> View details on Youtube
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define('meal-item', MealItem);
