class WildPage {

    open()
    {
        cy.visit('https://www.wildberries.by//');
    }

    putGoodsInBasket()
    {
        cy.get("#top-s").click().type("Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл");
        cy.get('.top-panel__search__btn').click();
        cy.get('.addtocart-btn').click();
    }

    checkItemInBasket()
    {
        cy.get('.top-panel__userbar__cart__item').click();
        // cy.get('.goods-table-cell__line_title').should(($this) => {
        //     expect($this).to.contain(`Constant Delight / Эликсир многофункциональный 12 в 1, 200 мл`)
        // });
    }

    checkCountOfItemsInBasket(count)
    {
        cy.get('.deal-form-main__sub').should(($this) => {
            expect($this).to.contain(`Итого ${count}`)
        });
    }

    clearBasket() //didnt work
    {
        cy.get('.top-panel__userbar__cart__item').click();
        cy.get('.checkAll').click();
        cy.get('.i-button_small').contains('Удалить').click(2);
        cy.get('i-button_small').contains('Да, удалить').click(); //cant get
    }

    changeCountOfGoods(count)
    {
        this.open();
        this.putGoodsInBasket();
        this.checkItemInBasket();

        cy.get('.i-amount-select').click();

        if(count < 10)
        {
            cy.get('.i-amount-select__value').contains(count).click();
            this.checkCountOfItemsInBasket(count);
        }
        else
        {
            cy.get('.i-amount-select__value').contains('10+').click();
            cy.get('.i-input_value').type(count);
            this.checkCountOfItemsInBasket(count);
        }
        //   this.clearBasket();
    }



}
export default new WildPage();