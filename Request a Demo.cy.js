describe('Tenable Website Test', () => {
    it('Should verify "Request a Demo" button on top-level menu pages', () => {
        const pages = [
            '/',
            '/solutions',
            '/products',
            '/community',
            '/partners',
            '/about'
        ];

        // Visit each top-level menu page
        pages.forEach(page => {
            cy.visit(page);
            
            // Assert that the "Request a Demo" button is present and visible
            cy.get('.btn__nav--outline').contains('Request a Demo').should('be.visible');

            // Click on the "Request a Demo" button
            cy.get('.btn__nav--outline').contains('Request a Demo').click();

            // Assert that the user is redirected to the demo request page
            cy.url().should('include', '/demo');
        });
    });
});
