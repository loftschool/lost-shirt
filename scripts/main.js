// products filter
(function() {
  const elem = document.querySelector(".products__list");
  const iso = new Isotope(elem, {
    itemSelector: ".products__item",
    filter: ".new"
  });

  const controlsContainer = document.querySelector(".products-filter");

  controlsContainer.addEventListener("click", e => {
    e.preventDefault();
    const $this = e.target;

    if (!$this.matches(".products-filter__link")) return;

    const items = $this.closest(".products-filter").children;
    const filterName = $this.getAttribute("data-filter");

    removeClassFromCollection("products-filter__item--active", items);

    $this
      .closest(".products-filter__item")
      .classList.add("products-filter__item--active");

    iso.arrange({ filter: `.${filterName}` });
  });

  function removeClassFromCollection(className, collection) {
    Array.from(collection).forEach(elem => {
      elem.classList.remove(className);
    });
  }
})();

// sidebar menu
(function() {
  const openingBtn = document.querySelector(".sidebar__bars");
  const closingBtn = document.querySelector(".sidebar__close");
  const sidebar = document.querySelector(".sidebar");

  openingBtn.addEventListener("click", e => {
    sidebar.classList.add("sidebar--opened");
  });

  closingBtn.addEventListener("click", e => {
    sidebar.classList.remove("sidebar--opened");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".sidebar")) {
      sidebar.classList.remove("sidebar--opened");
    }
  });
})();
