describe('test practice', () => {
    it('demoblaze', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').eq(0).type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get('[class="btn btn_primary btn_small btn_inventory "]').eq(0).click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Umair')
        cy.get('#last-name').type('Anwar')
        cy.get('#postal-code').type('1234')
        cy.get('#continue').click()
        cy.get('[class="btn btn_action btn_medium cart_button"]').click()
        cy.get('#back-to-products').click()

        

    })
})