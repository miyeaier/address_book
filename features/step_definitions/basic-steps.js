const { Given, Then, When } = require("cucumber");

    Given('I visit the site', async function() {
        return await this.openHomePage()
      })
    Then('I should see {string}', async function(content) {
        return 'pending'
    })
    When('I click {string}', async function(string){
        return 'pending'
    })
    Then('I fill in {string} with {string}', async function(string,string2) {
        return 'pending'
    })
    Then('I should have {int} contanct in my adress book', async function(int) {
        return 'pending'
    })
    Then('I should not see {string}', async function (string) {
        return 'pending'
    })
