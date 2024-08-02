 import trocarTela from "./auxiliares/trocarTela.js";
import requisicoes from "./auxiliares/requisicoes.js";
let fomrLogin = document.getElementById("form-Login");


fomrLogin.addEventListener("submit", async function (event) {
    event.preventDefault();

    // montando json que será enviado
    let login = document.getElementById('loginn').value;
    let senha = document.getElementById('senha').value;

    let dados = {
        login: login,
        senha: senha
    };
    // enviando json  e guardando saida
    const token = await requisicoes.enviarDados('http://localhost:8080/login', dados, true);

    //se o login foi autorizado, armazena-se o token e avança para tela de login.
    if (token != null) {

        sessionStorage.setItem("token", 'Bearer ' + token.accessToken);
        fomrLogin.reset();
        trocarTela.Logar();
    }
    fomrLogin.reset();
})


export default { fomrLogin, trocarTela };