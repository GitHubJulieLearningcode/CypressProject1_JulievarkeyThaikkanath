import LoginPage from "../POM-PageObjects/LoginPage.cy";
import Itemspage from "../POM-PageObjects/ItemsListPage.cy";
import checkoutPage from "../POM-PageObjects/checkoutPage.cy";
import OrderCompletionPage from "../POM-PageObjects/OrderCompletionPage.cy";
import { getRandomNumber } from "../Utils/utils.cy";
import { getRandomString } from "../Utils/utils.cy";
describe("Login Page Test Suit",()=>
    {
        
        it("Test Case 1:Login using standard User",()=>
        { 
           const ln= new LoginPage();
           ln.LogintoURl();
           ln.setUserName("standard_user");
           ln.setPassWord("secret_sauce");
           ln.clickSubmit();
           ln.verifyLogin();
           
          
        })
        it("Login Using locked_out_user",()=>
        {
            const ln= new LoginPage();
            ln.LogintoURl();
            ln.setUserName("locked_out_user");
            ln.setPassWord("secret_sauce");
            ln.clickSubmit();
            ln.CheckErrorMessage();
            
        })
        it("Login Using problem_user",()=>
            {
                const ln= new LoginPage();
                ln.LogintoURl();
                ln.setUserName("problem_user");
                ln.setPassWord("secret_sauce");
                ln.clickSubmit();
                ln.verifyLogin();
                // Visual testing required-pending
           
                
            })
        it("Login Using performance_glitch_user ",()=>
            {
                    const ln= new LoginPage();
                    ln.LogintoURl();
                    ln.setUserName("performance_glitch_user");
                    ln.setPassWord("secret_sauce");
                    ln.clickSubmit();
                    ln.verifyLogin();
                    
               
                    
             })
        it("Login Using error_user ",()=>
                {
                    const ln= new LoginPage();
                    ln.LogintoURl();
                    ln.setUserName("error_user");
                    ln.setPassWord("secret_sauce");
                    ln.clickSubmit();
                    ln.verifyLogin();
                    
               
                    
                })
         it("Login Using visual_user ",()=>
                {
                        const ln= new LoginPage();
                        ln.LogintoURl();
                        ln.setUserName("visual_user");
                        ln.setPassWord("secret_sauce");
                        ln.clickSubmit();
                        ln.verifyLogin();
                        
                   
                        
                 })
    
            
    
    
    })
describe("Test Suit for items page",()=>
{      const pn= new Itemspage() ;
    it("Filter items by Name(A-z)",()=>
    {
    
       const ln= new LoginPage();
       ln.LogintoURl();
       ln.setUserName("standard_user");
       ln.setPassWord("secret_sauce");
       ln.clickSubmit();
       ln.verifyLogin();
       pn.applyfilter("Name (A to Z)");
       pn.verifyfilter("Alpha","Asc");
      
        
    })
    it("Filter items by Name(Z-A)",()=>
        {
        
           const ln= new LoginPage();
           ln.LogintoURl();
           ln.setUserName("standard_user");
           ln.setPassWord("secret_sauce");
           ln.clickSubmit();
           ln.verifyLogin();
           pn.applyfilter("Name (Z to A)");
           pn.verifyfilter("Alpha","Dec");
      
        })
    it("Filter items by Price (low to high)",()=>
         {
            
               const ln= new LoginPage();
               ln.LogintoURl();
               ln.setUserName("standard_user");
               ln.setPassWord("secret_sauce");
               ln.clickSubmit();
               ln.verifyLogin();
               pn.applyfilter("Price (low to high)");
               pn.verifyfilter("price","Asc");
          
        }) 
        it("Filter items by Price (high to low)",()=>
            {
            
               const ln= new LoginPage();
               ln.LogintoURl();
               ln.setUserName("standard_user");
               ln.setPassWord("secret_sauce");
               ln.clickSubmit();
               ln.verifyLogin();
               pn.applyfilter("Price (high to low)");
               pn.verifyfilter("price","Dec");
          
            })    
        it("Verify About on Menu bar",()=>
        {
            const ln= new LoginPage();
            ln.LogintoURl();
            ln.setUserName("standard_user");
            ln.setPassWord("secret_sauce");
            ln.clickSubmit();
            ln.verifyLogin();
            pn.hamburgerMenu('About')
            

        })
        it("verify Logout on Menu bar",()=>
        {
            
            const ln= new LoginPage();
            ln.LogintoURl();
            ln.setUserName("standard_user");
            ln.setPassWord("secret_sauce");
            ln.clickSubmit();
            ln.verifyLogin();
            pn.hamburgerMenu('Logout')
          
            

        }) 
        it("verify Add to Cart buttons on items list",()=>
        {    const ln= new LoginPage();
            ln.LogintoURl();
            ln.setUserName("standard_user");
            ln.setPassWord("secret_sauce");
            ln.clickSubmit();
            ln.verifyLogin();
            pn.addtoCart(1);
            
        

        })  
        it("verify cart button by add 1 items",()=>
            {   
                const firstName = getRandomString(5); 
                const lastName = getRandomString(7); 
                const postalCode = getRandomNumber(5);
                const ln= new LoginPage();
                ln.LogintoURl();
                ln.setUserName("standard_user");
                ln.setPassWord("secret_sauce");
                ln.clickSubmit();
                ln.verifyLogin();
                pn.addtoCart(1);
                checkoutPage.goToCart();
                checkoutPage.checkout();
                checkoutPage.fillForm(firstName, lastName, postalCode);
                checkoutPage.continueCheckout();
               checkoutPage.finishCheckout();
    
        // Verify order completion
                OrderCompletionPage.verifyOrderCompletion();
    
               
            })    
            it("verify cart button by add 2 items",()=>
                {    
                    const firstName = getRandomString(5); 
                    const lastName = getRandomString(7); 
                    const postalCode = getRandomNumber(5);
                    const ln= new LoginPage();
                    ln.LogintoURl();
                    ln.setUserName("standard_user");
                    ln.setPassWord("secret_sauce");
                    ln.clickSubmit();
                    ln.verifyLogin();
                    pn.addtoCart(2);
                    checkoutPage.goToCart();
                    checkoutPage.checkout();
                    checkoutPage.fillForm(firstName, lastName, postalCode);
                    checkoutPage.continueCheckout();
                   checkoutPage.finishCheckout();
        
            // Verify order completion
                    OrderCompletionPage.verifyOrderCompletion();
        
                   
                })    
                it("verify cart button by add 4 items",()=>
                    {   
                        
                        const firstName = getRandomString(5); 
                        const lastName = getRandomString(7); 
                        const postalCode = getRandomNumber(5);

                        const ln= new LoginPage();
                        ln.LogintoURl();
                        ln.setUserName("standard_user");
                        ln.setPassWord("secret_sauce");
                        ln.clickSubmit();
                        ln.verifyLogin();
                        pn.addtoCart(4);
                        checkoutPage.goToCart();
                        checkoutPage.checkout();
                        checkoutPage.fillForm(firstName, lastName, postalCode);
                        checkoutPage.continueCheckout();
                       checkoutPage.finishCheckout();
            
                // Verify order completion
                        OrderCompletionPage.verifyOrderCompletion();
            
                       
                    })  
                    
            it("verify continue shopping button",()=>
            {
                const ln= new LoginPage();
                ln.LogintoURl();
                ln.setUserName("standard_user");
                ln.setPassWord("secret_sauce");
                ln.clickSubmit();
                ln.verifyLogin();
                pn.addtoCart(1);
                checkoutPage.goToCart();
                checkoutPage.continueShopping.click();
                ln.verifyLogin();
                cy.url().should('eq','https://www.saucedemo.com/inventory.html')

            })
})