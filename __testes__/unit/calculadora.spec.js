// Bibliotecas

// Apontamento para o arquivo de desenvolvimento para teste

const calculadora = require ("../../src/calculadora.js");

// Apontamento para o arquivo de massa de teste

const arquivoJson = require ("../../vendors/csv/massaDivisao");

// Funções de teste de unidade

test ("Somar 5 + 7", () => {

    // 1. Configura
    // 1.1 Dados de entrada

    const num1 = 5;
    const num2 = 7;

    //1.2 Resultado esperado

    const resultadoEsperado = 12;

    // 2. Executa

    const somarDoisNumeros = calculadora.somarDoisNumeros;

    // 3. Valida

    expect(somarDoisNumeros(num1, num2)).toBe(resultadoEsperado);

})

test ("Subtratir 15 - 7", () => {

    // 1. Configura / Arrange

    // Entradas
    const num1 = 15;
    const num2 = 7;

    //Saídas
    const resultadoEsperado = 8;

    // 2. Executa / Act

    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;

    const resultadoAtual = subtrairDoisNumeros(num1, num2);

    // 3. Valida / Assert

    expect(resultadoAtual).toBe(resultadoEsperado);

})

test ("Multiplicar 5 * 5", () => {

    // 1. Configura / Arrange

    // Entradas
    const num1 = 5;
    const num2 = 5;

    //Saídas
    const resultadoEsperado = 25;

    // 2. Executa / Act

    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;

    const resultadoAtual = multiplicarDoisNumeros(num1, num2);

    // 3. Valida / Assert

    expect(resultadoAtual).toBe(resultadoEsperado);

})

test ("Dividir 10 / 2", () => {

    // 1. Configura / Arrange

    // Entradas
    const num1 = 10;
    const num2 = 2;

    //Saídas
    const resultadoEsperado = 5;

    // 2. Executa / Act

    const dividirDoisNumeros = calculadora.dividirDoisNumeros;

    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3. Valida / Assert

    expect(resultadoAtual).toBe(resultadoEsperado);

})

// Data Driven Test (DDT)

let massaDivisao = [

    [10, 5, 2],
    [15, 5, 3],
    [60, 10, 6],
    [7, 0, Infinity]

];


test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {

    // 1. Configura / Arrange

    // Dados de entrada e saída são providos pela lista massaDivisao

    // 2. Executa / Act

    const dividirDoisNumeros = calculadora.dividirDoisNumeros;

    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3. Valida / Assert

    expect(resultadoAtual).toBe(resultadoEsperado);

})


test.each(arquivoJson.array.map(elemento => [

    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado

]))

("DDT: Dividir %f / %f", (num1, num2, resultadoEsperado) => {

    // 1. Configura / Arrange

    // 2. Executa / Act

    const dividirDoisNumeros = calculadora.dividirDoisNumeros;

    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3. Valida / Assert

    expect(resultadoAtual).toBe(resultadoEsperado);

})