document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".search-wrapper");
  const button = wrapper?.querySelector(".search-icon");

  if (wrapper && button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      wrapper.classList.toggle("compact");
    });
  }
});