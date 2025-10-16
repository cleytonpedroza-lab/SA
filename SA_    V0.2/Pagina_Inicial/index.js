function saudacao() {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora < 12) {
        return "Bom dia! ";
    } else if (hora < 18) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const saudacaoElemento = document.getElementById("caixa-saudacao");
    const FundoEscuro = document.querySelector(".Fundo_escuro");
    if (saudacaoElemento) {
        saudacaoElemento.textContent = saudacao();
    }
    document.addEventListener("click", function () {
        if (saudacaoElemento) { 
            saudacaoElemento.remove(); 
        }
        if (FundoEscuro) {
            FundoEscuro.remove(); 
        }
    });
});
    
