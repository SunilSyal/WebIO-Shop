describe('Sparks Sign In Journey', function() {

    beforeEach(function() {
        browser.url('http://marksandspencer.com');
    })

    function sparksPageVerification() {
        browser.waitForVisible('.sparks a.link');
        browser.click('.sparks a.link');
        expect(browser.getTitle()).to.contain('M&S Sparks');
    }

    function sparksSignIn() {
        //Sign In to Sparks
        browser.waitForEnabled('.btn--north-primary');
        browser.click('.btn--north-primary');

        //Entering Login details
        browser.setValue('#email', 'jshubham007@gmail.com');
        browser.setValue('#password', 'testing@12345');

        browser.scroll('#email');
        //Clicking Submit button
        browser.click('.btn--north-primary');
    }

    it('Should verify journey to test sparks link and clicking it should take to sparks page and then to verify charity page', function() {

        this.timeout(0);
        expect(browser.getTitle()).to.contain('Welcome to Marks');

        sparksPageVerification();
        sparksSignIn();

        browser.waitForVisible('.sticky-element .topbar__left-wrapper');
        expect(browser.getTitle()).to.contain('Home');

        expect(browser.getText('.large-banner--faded')).to.contain('WELCOME');
        browser.click('.sticky-element .topbar__left-wrapper');

        browser.waitForVisible('div[ui-view] .account__home-date');
        expect(browser.getText('div[ui-view] .account__home-date')).to.contain('JOINED');

        //browser.scroll('.large-banner--account + .container');
        browser.click('button[href="#/account/charity"]');

        browser.waitForVisible('div[ui-view] .account__charity--details-heading')
        expect(browser.getText('.row .account__charity--details-heading')).to.contain('CHARITY');

    });

});
