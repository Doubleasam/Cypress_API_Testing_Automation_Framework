/// <reference types= "Cypress" />

describe('Get API User test', function () {
    let accessToken = '2a64e716763f35a3f2ead091e23167cc32827e19678bbec7a8818f13ac20c478'
    let baseUrlGetAPI = 'https://gorest.co.in/public/v2/users'

    it ('get users test', function (){
        cy.log('get users test')
        cy.request ({
            method : 'GET',
            url : baseUrlGetAPI,
            headers: {
                'authorization' : 'Bearer' + accessToken
            }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            // expect(res.body.meta.pagination.limit).to.be.equal(20)
        })
    })
})