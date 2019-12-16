import Chance from 'chance'
import {createPet, deletePet, getPetById, updatePet} from "../../service/petService"
import {DATA_OPTIONS, getPetRequestData} from "../../utils/requestsDataGenerator";
import {API_URL} from "../../service/apiSettings";

describe('Tests for Update pet endpoint C37', () => {
    it('Positive: Update pet data', () => {
        let initialPetData = getPetRequestData()
        let newPetData = getPetRequestData()
        createPet(initialPetData).then(response => {
            newPetData.id = response.body.id
            updatePet(newPetData).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', newPetData.name);
                expect(response.body).to.have.property('id', newPetData.id);
                expect(response.body).to.have.property('status', newPetData.status);
                expect(response.body.photoUrls).to.deep.equal(newPetData.photoUrls);
                expect(response.body.tags).to.deep.equal(newPetData.tags);
                expect(response.body.category).to.deep.equal(newPetData.category);
            })
        })
    });
    it('Positive: Update pet data - empty body C38', () => {
        let initialPetData = getPetRequestData()
        let newPetData = {}
        createPet(initialPetData).then(response => {
            newPetData.id = response.body.id
            updatePet(newPetData).then(response => {
                expect(response.status).to.eq(200);
            })
        })
    });
    it('Negative: No body in request C28', () => {
        cy.request({method: 'PUT', url: `${API_URL}/pet`, failOnStatusCode: false}).then(response => {
            console.log(response)
            expect(response.status).to.eq(415);
        })
    })
    it('Negative: Update pet with Nonexistent id C29', () => {
        let newPetData = getPetRequestData()
        newPetData.id = Chance().string({length: 50, pool: "0123456789"})
        updatePet(newPetData, false).then(response => {
            expect(response.status).to.eq(404);
            expect(response.status).to.eq(404, 'Not found');
        })
    });
    it('Negative: Invalid pet ID (empty) C30', () => {
        let requestData = getPetRequestData()
        requestData.id = ''
        updatePet(requestData, false).then(response => {
            expect(response.status).to.eq(404);
            expect(response.status).to.eq('Not found');
            cy.writeFile("body.txt", response);
        })

    })
    it('Negative: Invalid pet Id (string instead of integer) C31', () => {
        let requestData = getPetRequestData()
        requestData.id = 'anyString'
        updatePet(requestData, false).then(response => {
            expect(response.status).to.eq(404);
            expect(response.status).to.eq('Not found');
        })
    })

    it('Negative: Invalid pet status (numeric instead of valid string value) C32', () => {
        let requestData = getPetRequestData()
        requestData.status = 1
        updatePet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Invalid pet status value');
        })
    })
    it('Negative: Invalid tag name (numeric instead of valid string value) C33', () => {
        let requestData = getPetRequestData()
        requestData.tags[0].name = 2
        updatePet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Invalid tag name value');
        })
    })

    it('Negative: Invalid pet id (string valid instead of numeric value) C34', () => {
        let requestData = getPetRequestData()
        requestData.id = Chance().string()
        updatePet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Invalid tag name value');
        })
    })
    it('Negative: Invalid tag id (string valid numeric value) C35', () => {
        let requestData = getPetRequestData()
        requestData.tags[0].id = Chance().string()
        updatePet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Bad Request');
        })
    })
    it('Negative: Invalid category id (string valid numeric value) C36', () => {
        let requestData = getPetRequestData()
        requestData.category.id = Chance().string()
        updatePet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Bad Request');
        })
    })

    it('Negative: Length of name field exceeds the max value C23', () => {
        let dataSet=getPetRequestData(PET_LIMIT, true);
        dataSet.name= Chance().string({length: PET_LIMIT.name.max + 1});
        createPet(dataSet, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldName).to.eq(`${PET_LIMIT.name}`);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.name.min} and ${PET_LIMIT.name.max}`);
        })
    });

    it('Negative: Length of category field exceeds the max value C24', () => {
        let dataSet=getPetRequestData(PET_LIMIT, true);
        dataSet.category.name = Chance().string({length: PET_LIMIT.category.name.max + 1});

        createPet(dataSet, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldName).to.eq(`${PET_LIMIT.category.name}`);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.category.name.min} and ${PET_LIMIT.category.name.max}`);
        })
    });
    it('Negative: Length of photoUrls field exceeds the max value C25', () => {
        let dataSet=getPetRequestData(PET_LIMIT, true);
        dataSet.photoUrls=fillUrls(PET_LIMIT.photoUrls.urlCount.max+1);
        createPet(dataSet, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldName).to.eq(`${PET_LIMIT.photoUrls.urlCount}`);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.photoUrls.urlCount.min} and ${PET_LIMIT.photoUrls.urlCount.max}`);
        })
    })
    it('Negative: Length of tags field exceeds the max value C26', () => {
        let dataSet=getPetRequestData(PET_LIMIT, true);
        dataSet.tags=fillTags(PET_LIMIT.tags.name.max+1)
        createPet(dataSet, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldName).to.eq(`${PET_LIMIT.tags.name}`);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.tags.name.min} and ${PET_LIMIT.tags.name.max}`);
        })
    })
});

