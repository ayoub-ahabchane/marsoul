const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".main-wrapper").classList.toggle("hidden");
  document.querySelector(".modal").classList.toggle("hidden");
});
