import listagem from "../listagem.js";

let TelaLog = document.getElementById("login");

let trocaTela = function (atual, novo) {
    atual.style.display = "none";
    novo.style.display = "flex";
}

let trocar3telas = function (nova, tela2, tela3) {
    nova.style.display = "flex";
    tela2.style.display = "none";
    tela3.style.display = "none";
}
let trocar4telas = function (nova, tela2, tela3, tela4) {
    nova.style.display = "flex";
    tela2.style.display = "none";
    tela3.style.display = "none";
    tela4.style.display = "none";

}

let Logar = function () {
    let barraInterna = document.getElementById("barraInterna");
    let TelaLog = document.getElementById("login");
    let telaPrincipal = document.getElementById("principal");

    trocaTela(TelaLog, telaPrincipal);
    listagem.coletar("SO", "solicitacao" )

    barraInterna.style.display = "flex";

}

let Deslogar = function () {

    let barraInterna = document.getElementById("barraInterna");
    let TelaLog = document.getElementById("login");
    let telaPrincipal = document.getElementById("principal");
    
    sessionStorage.clear;
    
    trocaTela(telaPrincipal, TelaLog);
    barraInterna.style.display = "none";

}


export default {  trocaTela, trocar3telas, trocar4telas, Deslogar, Logar };