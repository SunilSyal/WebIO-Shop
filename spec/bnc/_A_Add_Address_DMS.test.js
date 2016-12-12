var search = require("../../common/searchFunctions")
var miniBag = require("../../common/miniBagFunctions")
var checkout = require("../../common/checkoutFunctions")

describe('Add address on DMS', function() {
    beforeEach(function() {
        browser.url('http://www.marksandspencer.com/');
    })

    it('Should add address on DMS page', function() {
        this.timeout(0);
        expect(browser.getTitle()).contain('Welcome to Marks');
        search.searchProductOnMainPage('p22249446');

        browser.waitForVisible('#product-detail-page');
        browser.moveToObject('input.basket');
        browser.click('input.basket');
        browser.waitForVisible('.bagNotify');

        miniBag.miniBagCheckout();
        checkout.guestCheckout();

        checkout.dmsSddSelected();
        checkout.addAddressFields();
        checkout.postcodeSearch();

        browser.moveToObject('.address-overlay__hr .address-overlay__btn--primary');
        browser.click('.address-overlay__hr .address-overlay__btn--primary');
        //browser.waitUntil(10000);
        browser.isVisible('.inpage-msg.inpage-msg--success');
        browser.waitForVisible('.delivery-mode__address');
        expect(browser.getText('.delivery-mode__address')).contain('LONDON');
    });
});
