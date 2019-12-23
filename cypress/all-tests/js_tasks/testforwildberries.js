import Wild from "../../page-objects/wild"

describe('UI - test Practice', () => {


    it('Test single item', () => {
        cy.fixture('wild').then(data => {
            Wild.open();
            Wild.addItemToCard(data.firstItem);
            Wild.openCard();
            cy.get('.item-in-basket').eq(0).invoke('text')
                .should('contain', data.firstItem);
        })
    });

    it('Test change count of items', () => {
        cy.fixture('wild').then(data => {
            Wild.open();
            Wild.addItemToCard(data.firstItem);
            Wild.openCard();
            cy.get('.item-in-basket').eq(0).invoke('text')
                .should('contain', data.firstItem);
            Wild.increaseCountOfItems();
            cy.get('.flRight').should(($this) => {
                expect($this).to.contain('2')
            });
        })

    });

    it('Test multiple items', () => {

        cy.fixture('wild').then(data => {
            Wild.open();
            Wild.addItemToCard(data.firstItem);
            Wild.addItemToCard(data.secondItem);
            Wild.openCard();
            cy.get('.item-title-good').eq(0).invoke('text')
                .should('contain', data.secondItem)
            cy.get('.item-title-good').eq(1).invoke('text')
                .should('contain', data.firstItem)
        })
    });
})