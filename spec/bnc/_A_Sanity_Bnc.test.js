var search = require("../../common/browseFunctions")
var miniBag = require("../../common/miniBagFunctions")
var checkout = require("../../common/checkoutFunctions")
var checkoutLoc = require("../../resources/checkoutLocator")

describe('Bnc Sanity Sceanrio', function() {

    beforeEach(function() {
        browser.url(domainName + '/');
    })

    it('Guest Order Placement flow', function() {
        this.timeout(0);
        expect(browser.getTitle()).contain('Welcome to Marks');
        search.searchProductOnMainPage('p22151415');

        search.pdpAtb();

        miniBag.miniBagCheckout();
        checkout.guestCheckout();

        checkout.dmsSddSelected();
        checkout.addAddressFields();
        checkout.postcodeSearch();

        checkout.addressAdded();
        expect(browser.getText('.delivery-mode__address')).contain('LONDON');
        checkout.payment();
        checkout.addCardForm();
        checkout.guestEmail();
        checkout.orderReview();
        checkout.placeOrder();
        expect(browser.getTitle()).contain('Order Confirm');
        browser.isExisting('#logonPassword');
    });

    it('Checkout Registration and place order for store delivery', function() {
        this.timeout(0);
        search.searchProductOnMainPage('22151415');
        search.pdpAtb();
        miniBag.miniBagCheckout();
        expect(browser.getTitle()).contain('Checkout Login');
        checkout.checkoutRegistration();
        browser.waitForVisible(checkoutLoc.dmsOpen);
        checkout.addStoreDMS('pantheon');
        checkout.payment();
        checkout.giftCardApply();
        checkout.orderReview();
        expect(browser.getTitle()).contain('Contact Address');
        checkout.addAddressFields();
        checkout.postcodeSearch();
        browser.click(checkoutLoc.continueButton);
        checkout.placeOrder();
    });
});
