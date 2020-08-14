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
          .type('cream')
        cy.wait(3500)
        cy.get('body').trigger('keypress', {keycode: 192, release: false})
        cy.wait(3000)
    })

    it('Send nothing', () => {
      cy.get('.searchProduct')
      cy.contains('button', 'Search').click()
  })

})