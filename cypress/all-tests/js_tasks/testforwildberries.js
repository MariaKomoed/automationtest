describe('UI - test Practice', () => {

    it('Test single item', () => {
        cy.visit("https://www.wildberries.by/");
        cy.get("#tbSrch").type(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл{enter}`);
        cy.get(".thumbnail").click();
        cy.get(".j-add-to-card").click();
        cy.get(".j-go-to-basket").click();
        cy.get('.item-in-basket').should(($this) => {
            expect($this).to.contain(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл`)
        });


    });

    it('Test change count of items', () => {
        cy.visit("https://www.wildberries.by/");
        cy.get("#tbSrch").type(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл{enter}`);
        cy.get(".thumbnail").click();
        cy.get(".j-add-to-card").click();
        cy.get(".j-go-to-basket").click();
        cy.get('.item-in-basket').should(($this) => {
            expect($this).to.contain(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл`)
        });
        cy.get(".plus").click();
        cy.get('.flRight').should(($this) => {
            expect($this).to.contain('2')
        });


    });

    it('Test multiple items', () => {
        cy.visit("https://www.wildberries.by/");
        cy.get("#tbSrch").type(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл{enter}`);
        cy.get(".thumbnail").click();
        cy.get(".j-add-to-card").click();


        cy.get("#tbSrch").type(`ПонтиПарфюм / Парфюмерная вода "Imperatrice Atlantis 13" 50 мл{enter}`);
        cy.get(".thumbnail").click();
        cy.get(".j-add-to-card").click();


        cy.get(".j-go-to-basket").click();
        cy.get('.first').should(($this) => {
            expect($this).to.contain(`ПонтиПарфюм / Парфюмерная вода "Imperatrice Atlantis 13" 50 мл`)
            expect($this).to.contain(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл`)
        });

    });

});