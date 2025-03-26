/// <reference types="cypress" />

describe('ellements', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })
      beforeEach (()=> {
        cy.visit('https://demoqa.com/elements')

      })
    it('Add data', () => {
        cy.get('#item-3').eq(0).click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Alden')
        cy.get('#firstName').should('have.value', 'Alden')
        cy.get('#lastName').type('Cantrell')
        cy.get('#lastName').should('have.value', 'Cantrell')
        cy.get('#userEmail').type('test@test.com')
        cy.get('#userEmail').should('have.value', 'test@test.com')
        cy.get('#age').type('30')
        cy.get('#age').should('have.value', '30')
        cy.get('#salary').type('12345')
        cy.get('#salary').should('have.value', '12345')
        cy.get('#department').type('QA')
        cy.get('#department').should('have.value', 'QA')
        cy.get('#submit').click()
        cy.get('#submit').should('be.visible')
    })
    it('Edit data', () =>{
        cy.get('#item-3').eq(0).click()
        cy.get('#edit-record-2').click()
        cy.get('#firstName').clear()
        .type('Gerimedica')
        cy.get('#firstName').should('have.value', 'Gerimedica')
        cy.get('#lastName').clear().type('BV')
        cy.get('#lastName').should('have.value', 'BV')
        cy.get('#submit').click()
        cy.get('#submit').should('be.visible')

    })
        
    })

