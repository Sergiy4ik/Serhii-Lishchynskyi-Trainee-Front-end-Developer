const openBtn = document.querySelector("[data-menu-open]");
const closeBtn = document.querySelector("[data-menu-close]");
const menu = document.querySelector("[data-menu]");
const links = document.querySelectorAll(".mobile-menu-link");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.classList.add("modal-open");
})

function closeModal() {
  menu.classList.remove("active");
  document.body.classList.remove("modal-open");
}

closeBtn.addEventListener("click", () => {
  closeModal()
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu?.classList.contains("active")) {
    closeModal()
  }

});

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeModal()
  })
});

