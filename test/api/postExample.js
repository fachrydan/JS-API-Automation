const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request sample',() => {
    it('Succes Create user', async () => {
        const response = request(baseUrl())
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
        console.log((await response).status)
        console.log((await response).body)
    })

})