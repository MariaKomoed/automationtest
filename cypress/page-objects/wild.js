class Wild
{

    open() {
        cy.fixture('wild').then(data => {
            cy.visit(data.url)
        });
    }


    addItemToCard(item) {
        cy.get("#tbSrch").type(item + `{enter}`);
        cy.get(".thumbnail").click();
        cy.get(".j-add-to-card").click();

    }

    openCard()
    {
        cy.get(".j-go-to-basket").click();
    }

    checkItemsOnCard()
    {

    }

    increaseCountOfItems()
    {
        cy.get(".plus").click();
    }

}

export default new Wild();