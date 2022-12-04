// Apontar para o arquivo de desenvolvimento que deseja testar
const { expect, assert } = require("chai")
const areas = require ("../../src/areas")

// Apontar para os arquivos de massa de teste
const massaQuadrado = require("../../vendors/json/massaQuadrado")

// Funções de teste 
test ("Area do Quadrado Simples - Lado Valido", () => {

    // Configura
    const lado = 5
    const resultadoEsperado = 25
    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado

    // Executa
    let resultadoAtual = calcularAreaDoQuadrado(lado)

    // Valida
    assert(resultadoAtual) == (resultadoEsperado)

})

test ("Area do Retangulo Simples", () => {

    const largura = 4
    const comprimento = 7
    const resultadoEsperado = 28
    let calcularAreaDoRetangulo = areas.calcularAreaDoRetangulo

    let resultadoAtual = calcularAreaDoRetangulo(largura, comprimento)

    assert(resultadoAtual) == (resultadoEsperado)

})

test ("Area do Quadrado Simples - Lado Zero", () => {

    const lado = 0
    const resultadoEsperado = "Por favor, informe o tamanho de lado válido"
    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado

    let resultadoAtual = calcularAreaDoQuadrado(lado)

    assert(resultadoAtual) == (resultadoEsperado)

})

test ("Area do Quadrado Simples - Lado Nulo", () => {

    const lado = null
    const resultadoEsperado = "Por favor, informe o tamanho de lado válido"
    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado

    let resultadoAtual = calcularAreaDoQuadrado(lado)

    assert(resultadoAtual) == (resultadoEsperado)

})

// Teste com lista

let listaLados = [

[6, 36],
[0, "Por favor, informe o tamanho de lado válido"],
[-1, "Por favor, informe o tamanho de lado válido"],
[null, "Por favor, informe o tamanho de lado válido"]

]

test.each(listaLados) ("Area do Quadrado Lendo Lista - Lado %f", (lado, resultadoEsperado) => {

    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado

    let resultadoAtual = calcularAreaDoQuadrado(lado)

    assert(resultadoAtual) == (resultadoEsperado)

})

test.each(massaQuadrado.array.map(elemento => [

    elemento.lado,
    elemento.resultadoEsperado

]))

("Area do Quadrado Lendo Massa - Lado %f", (lado, resultadoEsperado) => {

    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado

    let resultadoAtual = calcularAreaDoQuadrado(lado)

    assert(resultadoAtual) == (resultadoEsperado)

})