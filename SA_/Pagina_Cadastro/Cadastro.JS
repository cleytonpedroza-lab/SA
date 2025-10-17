// Seleciona o botão pelo nome da classe
const botaoCadastrar = document.getElementsByClassName("btn")[0];

// Adiciona o evento de clique ao botão
botaoCadastrar.addEventListener("click", function () {
    // Captura os campos do formulário
    const nome = document.getElementById("nome").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Verifica se algum campo está vazio
    if (!nome || !cidade || !telefone || !email || !senha) {
        alert("Por favor, preencha todos os campos antes de cadastrar.");
        return; // Impede o cadastro
    }

    // Exibe a mensagem de sucesso se todos os campos estiverem preenchidos
    alert("Cadastro realizado com sucesso!");
});