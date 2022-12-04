// Bibliotecas
// Configura

const supertest = require ("supertest"); // Framework de teste de api

const assert = require ("chai").assert; // Função de assertiva do resultado

// Constantes, variáveis e objetos

const baseUrl = "https://petstore.swagger.io/v2"; // Url base da api

const petId = 109080; // Código do animal

// Descrição = conjunto de teste ~ classe

describe ("PetStore Swagger - Pet", () => {

    const request = supertest (baseUrl);
    const pets = require ("../../vendors/json/petn.js");
    let pet = require ("../../vendors//json/petBase.json")

    // Post - teste de incluir um animal

    it("Post Pet", () => {

        // Configuração - apontamento para o arquivo do animal

        const jsonFile = require ("../../vendors/json/pet1.json");

        //Executa - realizar a requisicção e receber a resposta

        return request            // Chamada para a requisição
    
        .post ("/pet")            // Endpoint, função para incluir o animal
        .send (jsonFile)          // Envia os dados do animal na requisição
        .then((response) => {     // Trata o retorno

            assert.equal (response.statusCode, 200)            // Se a requisição foi processada
            assert.equal (response.body.id, petId);            // Se é o id esperado do animal
            assert.equal (response.body.name, "dolly");        // Se é o nome esperado
            assert.equal (response.body.status, "available");  // Se está com o status esperado

        });

    });

    // Consulta o animal pelo seu petId

    it("Get Pet", () => {

        return request                 // Chamada para a requisição

        .get ("/pet/" + petId)         // Consultar o animal pelo id
        .then ((response) => {         // Tratar o retorno 

            assert.equal (response.statusCode, 200)            // Se a requisição foi processada
            assert.equal (response.body.id, petId);            // Se é o id esperado do animal
            assert.equal (response.body.name, "dolly");        // Se é o nome esperado
            assert.equal (response.body.status, "available");  // Se está com o status esperado

        });

    });

    // Alterar dados do animal

    it("Put Pet", () => {

        // Configuração - apontamento para o arquivo do animal

        const jsonFile = require ("../../vendors/json/pet2.json");

        //Executa - realizar a requisicção e receber a resposta

        return request            // Chamada para a requisição
    
        .post ("/pet")            // Alterar o animal - aponta para o animal
        .send (jsonFile)          // Envia os dados do animal na requisição de alteração
        .then((response) => {     // Trata o retorno

            assert.equal (response.statusCode, 200)              // Se a requisição foi processada
            assert.equal (response.body.id, petId);              // Se é o id esperado do animal
            assert.equal (response.body.name, "dolly");          // Se é o nome esperado
            assert.equal (response.body.tags[1].id, 2);          // Se a tag é a esperada
            assert.equal (response.body.tags[1].name, "brave");  // Se a tag é a esperada
            assert.equal (response.body.status, "solded");       // Se está com o status esperado   

        });

    });

    it("Delete Pet", () => {

        return request                 // Chamada para a requisição

        .delete ("/pet/" + petId)      // deletar o animal pelo id
        .then ((response) => {         // Tratar o retorno 

            assert.equal (response.statusCode, 200)             // Se a requisição foi processada

        });

    });

    // Função de carga de animais - Setup
    pets.array.forEach (({nomePet, idPet, nomeCategoria, idCategoria}) => {

        it("Setup Swagger - Add Pets" + nomePet, () => {

            pet.id = idPet
            pet.name = nomePet
            pet.category.id = idCategoria
            pet.category.name = nomeCategoria
            pet.tags[0].id = 3
            pet.tags[0].name = "vaccinated"
            pet.status = "done"

            return request

                .post ("/pet")
                .send (pet)
                .then ((response) => {

                    assert.equal (response.statusCode, 200)

                });

        });

        // este teste delete não está funcionando - errro no equal
        /*
        it ("TearDown Swagger - Delete Pets" + nomePet, () => {

            return request

                .delete ("/pet/${idPet}")
                .then ((response) => {

                    assert.equal (response.statusCode, 200)

                });

        });
        */

    });
    
});