

const Page = require('./page');
var rndmStr = require('../utils/RandomNameGenerator')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    get inputFirstName () {return $('[id="customer.firstName"]');}
    get inputLastName () {return $('[id="customer.lastName"]');}
    get inputAddress () {return $('[id="customer.address.street"]');}
    get inputCity () {return $('[id="customer.address.city"]');}
    get inputState () {return $('[id="customer.address.state"]');}
    get inputZipCode () {return $('[id="customer.address.zipCode"]');}
    get inputPhoneNumber () {return $('[id="customer.phoneNumber"]');}
    get inputSsn () {return $('[id="customer.ssn"]');}
    get inputUsername () {return $('[id="customer.username"]');}
    get inputPassword () {return $('[id="customer.password"]');}
    get inputConfirm () {return $('[id="repeatedPassword"]');}
    get btnRegister () {return $('//input[@value="Register"]');}
    get successfulRegistrationMessage () {return $('h1.title');}
    get successfulRegistrationUsername () {return $('//p[text()="Your account was created successfully. You are now logged in."]');}
    get failedRegistrationMessage () {return $('span[class="error"]');}

    async register () {
        await this.inputFirstName.setValue(rndmStr.getRandomString());
        await this.inputLastName.setValue(rndmStr.getRandomString());
        await this.inputAddress.setValue(rndmStr.getRandomString());
        await this.inputCity.setValue(rndmStr.getRandomString());
        await this.inputState.setValue(rndmStr.getRandomString());
        await this.inputZipCode.setValue(rndmStr.getRandomNum());
        await this.inputPhoneNumber.setValue(rndmStr.getRandomNum());
        await this.inputSsn.setValue(rndmStr.getRandomNum());
        await this.inputUsername.setValue(rndmStr.getRandomString());
        var password = rndmStr.getRandomNumericString();
        await this.inputPassword.setValue(password);
        await this.inputConfirm.setValue(password);
        await this.btnRegister.click();
    }

    async clickRegisterBtnOnly () {
        await this.btnRegister.click();
    }

}

module.exports = new RegistrationPage();