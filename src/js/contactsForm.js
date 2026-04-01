import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { sendToTelegram } from "./telegram";

const form = document.getElementById("contactsForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const name = (formData.get("user-name") || "").trim();
    const email = (formData.get("user-email") || "").trim();
    const notice = (formData.get("user-notice") || "").trim();

    if (!name) {
      iziToast.error({
        title: "Помилка валідації",
        message: "Введіть своє ім'я",
        position: "topCenter"
      });
      return;
    } else if (name.length < 2) {
      iziToast.error({
        title: "Помилка валідації",
        message: "Введіть коректне ім'я",
        position: "topCenter"
      })
      return
    };

    if (!email.includes("@") || !email.includes(".")) {
      iziToast.error({
        title: "Помилка валідації",
        message: "Введіть свою коректну електронну адресу",
        position: "topCenter"
      })
      return;
    }

    if (!notice) {
      iziToast.error({
        title: "Помилка валідації",
        message: "Введіть своє повідомлення",
        position: "topCenter"
      })
      return
    }

    sendToTelegram(name)

    iziToast.success({
      title: "Ваше повідомлення отримано",
      position: "topCenter"
    })

    form.reset()

  });
}

