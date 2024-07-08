class Itemspage
{
     // Define selectors as getters

    get filter()
    {
       return  cy.get('[data-test="product-sort-container"]');
    }
    get menub()
    {
       return cy.get("#react-burger-menu-btn");
    }
    get menuButtonContainer()
    {
       return cy.get("#menu_button_container > div > div.bm-menu-wrap")
    }
    get about()
    {
        return cy.get("#about_sidebar_link")
    }
    get logout()
    {
        return cy.get("#logout_sidebar_link")
    }

    applyfilter(filter)
    {
       this.filter.select(filter)
    }
    hamburgerMenu(menu)
    { 
        this.menub.click();
        this.menuButtonContainer.should('be.visible')
        if(menu=='About')
            {
                this.about.click();
                cy.url().should('eq','https://saucelabs.com/');
            }
        else if(menu=='Logout')
            {
              this.logout.click();
              cy.url().should('eq','https://www.saucedemo.com/')
            }
    }
  
    verifyfilter(name,order)
    {
         const Ar=[];
                cy.get('.inventory_item').its('length').then((length =>
                    {    
                        for(let i=1;i<=length;i++)
                           {   
                             if(name=='Alpha')
                            {
                                var selector=`:nth-child(${i}) > [data-test="inventory-item-description"] > .inventory_item_label`
                            }
                        else if(name=='price') 
                            {
                                var selector=`:nth-child(${i}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`
                            }
                               cy.get(selector).invoke('text').then((text)=>
                                { Ar.push(text);
                                })
                            }
                            }
                     ))
                     var originalArray=[];
                     cy.wrap(Ar).then((originalArray) => {
                         var sortedArray=[];
                        if(name=='Alpha'&&order =="Asc")
                        {
                          sortedArray = [...originalArray].sort();
                        }
                        else if(name=='Alpha'&&order =='Dec')
                        {
                            sortedArray = [...originalArray].sort((a, b) => b.localeCompare(a));;
                        // Create a sorted Z-A copy of the array
                        }
                        else if(name=='price'&&order =="Asc")
                            {
                                sortedArray = [...originalArray].sort((a, b) => a - b);
                            }
                        else if(name=='price'&&order =="Dec")
                            {
                                sortedArray = [...originalArray].sort((a, b) => b - a);
                            }
                        // Compare the original array to the sorted array
                        expect(originalArray).to.deep.equal(sortedArray);
                    })
        
    }
    
    addtoCart(count)
    {
       for(let i=1;i<=count;i++)
        {
            cy.get(`:nth-child(${i}) > [data-test="inventory-item-description"]`).find('button').contains('Add to cart').click();
            cy.get(`:nth-child(${i}) > [data-test="inventory-item-description"]`).find('button').contains('Remove').should('be.visible');
            cy.get('[data-test="shopping-cart-badge"]').should('have.text',`${i}`);
        }
    }
    Itemspage()
    {
        
    }
 
}

export default Itemspage;