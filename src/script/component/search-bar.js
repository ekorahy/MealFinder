class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron jumbotron-fluid">
      <div class="jumbotron-black">
        <div class="container">
          <h1 class="display-4">Easy way to find <span><i class="fa fa-cutlery"
           aria-hidden="true"></i> Meal Recipes</span><br> from<span> Around
            the World <i class="fa fa-globe" aria-hidden="true"></i></span>
          </h1>
          <div id="search-container" class="search-container">
            <input placeholder="Search meal" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">
             <i class="fa fa-search" aria-hidden="true"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
