/// <reference types="cypress" />


describe('demoqa', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Forms', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Umair')
        cy.get('#firstName').should('have.value', 'Umair')
        cy.get('#lastName').type('Anwar')
        cy.get('#lastName').should('have.value', 'Anwar')
        cy.get('[class="mr-sm-2 form-control"]').type('umairch.qa@gmail.com')
        cy.get('[class="mr-sm-2 form-control"]').should('have.value', 'umairch.qa@gmail.com')
        cy.get('[class="custom-control-label"]').eq(0).click()
        cy.get('[class=" mr-sm-2 form-control"]').eq(2).type('3126646427')
        cy.get('[class=" mr-sm-2 form-control"]').eq(2).should('have.value', '3126646427')
        cy.get('#dateOfBirthInput')
        .invoke('val', '24 Mar 2025').trigger('change')
        cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]').type('English').click()
        cy.get('.custom-control-label').eq(3).click({force: true})
        cy.get('.form-control-file').click().selectFile('/Users/air/Desktop/ss.png')
        cy.get('#currentAddress').type('Lahore,Pakistan')
        cy.get('#state').click().type('Haryana{enter}')
        cy.get('#city').click().type('Agra{enter}')
        cy.wait(5000)
        cy.get('#submit').should('be.visible').click({ force: true });

    })
})