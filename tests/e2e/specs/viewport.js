context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Set the viewport size and dimension', () => {
        cy.viewport(320, 480)

        //large screen
        cy.viewport(2999, 2999)
        
        // viewport change
        cy.viewport('macbook-15')
        cy.wait(300)

        cy.viewport('macbook-13')
        cy.wait(300)

        cy.viewport('macbook-11')
        cy.wait(300)

        cy.viewport('ipad-2')
        cy.wait(300)

        cy.viewport('ipad-mini')
        cy.wait(300)

        cy.viewport('iphone-6+')
        cy.wait(300)

        cy.viewport('iphone-6')
        cy.wait(300)

        cy.viewport('iphone-5')
        cy.wait(300)

        cy.viewport('iphone-4')
        cy.wait(300)

        cy.viewport('iphone-3')
        cy.wait(300)

        // orientation of screen 
        // default orientation is portrait
        cy.viewport('ipad-2', 'portrait')
        cy.wait(300)

        cy.viewport('iphone-4', 'landscape')
        cy.wait(300)
        
    })

})