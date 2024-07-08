
class LoginPage
{
   // Define selectors as getters
   get usernametextbox()
   {
      return cy.get("#user-name")
   }
   get passwordtextbox()
   {
      return  cy.get("#password")
   }
   get submitbutton()
   {
      return cy.get("#login-button")

   }
   get loginbutton()
   {
      return cy.get(".app_logo")
   }
   get errormessage()
   {
      return cy.get('[data-test="error"]')
   }

 // Define methods to interact with elements

   LogintoURl()
   {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.visit("https://www.saucedemo.com")
   }
   
   setUserName(username)
   {
      this.usernametextbox.type(username);
   }
   setPassWord(password)
   {
     this.passwordtextbox.type(password);
   }
   clickSubmit()
   {
     this.submitbutton.click();
   }
   verifyLogin()
   {
    this.loginbutton.contains("Swag Labs")
   }
   CheckErrorMessage()
   {
      this.errormessage.should('contain',"Epic sadface: Sorry, this user has been locked out.")
   }
   LoginPage()
   {

   }
}
export default LoginPage;