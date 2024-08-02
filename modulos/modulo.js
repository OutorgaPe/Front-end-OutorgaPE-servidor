import login from "./login.js";
import botoesTopo from "./auxiliares/botoesTopo.js";
import trocarTela from "./auxiliares/trocarTela.js";
import exibicao from "./exibicao.js";
import listagem from "./listagem.js";
import gerenciamentoFormularios from "./gerenciamentoFormularios.js";
window.onload = function () {
    if (sessionStorage.getItem("token") !== null){
        listagem.coletar("SO", "solicitacao" )
        trocarTela.Logar();
    } 

}


