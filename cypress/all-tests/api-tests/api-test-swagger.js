import Chance from 'chance'

describe('Test for swagger', () => {
    before(() => {
    })
    it('Positive: Create user', () => {
        cy.fixture('user').then(user => {
            cy.request('POST', '/api/users', user).then(response => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', user.name)
                expect(response.body).to.have.property('id', user.id)
            })
        })
    })

    let testingData = [
        { //все поля, которые мы отправляем на сервер, все данные о питомце  post запрос
            description: "All fields have max values",
            requestData: {
                id: Chance().integer({length: 10}),
                category: {
                    id: Chance().integer({length: 10}),
                    name: Chance().string({length: 50})
                },
                name: Chance().string({length: 100}),
                photoUrls: generatePhotoUrl(10),
                tags: [
                    {
                        id: Chance().integer({length: 10}),
                        name: Chance().string({length: 50})
                    }
                ],
                status: Chance().pickone(['available', 'pending', 'sold'])
            }
        }
        /*{
            description: " values",
            requestData:{
                name: Chance().string({length:10}),
                id: Chance().integer({length:1})}
        }*/
    ]

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create user ${description}`, () => {
            cy.request('POST', '/api/users', requestData).then(response => {
                console.log(response)
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', requestData.name)
                expect(response.body).to.have.property('id', requestData.id)
            })
        })
    })


    it('Negative: POST request - login unsuccessful Create user', () => {
        cy.request({
            method: 'POST', url: '/api/login', failOnStatusCode: false, body:
                {
                    "email": "peter@klaven"
                }
        }).then(response => {
            expect(response.status).to.eq(400)
        })
    })
})

function generatePhotoUrl(count){
    let url=[];
    for (let i=0; i<count; i++){
        url [i]=Chance().url();
    }
    return url;
}