document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");
    const greetingMessage = document.getElementById("greeting-message");

   
    const now = new Date();
    const hour = now.getHours();

    let message = "";
    if (hour >= 5 && hour < 12) {
        message = "Bom dia! Seja bem-vindo!";
    } else if (hour >= 12 && hour < 18) {
        message = "Boa tarde! Seja bem-vindo!";
    } else {
        message = "Boa noite! Seja bem-vindo!";
    }

    greetingMessage.textContent = message;

    popup.style.display = "flex";

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});