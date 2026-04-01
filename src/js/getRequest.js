import axios from "axios";
import iziToast from "izitoast";

export async function getRequest({ name, email, phone, form }) {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        name,
        email,
        phone
      }
    })

    iziToast.success({
      title: "Запит успішно відправлено",
      position: "topCenter"
    })
    form.reset()
  } catch (error) {
    console.error(error);

  }

}