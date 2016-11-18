describe.only('Wine Sub Checkout', function() {

    beforeEach(function() {
        browser.url('http://www.sit2.marksandspencer.com/');
    })

    it('Should not display guest checkout option with wine sub in basket', function() {
        this.timeout(0);
        browser.moveToObject('a[data-analyticsid="FoodNWine_FOOD & WINE"]');
        browser.waitForVisible('a[href*="s/food-and-wine/wine-club"]');
        browser.moveToObject('a[href*="s/food-and-wine/wine-club"]');
        browser.click('a[href*="s/food-and-wine/wine-club"]');
        expect(browser.getTitle()).contain('Wine Club');
        browser.click('a[href*="/s/food-and-wine/wine-club/club-classic?intid=fw_wineclub_classic1"]');
        browser.scroll('#winesubaddtobag');
        browser.click('#winesubaddtobag');
        browser.waitForVisible('.bagNotify');
        browser.moveToObject('a.header-link');
        browser.click('a.btn-checkout.primary-btn');
        browser.waitForVisible('#guestCheckoutContButton', 5000, true);
        browser.setValue('#loginEmail', 'test5@gmail.com');
        browser.setValue('#loginPassword', 'testing@123');
        browser.click('.my-account__subcontent__signIn-btn');
        expect(browser.getTitle()).contain('Express Checkout');
        browser.setValue('#cvv', '234');
        browser.moveToObject('.terms-and-conditions-right-col .btn--primary');
        browser.click('.terms-and-conditions-right-col .btn--primary');
    });
});
