const { After, Given, Then, When } = require("cucumber");
    
    Given('I visit the site', async function() {
        return await this.openHomePage()
    })
    After(async function() {
        return await this.closeHomePage()
    })    
    Then('I should see {string}', async function(content) {
        return await this.pageHasTextContent(content)
    })
    When('I click {string}', async function(string){
        return await this.clickOnButton(string)
    })
    Then('I fill in {string} with {string}', async function(field, content) {
        return await this.fillFormField(field.toLowerCase(), content)
    })
    Then('I should have {int} contact in my adress book', async function(int) {
        return 'pending'
    })
    Then('I should not see {string}', async function (string) {
        return 'pending'
    })



    /*Then('I fill in {string} with {string}', async function(field, content) {
        return await this.fillFormField(field.toLowerCase(), content)
    })

       When('I click {string}', async function(string){
        return await this.clickOnAddContactBtn(string)
    })
   /* When('I click{string}',async function(string){
        return await this.clickOnAddContactBtn()
    })

    */