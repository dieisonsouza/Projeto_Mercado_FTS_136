// Bibliotescas

const { Builder, By } = require('selenium-webdriver')
require('chromedriver')
const assert = require('assert')

// Suite de teste
describe('Comprar Passagem WD', () => {
    let driver      // objeto para ser o selenium

    // Inicialização
    beforeEach(async() => { // async function ()

        driver = await new Builder()
            .forBrowser('chrome')
            .build()
        driver.manage().setTimeouts({ implicit: 60000 })  
        driver.manage().window().maximize()

    })

    // Finalização
    afterEach(async() => {

        await driver.quit()

    })

    // Teste
    it('Comprar Passagem SP - CA', async() => {

        await driver.get('https://www.blazedemo.com')
        {
            const dropdown = await driver.findElement(By.name('fromPort'))
            await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }

        {
            const dropdown = await driver.findElement(By.name('toPort'))
            await dropdown.findElement(By.xpath("//option[. = 'Cairo']")).click()
        }

            // Espera bruta - retirar antes de usar
            // await driver.sleep(1000) // 1 segundos

            // Clicar no botão find flights 
            await driver.findElement(By.css('input.btn.btn-primary')).click()

            // Validar o titulo da guia e a frase de titulo da seleção dos vôos
            console.log("Get Title = " + await driver.getTitle())  // aparece o que está no getTitle
            
            assert(await driver.getTitle() == 'BlazeDemo - reserve')
        
            assert(await driver.findElement(By.xpath('//h3')).getText() == 'Flights from São Paolo to Cairo:')

    })

})

















