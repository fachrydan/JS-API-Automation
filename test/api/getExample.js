const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request sample',() => {
    it('Find pets by status', async () => {
        const response = request(baseUrl())
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })

})