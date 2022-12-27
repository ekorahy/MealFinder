class MealCategory extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
      <div class="col-lg-12">
        <h2>Meal Category</h2>
          <div class="container-item">
            <div class="row">
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/beef.png"
                 alt="Beef" class="float-left">
                <h4>Beef</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/chicken.png"
                 alt="Chicken" class="float-left">
                <h4>Chicken</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/lamb.png"
                 alt="Lamb" class="float-left">
                <h4>Lamb</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/miscellaneous.png"
                 alt="Miscellaneous" class="float-left">
                <h4>Miscellaneous</h4>
              </div>                
            </div>
            <div class="row">
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/pasta.png"
                 alt="Pasta" class="float-left">
                <h4>Pasta</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/goat.png"
                 alt="Goat" class="float-left">
                <h4>Goat</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/seafood.png"
                 alt="Seafood" class="float-left">
                <h4>Seafood</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/side.png"
                 alt="Side" class="float-left">
                <h4>Side</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/starter.png"
                 alt="Starter" class="float-left">
                <h4>Starter</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/vegan.png"
                 alt="Vegan" class="float-left">
                <h4>Vegan</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/vegetarian.png"
                 alt="Vegetarian" class="float-left">
                <h4>Vegetarian</h4>
              </div>
              <div class="col-lg">
                <img src="https://www.themealdb.com/images/category/breakfast.png"
                 alt="Breakfast" class="float-left">
                <h4>Breakfast</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('meal-category', MealCategory);
