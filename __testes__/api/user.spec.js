// Bibliotecas
// Configura

const supertest = require ("supertest"); // Framework de teste de api

const assert = require ("chai").assert; // Função de assertiva do resultado

// Constantes, variáveis e objetos

const baseUrl = "https://petstore.swagger.io/v2"; // Url base da api


// Descrição = conjunto de teste ~ classe

describe ("PetStore Swagger - User", () => {

    const request = supertest (baseUrl);

    it("Get User Login", () => {

        // Configura
        username = "fts136";
        password = "109080";

        // Executa
        return request 

            .get("/user/login?username="+ username +"&password="+ password)
            .then ((response) => {

                assert.equal (response.statusCode, 200);
                assert.equal (response.body.code, 200);
                assert.equal (response.body.type, "unknown");
                mensagem = response.body.message;
                frase = mensagem.substring (0, mensagem.indexOf(":") +1);
                console.log ("A frase eh " + frase);
                assert.equal (frase, "logged in user session:");
                token = mensagem.substring (mensagem.indexOf(":") +1);
                console.log ("O token eh " + token);

            });

    });

});























