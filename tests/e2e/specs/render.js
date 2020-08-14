// Test End-to-End

describe('Visits the app root url', () => {
  it('Title of the Application', () => {
    cy.visit('/')
    cy.contains('h2', 'This is a page for beauty product search')
  })

  it('Contains button', () => {
    cy.visit('/')
    cy.contains('button', 'Search')
  })
})
