import wildPage from "../../page-objects/wildPage"
import Chance from "chance";

describe('UI - test Practice', () => {

    // it('Test', () => {
    //     cy.visit("https://www.wildberries.by/");
    //     cy.get("#tbSrch").type(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл{enter}`);
    //     cy.get(".thumbnail").click();
    //     cy.get(".j-add-to-card").click();
    //     cy.get(".j-go-to-basket").click();
    //     cy.get('.item-in-basket').should(($this) => {
    //         expect($this).to.contain(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл`)
    //     });


    });
    it('Test', () => {
        cy.visit("https://www.wildberries.by/");
        cy.get("#tbSrch").type(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл{enter}`);
        cy.get(".thumbnail").click();
        cy.get(".j-add-to-card").click();
        cy.get(".j-go-to-basket").click();
        cy.get('.item-in-basket').should(($this) => {
            expect($this).to.contain(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл`)
        });
        cy.get(".plus").click();
        cy.get('.in_tb numeric ignore valid').should(($this) => {
            expect($this).to.contain(`2`)
        });



    });


