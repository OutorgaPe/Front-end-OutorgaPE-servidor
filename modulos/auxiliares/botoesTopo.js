import trocarTela from "./trocarTela.js";
import listagem from "../listagem.js";
// botões no topo da tela 

let bsolicicoes = document.getElementById("so");
let baceitos = document.getElementById("ac");
let brejeitados = document.getElementById("re");
let bsair = document.getElementById("sair");
let bvoltar = document.getElementById("voltar");
// telas
let Tsolicitacao = document.getElementById("solicitacao");
let Taceitos = document.getElementById("aceitos");
let Trejeitados = document.getElementById("rejeitados");


// mostrar tela de solicitação de outorga

bsolicicoes.addEventListener("click", function () {

//listagem.coletar()
    trocarTela.trocar3telas(Tsolicitacao, Taceitos,Trejeitados)
    listagem.coletar("SO", "solicitacao" )


});



baceitos.addEventListener("click", function () {

//listagem.coletar()
    trocarTela.trocar3telas(Taceitos,Tsolicitacao ,Trejeitados)
    listagem.coletar("AC", "aceitos" )

});

brejeitados.addEventListener("click", function () {

//listagem.coletar()
    trocarTela.trocar3telas(Trejeitados, Taceitos, Tsolicitacao)
    listagem.coletar("RE", "rejeitados" )

});


// deslogar
bsair.addEventListener("click", function () {

    let barraInterna = document.getElementById("barraInterna");
    let Telalogin = document.getElementById("login");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("listaSO")
    sessionStorage.removeItem("listaAC")
    sessionStorage.removeItem("listaRE")

    trocarTela.trocar3telas(Telalogin, barraInterna, document.getElementById("principal"));
    //trocarTela.trocaTela(Telaconsultar, Telalogin)
    trocarTela.trocar3telas(Tsolicitacao,  Taceitos,Trejeitados)


    
})

bvoltar.addEventListener("click", function () {

    trocarTela.trocaTela(document.getElementById("barraInternaExibicao"),document.getElementById("barraInterna") )
    trocarTela.trocaTela(document.getElementById("exibicao"),document.getElementById("consultar") )
    document.getElementById("formExibicao").reset();
    
    });

export default {bsolicicoes,baceitos,brejeitados, bsair, bvoltar };
