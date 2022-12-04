// Bibliotecas
// Configura

const supertest = require ("supertest"); // Framework de teste de api

const assert = require ("chai").assert; // Função de assertiva do resultado

// Constantes, variáveis e objetos

const baseUrl = "https://petstore.swagger.io/v2"; // Url base da api

const petId = 109080; // Código do animal

// Testes

describe ("PetStore Swagger - Store Order", () => { 

    const request = supertest (baseUrl);
    const jsonFile = require ("../../vendors/json/store_order1.json")

    it ("Post Store Order", () => {

         return request 

        .post("/store/order")
        .send(jsonFile)
        .then((response) => {

            assert(response.statusCode, 200)
            assert(response.body.id, petId)
            assert(response.body.complete, true)

        }) 
            
    })

    it ("Get Store Order", () => {

        return request

        .get("/store/order/10")
        .then((response) => {
            
            assert(response.statusCode, 200)
            assert(response.body.id, petId)
            assert(response.body.complete, true)

        })

    })

    it ("Delete Store Order", () => {

        return request

        .delete("/store/order/10")
        .then((response) => {

            assert(response.statusCode, 200)

        })
        
    })

})