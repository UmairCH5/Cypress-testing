describe('login functionality', () => {
    it('swaglabs', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').eq(0).type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[class="inventory_item_name "]').eq(0).click()
        cy.get('#add-to-cart').click()
        cy.get('[class="shopping_cart_link"]').click()

    })
})