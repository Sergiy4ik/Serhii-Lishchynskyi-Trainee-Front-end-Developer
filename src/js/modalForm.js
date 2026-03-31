import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.getElementById("ticketForm");
const concertsButton = document.querySelectorAll(".concerts-button")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal-close");

concertsButton.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  });
});

function closeModal() {
  modal.classList.remove("active")
  document.body.classList.remove("modal-open")
}

modalClose.addEventListener("click", () => {
  closeModal()
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal()
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const name = formData.get(("user-name") || "").trim();
  const email = formData.get(("user-email") || "").trim();
  const phone = formData.get(("user-phone") || "").trim();

  if (!name) {
    iziToast.error({
      title: "Помилка валідації",
      message: "Введіть своє ім'я",
      position: "topCenter"
    })
    return;
  } else if (name.length < 2) {
    iziToast.error({
      title: "Помилка валідації",
      message: "Введіть коректне ім'я",
      position: "topCenter"
    })
    return
  }

  if (!email.includes("@")) {
    iziToast.error({
      title: "Помилка валідації",
      message: "Введіть свою коректну електронну адресу",
      position: "topCenter"
    })
    return;
  }

  if (!phone) {
    iziToast.error({
      title: "Помилка валідації",
      message: "Введіть номер телефону",
      position: "topCenter"
    })

    return;
  }
  else if (phone.length < 10) {
    iziToast.error({
      title: "Помилка валідації",
      message: "Введіть коректний номер телефону",
      position: "topCenter"
    })
    return;
  }

  iziToast.success({
    title: "Вітаємо!",
    message: "Ваш білет заброньовано",
    position: "topCenter"
  })

  form.reset()
})