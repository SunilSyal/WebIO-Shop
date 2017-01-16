var search = require("../../common/browseFunctions")
var miniBag = require("../../common/miniBagFunctions")
var checkout = require("../../common/checkoutFunctions")
var checkoutLoc = require("../../resources/checkoutLocator")

describe('Wine Sub Checkout', function() {

    beforeEach(function() {
        browser.deleteCookie();
        browser.url(domainName + '/');
    })

    it('Should not display guest checkout option with wine sub in basket', function() {
        this.timeout(0);

        //Add wine sub product to bag
        search.WineSubAddToBag();

        //Checkout from minibag
        miniBag.miniBagCheckout();

        //Verifying guest checkout is not displayed for Wine sub product
        browser.waitForVisible(checkoutLoc.guestCheckout, 5000, true);

        //Sign in using valid credentials
        checkout.checkoutLogin();

        //Navigate to Express Checkout page
        expect(browser.getTitle()).contain('Express Checkout');
        checkout.expressCheckout();

        //Place order from Express Checkout
        expect(browser.getTitle()).contain('Order Confirm');
    });
});
