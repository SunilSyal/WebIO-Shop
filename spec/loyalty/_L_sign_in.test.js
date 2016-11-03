describe('Sparks Sign In Journey', function() {

 it('Should have a title', function() {
        browser.url('http://.marksandspencer.com');
        expect(browser.getTitle()).to.contain('Welcome to Marks');
    });

    it('Verify sparks link and clik should take to sparks page', function() {
        browser.url('http://.marksandspencer.com');
        browser.click('.sparks a.link');
        expect(browser.getTitle()).to.contain('M&S Sparks');

    });

    it('Verify Charity page', function() {
      this.timeout(0);
      browser.url('http://.marksandspencer.com');
      browser.waitForVisible('.sparks a.link',5000);
      browser.click('.sparks a.link');
      expect(browser.getTitle()).to.contain('M&S Sparks');
      //Sign In to Sparks
      browser.waitForEnabled('.btn--north-primary', 5000);
      browser.click('.btn--north-primary');
      //Entering Login details
      browser.setValue('#email', 'aroraneha.16@gmail.com');
      browser.setValue('#password', 'wcs12345');
      //Clicking Submit button
      browser.click('.btn--north-primary');
      browser.waitForVisible('.sticky-element .topbar__left-wrapper', 5000);
      expect(browser.getTitle()).to.contain('Home');
      //expect(browser.getText('.home--error.ng-scope')).to.contain('WELCOME');
      expect(browser.getText('div > .large-banner--faded-full')).to.contain('SPARKS');
      browser.click('.sticky-element .topbar__left-wrapper');
      browser.waitForVisible('div[ui-view="contentView@"] .account__home-date',5000);
      expect(browser.getText('div[ui-view="contentView@"] .account__home-date')).to.contain('JOINED');
      browser.moveToObject('div[ui-view] .account--home-progress');
      browser.click('button[href="#/account/charity"]');
      browser.waitForVisible('div[ui-view] .account__charity--details-heading')
      expect(browser.getText('.row .account__charity--details-heading')).to.contain('CHARITY');

});
    it('Verify Sign In to sparks', function() {
        browser.url('http://.marksandspencer.com');
        browser.click('.sparks a.link');
        expect(browser.getTitle()).to.contain('M&S Sparks');
        //Sign In to Sparks
        browser.waitForEnabled('.btn--north-primary', 7000);
        browser.click('.btn--north-primary');
        //Entering Login details
        browser.setValue('#email', 'aroraneha.16@gmail.com');
        browser.setValue('#password', 'wcs12345');
        //Clicking Submit button
        browser.click('.btn--north-primary');
        browser.waitForVisible('.sticky-element .topbar__left-wrapper',5000);
        expect(browser.getTitle()).to.contain('Home');
        //expect(browser.getText('.home--error.ng-scope')).to.contain('WELCOME');
        expect(browser.getText('div > .large-banner--faded-full')).to.contain('SPARKS');
      });


});
