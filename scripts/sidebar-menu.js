
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
