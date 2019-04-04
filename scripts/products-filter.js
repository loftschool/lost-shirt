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

})();
