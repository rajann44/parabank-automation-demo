const regPage = require('../../pages/registartion.page')

describe ('Verify registartion failed test', () => {
    it('I am unable to register', async () => {
        await browser.url('/parabank/register.htm');
        await regPage.clickRegisterBtnOnly();
        await expect(regPage.failedRegistrationMessage).toBePresent();
        await expect(regPage.successfulRegistrationUsername).not.toBeDisplayed();
    })
})