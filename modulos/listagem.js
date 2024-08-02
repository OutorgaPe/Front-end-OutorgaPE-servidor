// arquivo: coletarDados.js

import requisicoes from "./auxiliares/requisicoes.js";
import exibicao from "./exibicao.js";

let coletar = async function (tipo, local) {
    let endpoint;
    let requisicao = false;

    if (tipo === "SO") {
        let lista = sessionStorage.getItem("listaSO");
        if (lista != null) {
            montar(JSON.parse(lista), local, tipo);
            console.log("Não foi necessária requisição para solicitação");
        } else {
            endpoint = "/Funcionario/listarStatus/Aguardando";
            requisicao = true;
            console.log("Foi necessária requisição para solicitação");
        }
    }

    if (tipo === "AC") {
        let lista = sessionStorage.getItem("listaAC");
        if (lista != null) {
            montar(JSON.parse(lista), local, tipo);
            console.log("Não foi necessária requisição para conseguir as solicitação aceitas");
        } else {
            endpoint = "/Funcionario/listarStatus/Aceito";
            requisicao = true;
            console.log("Foi necessária requisição para conseguir as solicitação aceitas");
        }
    }

    if (tipo === "RE") {
        let lista = sessionStorage.getItem("listaRE");
        if (lista != null) {
            montar(JSON.parse(lista), local, tipo);
            console.log("Não foi necessária requisição para conseguir as solicitação recusadas");
        } else {
            endpoint = "/Funcionario/listarStatus/Recusado";
            requisicao = true;
            console.log("Foi necessária requisição para conseguir as solicitação recusadas");
        }
    }

    if (requisicao === true) {
        let lista = await requisicoes.enviarComToken("http://localhost:8080" + endpoint, null);

        let b = document.getElementById(local);
        let div = " <div class='consultar-pedidos'> </div>";
        b.innerHTML = div;
        montar(lista, local, tipo);

        console.log("Foi necessária requisição");

        if (tipo === "SO" && lista !== undefined) sessionStorage.setItem("listaSO", JSON.stringify(lista));
        if (tipo === "AC" && lista !== undefined) sessionStorage.setItem("listaAC", JSON.stringify(lista));
        if (tipo === "RE" && lista !== undefined) sessionStorage.setItem("listaRE", JSON.stringify(lista));
    }
}

let montar = function (lista, local, tipo) {
    let a = document.getElementById(local);
    a.innerHTML = " ";
    let div = " <div class='consultar-pedidos'>";
    if(lista === undefined ){
        div += "</div>"
    }
    else{
        div +=" <div class='listaPedidos'>";
        let classe = (tipo == "SO") ? "card" : "carde";
        
        for (let index = 0; index < lista.length; index++) {
            div += '<div class="' + classe;
            
            if (tipo === "SO") {
                div += '" id="' + lista[index].NProcesso;
            }
            
            div += '">';
            div += '<h1>Número processo: #' + lista[index].NProcesso + ' </h1>';
            div += '<h1>Status: ' + lista[index].status + '</h1>';
            div += '<h1>Data abertura: ' + lista[index].data + '</h1>';
            div += '<h1>Hora abertura: ' + lista[index].hora + '</h1>';
            div += "</div>";
        }
        
        div += "</div> </div>";
    }
        a.innerHTML = div;
        exibicao.AdicionarOuvinte();
    }
    
export default { coletar };
