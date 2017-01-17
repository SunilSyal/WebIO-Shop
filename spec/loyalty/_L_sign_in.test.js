var loyalty = require("../../common/loyaltyFunctions")
var loyaltyLoc =require("../../resources/loyaltyLocator")

describe('Sparks Sign In Journey', function() {

    beforeEach(function() {
        browser.url(domainName + '/');
    })


    it('Should verify journey to test sparks link and clicking it should take to sparks page and then to verify charity page', function() {

        this.timeout(0);
        expect(browser.getTitle()).to.contain('Welcome to Marks');

        loyalty.pageVerification();
        loyalty.signIn();

        browser.waitForVisible(loyaltyLoc.sparksHomePage);
        expect(browser.getTitle()).to.contain('Home');

        expect(browser.getText(loyaltyLoc.sparksWelcome)).to.contain('Welcome');
        browser.click(loyaltyLoc.sparksTopBar);

        browser.waitForVisible(loyaltyLoc.sparksAccount);
        expect(browser.getText(loyaltyLoc.sparksAccount)).to.contain('JOINED');

        browser.click(loyaltyLoc.sparksCharityButton);

        browser.waitForVisible(loyaltyLoc.sparksCharityVisible);
        expect(browser.getText(loyaltyLoc.sparksCharityText));

    });

});
