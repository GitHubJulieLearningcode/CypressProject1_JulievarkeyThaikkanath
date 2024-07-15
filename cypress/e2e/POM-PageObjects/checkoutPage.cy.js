class CheckoutPage {
    // Define selectors as getters
    get cartLink() {
      return cy.get('[data-test="shopping-cart-link"]');
    }
  
    get checkoutButton() {
      return cy.get('[data-test="checkout"]');
    }
  
    get firstNameField() {
      return cy.get('[data-test="firstName"]');
    }
  
    get lastNameField() {
      return cy.get('[data-test="lastName"]');
    }
  
    get postalCodeField() {
      return cy.get('[data-test="postalCode"]');
    }
  
    get continueButton() {
      return cy.get('[data-test="continue"]');
    }
  
    get finishButton() {
      return cy.get('[data-test="finish"]');
    }

    get continueShopping()
    {
      return cy.get("#continue-shopping");
    }
  
    // Define methods to interact with elements
    goToCart() {
      this.cartLink.should('be.visible').click();
    }
  
    checkout() {
      this.checkoutButton.should('be.visible').click();
    }
  
    fillForm(firstName, lastName, postalCode) {
      this.firstNameField.should('be.visible').type(firstName);
      this.lastNameField.should('be.visible').type(lastName);
      this.postalCodeField.should('be.visible').type(postalCode);
    }
  
    continueCheckout() {
      this.continueButton.should('be.visible').click();
    }
  
    finishCheckout() {
      this.finishButton.should('be.visible').click();
    }
  }
  
  export default new CheckoutPage();