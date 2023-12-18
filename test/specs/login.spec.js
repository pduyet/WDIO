import LoginPage from '../pages/login.page.js'

describe('SauceDemo', () => {
    it('Login test', async () => {
        browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
        browser.pause(2000)
    })
})