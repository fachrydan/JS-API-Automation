const assert = require('chai').assert;
const app = require('../../assert')

//Asserting
//Cara assert menggunakan chai

describe('Welcome to test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(), "Welcome to blabla")
    })
})