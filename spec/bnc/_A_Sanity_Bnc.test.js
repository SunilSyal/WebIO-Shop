var search = require("../../common/browseFunctions")
var miniBag = require("../../common/miniBagFunctions")
var checkout = require("../../common/checkoutFunctions")
var checkoutLoc = require("../../resources/checkoutLocator")

describe('Bnc Sanity Scenario', function() {

    beforeEach(function() {
        browser.deleteCookie();
        browser.url(domainName + '/');
    })

    it('Guest Order Placement flow', function() {
        this.timeout(0);
        expect(browser.getTitle()).contain('Welcome to Marks');

        //Search product using part number
        search.searchProductOnMainPage('p22151415');

        // Add to bag from PDP
        search.pdpAddtoBag();

        //Checout from mini bag
        miniBag.miniBagCheckout();
        checkout.guestCheckout();

        //Select SDD delivery and add address on DMS page
        checkout.dmsSddSelected();
        checkout.addAddressFields();
        checkout.postcodeSearch();

        checkout.addressAdded();
        expect(browser.getText('.delivery-mode__address')).contain('LONDON');

        //Navigate to Payment page and add card
        checkout.payment();
        checkout.addCardForm();
        checkout.guestEmail();

        //Navigate to Order review and place order
        checkout.orderReview();
        checkout.placeOrder();
        expect(browser.getTitle()).contain('Order Confirm');
        browser.isExisting('#logonPassword');
    });

    it('Checkout Registration and place order for store delivery', function() {
        this.timeout(0);

        //Search product using part number
        search.searchProductOnMainPage('22151415');

        //Add product to bag from PDP
        search.pdpAddtoBag();

        //checkout using Mini bag
        miniBag.miniBagCheckout();
        expect(browser.getTitle()).contain('Checkout Login');

        //Checkout registration
        checkout.checkoutRegistration();
        browser.waitForVisible(checkoutLoc.dmsOpen);

        //Add store on DMS
        checkout.addStoreDMS('pantheon');

        //Navigate to Payment page and apply GC
        checkout.payment();
        checkout.giftCardApply();

        //Continue from payment page to Contact address page
        checkout.orderReview();
        expect(browser.getTitle()).contain('Contact Address');

        //Add address on Contact Address page
        checkout.addAddressFields();
        checkout.postcodeSearch();
        browser.click(checkoutLoc.continueButton);

        //Place order
        checkout.placeOrder();
    });
});
