import listagem from "./listagem.js";
import requisicoes from "./auxiliares/requisicoes.js";
import trocarTela from "./auxiliares/trocarTela.js";

let botaoAceitar = document.getElementById("aceitar");
let botaoNegar = document.getElementById("negar");

botaoAceitar.addEventListener("click", function (event) {
    event.preventDefault();
    enviarParecer("aceitar");
    limparListas();
});

botaoNegar.addEventListener("click", function (event) {
    event.preventDefault();
    enviarParecer("negar");
    limparListas();
});

let enviarParecer = function (acao) {
    let referemcia = sessionStorage.getItem("np");
    
        console.log("referencia "+ referemcia)
        let url = `http://localhost:8080/Funcionario/analizar/${referemcia}/${acao === "aceitar" ? "875376" : "430273"}`;
        requisicoes.enviarComToken(url, acao === "aceitar" ? "eeeee" : "EEEE");
        sessionStorage.removeItem("np");
    
};

let limparListas = function () {
    sessionStorage.removeItem("listaSO");
    sessionStorage.removeItem("listaAC");
    sessionStorage.removeItem("listaRE");

    listagem.coletar("SO", "solicitacao");
    listagem.coletar("SO", "solicitacao");


    document.getElementById("formExibicao").reset();

    trocarTela.trocaTela(document.getElementById("barraInternaExibicao"), document.getElementById("barraInterna"));
    trocarTela.trocaTela(document.getElementById("exibicao"), document.getElementById("consultar"));
};

export default { botaoAceitar, botaoNegar };
