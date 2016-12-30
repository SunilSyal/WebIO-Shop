var search = require("../../common/browseFunctions")
var miniBag = require("../../common/miniBagFunctions")
var checkout = require("../../common/checkoutFunctions")
var checkoutLoc = require("../../resources/checkoutLocator")

describe('Wine Sub Checkout', function() {

    beforeEach(function() {
        browser.url(domainName + '/');
    })

    it('Should not display guest checkout option with wine sub in basket', function() {
        this.timeout(0);
        search.WineSubAtb();
        miniBag.miniBagCheckout();
        browser.waitForVisible(checkoutLoc.guestCheckout, 5000, true);
        checkout.checkoutLogin();
        expect(browser.getTitle()).contain('Express Checkout');
        checkout.expressCheckout();
        expect(browser.getTitle()).contain('Order Confirm');
    });
});
