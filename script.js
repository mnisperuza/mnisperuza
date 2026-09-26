const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeButton.setAttribute("aria-pressed", isDark);
});
