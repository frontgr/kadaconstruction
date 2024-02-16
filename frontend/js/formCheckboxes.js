document.addEventListener("DOMContentLoaded", function () {
  const whatsappCheckbox = document.getElementById("whatsapp");
  const telegramCheckbox = document.getElementById("telegram");
  const viberCheckbox = document.getElementById("viber");

  whatsappCheckbox.addEventListener("change", function () {
    setBorderColor(whatsappCheckbox, "#2CAE39"); // WhatsApp
  });

  telegramCheckbox.addEventListener("change", function () {
    setBorderColor(telegramCheckbox, "#00A6FB"); // Telegram
  });

  viberCheckbox.addEventListener("change", function () {
    setBorderColor(viberCheckbox, "#9747FF"); // Viber
  });

  function setBorderColor(checkbox, color) {
    const label = checkbox.parentElement;
    if (checkbox.checked) {
      label.style.borderColor = color;
    } else {
      label.style.borderColor = "#C5C5C5";
    }
  }
});
