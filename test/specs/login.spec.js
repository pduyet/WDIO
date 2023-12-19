import { expect } from '@wdio/globals'
import LoginPage from '../pages/login.page.js'
import InventoryPage from '../pages/inventory.page.js'

describe('SauceDemo', () => {
    it('Login test', async () => {
        await browser.url('https://www.saucedemo.com/')
        await browser.maximizeWindow()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.container).toBeDisplayed()
        await expect(InventoryPage.listItem).toBeDisplayed()
        await InventoryPage.buyRandomTwoItems()

        await browser.pause(2000)
    })
})