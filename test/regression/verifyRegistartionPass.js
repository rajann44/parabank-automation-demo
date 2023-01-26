const regPage = require('../../pages/registartion.page')

describe ('Verify Successful registartion test', () => {
    it('I am able to register', async () => {
        await browser.url('/parabank/register.htm');
        await regPage.register();
        await expect(regPage.successfulRegistrationMessage).toBePresent()
        await expect(regPage.successfulRegistrationUsername).toBePresent()
    })
})