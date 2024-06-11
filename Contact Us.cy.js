describe('Contact Us Form Submission Test', () => {
    it('should display error message on submission without Message field', () => {
      // Visit the Tendable website
      cy.visit('https://www.tendable.com/');
  
      // Find and click on the "Contact Us" link
      cy.contains('Contact Us').click();
  
      // Ensure the Contact Us section is visible
      cy.get('.section-contact-us').should('be.visible');
  
      // Choose "Marketing" option
      cy.get('[name="field[contact_us_type]"]').select('Marketing');
  
      // Fill out the form excluding the "Message" field
      cy.get('[name="field[first_name]"]').type('John');
      cy.get('[name="field[last_name]"]').type('Doe');
      cy.get('[name="field[email]"]').type('john.doe@example.com');
      cy.get('[name="field[phone]"]').type('1234567890');
  
      // Submit the form
      cy.contains('Submit').click();
  
      // Check if the error message is displayed
      cy.contains('Message is required').should('be.visible');
  
      // Mark the test as PASS
      cy.log('Test Passed: Error message displayed for missing Message field');
    });
  });
  