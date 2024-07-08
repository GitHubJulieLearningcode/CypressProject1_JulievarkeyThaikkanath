class OrderCompletionPage {
    // Define selectors as getters
    get completionHeader() {
      return cy.get('[data-test="complete-header"]');
    }
  
    // Define methods to interact with elements
    verifyOrderCompletion() {
      this.completionHeader.should('be.visible').should('have.text', 'Thank you for your order!');
    }
  }
  
  export default new OrderCompletionPage();
  