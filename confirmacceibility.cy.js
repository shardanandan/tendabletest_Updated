describe('Accessibility of top-level menus', () => {
    beforeEach(() => {
      cy.visit('https://www.tendable.com')
    })
  
    it('should confirm accessibility of Home menu', () => {
      cy.contains('Home').click()
      cy.url().should('include', '/home')
    })
  
    it('should confirm accessibility of Our Story menu', () => {
      cy.contains('Our Story').click()
      cy.url().should('include', '/our-story')
    })
  
    it('should confirm accessibility of Our Solution menu', () => {
      cy.contains('Our Solution').click()
      cy.url().should('include', '/our-solution')
    })
  
    it('should confirm accessibility of Why Tendable menu', () => {
      cy.contains('Why Tendable').click()
      cy.url().should('include', '/why-tendable')
    })
  })
  