const crypto = require('crypto')

class RandomNameGenerator {

    getRandomNumericString(){
        return crypto.randomBytes(10).toString('hex')
        //return crypto.randomBytes(10).toString('base64');
    }

    getRandomString(){
        return Math.random().toString(36).substring(3,9)
    }

    getRandomNum(){
        return Math.floor((Math.random()*10000) + 1)
    }

}

module.exports = new RandomNameGenerator();