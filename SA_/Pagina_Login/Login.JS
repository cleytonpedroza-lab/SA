// javascript
// Login.js

const botaoLogin = document.getElementsByClassName("btn")[0];

if (!botaoLogin) throw new Error("Botão de login não encontrado (classe .btn).");

botaoLogin.addEventListener("click", function (event) {
    if (event && typeof event.preventDefault === "function") event.preventDefault();

    const email = (document.getElementById("email") && document.getElementById("email").value.trim()) || "";
    const senha = (document.getElementById("senha") && document.getElementById("senha").value.trim()) || "";

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos antes de entrar.");
        return;
    }

    alert("Login feito com sucesso!");
});