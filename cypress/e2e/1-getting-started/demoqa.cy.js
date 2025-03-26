describe('test practice', () => {
    it('demoblaze', () => {
       cy.visit('https://demoqa.com') 
        cy.get('[class="card mt-4 top-card"]').eq(1).click()
        cy.get('[class="text"]').eq(9).click()
        cy.wait(3000)
        cy.get('[class=" mr-sm-2 form-control"]').eq(0).type('Umair')
        
       cy.get('[class=" mr-sm-2 form-control"]').eq(1).type('Anwar')
        cy.get('[class="mr-sm-2 form-control"]').type('umairqa@gmail.com')

        
      })
    })

  