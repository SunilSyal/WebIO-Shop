var search = require("../../common/browseFunctions")
var miniBag = require("../../common/miniBagFunctions")
var checkout = require("../../common/checkoutFunctions")

describe('Add address on DMS', function() {
    beforeEach(function() {
        browser.url(domainName + '/');
    })

    it('Should add address on DMS page', function() {
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

    });
});
