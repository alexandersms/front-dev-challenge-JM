context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Product not exist', () => {
        cy.get('.searchProduct')
          .type('gkfjkgjdfkgjkk').should('have.value', 'gkfjkgjdfkgjkk')
    })

    it('Search products', () => {
        cy.get('.searchProduct')
          .type('radiant').should('have.value', 'radiant')
    })

})