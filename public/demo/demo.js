// Demo forms don't send anything: they explain what a real site would do with the request.
document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    form.querySelector(".demo-result").textContent =
      `${name ? name + ", это" : "Это"} демо-сайт, поэтому заявка никуда не ушла. ` +
      "На настоящем сайте она сразу пришла бы владельцу в Telegram.";
  });
});
