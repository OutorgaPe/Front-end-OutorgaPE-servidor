import trocarTela from "./trocarTela.js";
let enviarDados = async function (url, dados, retorno) {

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (resposta.status == 200) {
            console.log("retornou 200, operação bem sucedida")
            if (retorno == true) {
                const token = await resposta.json();
                return token;
            }
        }
        if (resposta.status == 422) {
            throw new Error("retornou 422, nome, entidade não processavel")

        }
        if (resposta.status == 400) {
            throw new Error("retornou 400, requisição mal sucedida")

        }
        if (resposta.status == 204) {
            throw new Error("retornou 204, operação bem sucedida, mas não tem retorno")

        }
        else return null;

    } catch (error) {
        console.log("erro: " + error);
    }
}

let enviarComToken = async function (url, dados) {

    let tipo;
    if (dados == null) {
        tipo = "GET";
    }
    else {
        tipo = "POST";
        dados = JSON.stringify(dados)
    }

    try {

        let tokenn = sessionStorage.getItem("token");

        const resposta = await fetch(url, {
            method: tipo,
            headers: {
                "Authorization": tokenn,
                'Content-Type': 'application/json'
            },
            body: dados
        });

        if (resposta.status == 200) {
            console.log("retornou 200, operação bem sucedida")
            const token = await resposta.json();
            return token;
        }
        if (resposta.status == 422) {
            throw new Error("retornou 422, nome, entidade não processavel")

        }
        if (resposta.status == 401) {
            alert("Sessão expirou")
            sessionStorage.removeItem("token");
            trocarTela.Deslogar();
            throw new Error("retornou 401, não autorizado, token deve ter experidado")

        }
        if (resposta.status == 400) {
            throw new Error("retornou 400, requisição mal sucedida")

        }
        if (resposta.status == 204) {
            throw new Error("retornou 204, operação bem sucedida, mas não tem retorno")

        }
        else return null;

    } catch (error) {
        console.log("erro: " + error);
    }
}

export default { enviarDados, enviarComToken };