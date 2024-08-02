import trocarTela from "./auxiliares/trocarTela.js";

let AdicionarOuvinte = function() {

    var cartoes = document.getElementsByClassName("card");

// Exemplo de uso:
for (let i = 0; i < cartoes.length; i++) {
    cartoes[i].addEventListener('click', function() {
        // Obtém o ID do card clicado
        let lista = JSON.parse(sessionStorage.getItem("listaSO"));
        let formulario = lista.find(item => item.NProcesso === cartoes[i].id);
        preencherFormulario(formulario)

        trocarTela.trocaTela(document.getElementById("barraInterna"),document.getElementById("barraInternaExibicao") )
        trocarTela.trocaTela(document.getElementById("consultar"),document.getElementById("exibicao") )

    });
}

}

let preencherFormulario = function (jsonData) {
    // Informações do Formulário
    document.getElementById('modalidadeForm').value = jsonData.modalidadeForm;
    document.getElementById('nomeImovelForm').value = jsonData.nomeImovelForm;
    document.getElementById('cepForm').value = jsonData.cepForm;
    document.getElementById('logradouroForm').value = jsonData.logradouroForm;
    document.getElementById('cidadeForm').value = jsonData.cidadeForm;
    document.getElementById('latitudeForm').value = jsonData.latitudeForm;
    document.getElementById('longitudeForm').value = jsonData.longitudeForm;
    document.getElementById('finalidadeForm').value = jsonData.finalidadeForm;

    // Informações do Usuário
    document.getElementById('nomeUsuario').value = jsonData.nomeUsuario;
    document.getElementById('cpfCnpjUsuario').value = jsonData.cpfCnpjUsuario;
    
    // Endereço do Usuário
    document.getElementById('cepUsuario').value = jsonData.cepUsuario;
    document.getElementById('logradouroUsuario').value = jsonData.logradouroUsuario;
    document.getElementById('numeroCasaUsuario').value = jsonData.numeroCasaUsuario;
    document.getElementById('complementoUsuario').value = jsonData.complementoUsuario;
    document.getElementById('bairroUsuario').value = jsonData.bairroUsuario;
    document.getElementById('cidadeUsuario').value = jsonData.cidadeUsuario;
    document.getElementById('estadoUsuario').value = jsonData.estadoUsuario;
    
    // Contato
    document.getElementById('emailUsuario').value = jsonData.emailUsuario;
    document.getElementById('telefoneUsuario').value = jsonData.telefoneUsuario;
    document.getElementById('celularUsuario').value = jsonData.celularUsuario;
    sessionStorage.setItem("np", jsonData.NProcesso)
}

export default {  AdicionarOuvinte}