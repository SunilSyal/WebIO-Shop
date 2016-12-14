var loyalty = require("../../common/loyaltyFunctions")

describe('Sparks Sign In Journey', function() {

    beforeEach(function() {
        browser.url(domainName + '/');
    })


    it('Should verify journey to test sparks link and clicking it should take to sparks page and then to verify charity page', function() {

        this.timeout(0);
        expect(browser.getTitle()).to.contain('Welcome to Marks');

        loyalty.pageVerification();
        loyalty.signIn();

        browser.waitForVisible('.sticky-element .topbar__left-wrapper');
        expect(browser.getTitle()).to.contain('Home');

        expect(browser.getText('.large-banner--faded')).to.contain('WELCOME');
        browser.click('.sticky-element .topbar__left-wrapper');

        browser.waitForVisible('div[ui-view] .account__home-date');
        expect(browser.getText('div[ui-view] .account__home-date')).to.contain('JOINED');

        browser.click('button[href="#/account/charity"]');

        browser.waitForVisible('div[ui-view] .account__charity--details-heading')
        expect(browser.getText('.row .account__charity--details-heading')).to.contain('CHARITY');

    });

});
