const {expect} = require('chai')
const request = require('supertest')

//ERROR 'Error: no test specified' "test/api/chaiAssert.js"

describe('Post Request example',() => {
    const response = request ('https://petstore.swagger.io/v2')
        .post('/user')
        .send({
            "id": 12345,
            "username": "fachrydan",
            "firstName": "fach",
            "lastName": "rama",
            "email": "fach@gmail.com",
            "password": "fach123",
            "phone": "0812345",
            "userStatus": 1
        })
    
    it('Response status equal to 200', async () => {
        
        expect((await response).status).to.equal(200)
    })

    it('Response body to haveOwnProperty', async () => {
        
        expect((await response).body).to.haveOwnProperty('message')
    })

})