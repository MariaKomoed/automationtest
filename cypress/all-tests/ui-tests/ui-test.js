/// <reference types="Cypress" />

import Chance from 'chance'
import SearchResultsPage from "../../page-objects/searchResultsPage"
import AccessoriesPage from "../../page-objects/accessoriesPage"

/*describe ('Test for reqres', () =>{
    it('Positive: Create user', () => {
    cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US')
        cy.get('.header-search-icon').click()
        cy.get('input[aria-label="Search Google Store"]').type(`Google Pixel Buds{enter}`)
        cy.get('a[href="/product/google_pixel_buds"]').should('exist')
             })
             */
describe ('UI test',() => {
    before(() => {
        cy.fixture('product').then(data => {
            cy.wrap(data).as('productData')
        })
    })
    it('Positive: Create user', () => {

            cy.get('@productData').then((productData)=>{

            cy.log("GIVEN User is at Accessories Page")
            AccessoriesPage.open()

            cy.log("When user performs search product by name ")
            AccessoriesPage.performSearch(productData.name)

            SearchResultsPage.getProductByDocId(productData.url)
                .should('exist')
        })
    })
})
