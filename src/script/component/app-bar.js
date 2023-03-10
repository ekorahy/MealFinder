class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="./index.html">
         <i class="fa fa-cutlery" aria-hidden="true"></i> MealFinder
        </a>
        <button class="navbar-toggler" type="button"
         data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false"
           aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link" href="./index.html">Home</a>
            <a class="nav-link" href="#searchBar">Search</a>
            <a class="nav-link" href="#mealCategory">Category</a>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
