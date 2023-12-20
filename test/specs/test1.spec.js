import { expect } from '@wdio/globals'
describe('Demo', () => {
    it('Demo', async () => {
        await browser.url('https://demo.midtrans.com/')
        const btnBuyNow = await $(".btn.buy")
        await btnBuyNow.click()
        const btnCheckOut = await $("//div[contains(text(),'CHECKOUT')]")
        await browser.pause(2000)
        await btnCheckOut.click()
        await browser.pause(5000)
        let iframeSnapMidtrans = await $("#snap-midtrans")
        console.log('Is iframe existing?', await iframeSnapMidtrans.isExisting());
        await browser.switchToFrame(iframeSnapMidtrans)
        const optionVisa = await $("//img[@alt='VISA']")
        await optionVisa.click()
        let cardNumber = await $("//div[@class='card-number-input-container']/input")
        await cardNumber.setValue('4811111111111114')
        let exDate = await $('#card-expiry')
        let cvv = await $('#card-cvv')
        await exDate.setValue('0125')
        await cvv.setValue('111')
        let btnPaynow = await $("//button[text()='Pay now']")
        await btnPaynow.click()
        let iframeBank = await $(".iframe-3ds")
        await iframeBank.waitForDisplayed({ timeout: 20000, interval: 500 })
        console.log('Is iframe bank existing?', await iframeBank.isExisting());
        await browser.switchToFrame(iframeBank)
        let pass = await $("//input[@type='password']")
        console.log('Is password existing?', await pass.isExisting());
        await pass.waitForDisplayed({ timeout: 20000, interval: 500 })
        await pass.setValue("112233")
        let btnOk = await $("//button[@name='ok']")
        await btnOk.click()
        await browser.pause(2000)
    });
});