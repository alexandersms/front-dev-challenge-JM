context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Product not exist', () => {
        cy.get('.searchProduct')
          .type('gkfjkgjdfkgjkk').should('have.value', 'gkfjkgjdfkgjkk')
        cy.contains('button', 'Search').click()
    })

    it('Search products', () => {
        cy.get('.searchProduct')
          .type('radiant').should('have.value', 'radiant')
        cy.contains('button', 'Search').click()
    })

    it('Send nothing', () => {
      cy.get('.searchProduct')
      cy.contains('button', 'Search').click()
  })

})