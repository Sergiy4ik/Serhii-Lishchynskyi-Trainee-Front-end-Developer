import axios from "axios";

const TOKEN = "8799335287:AAGsViaK01PtOKkqAAmm7w_alGFrKwJMQLU";
const CHAT_ID = "7382601286";

export async function sendToTelegram(name) {
  const text = `
Привіт, ${name}!

Ми — гурт G&G 🎸
Ми отримали ваше повідомлення.

Дякуємо за відгук 💛
Ми стаємо кращими завдяки вам!
`

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: CHAT_ID,
      text
    })
  } catch (error) {
    console.error(error);
  }
}