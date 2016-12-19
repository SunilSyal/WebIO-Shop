var cfto = require("../../../common/cftoFunctions")
var cftoLoc = require("../../../resources/cftoLocator")

describe('Testing - CFTO Ireland Site', function() {

    beforeEach(function(done) {
        browser.deleteCookie();
        this.timeout(0);
        browser.url('http://christmasfood.marksandspencer.ie');
    });


    it('Place a CFTO order on the Ireland Site', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.addToBag();

        // Choose collection slot & date
        cfto.chooseCollection();

        // To put in the card details
        cfto.cardDetailsForm();
        cfto.userAddressForm(); // To put user address in the form
        browser.setValue(cftoLoc.emailId, 'sroy@sapient.com');
        cfto.paymentReviewOrder(); // To confirm payment & review order
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('501');
    });


    it('Place a CFTO order on the Ireland Site with guest user by searching product using global seacrh', function() {
        this.timeout(0);

        // To search an item
        cfto.search();

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.addToBag();

        // To choose collection date & slot
        cfto.chooseCollection();

        // To put in the card details
        cfto.cardDetailsForm();
        cfto.userAddressForm(); // To put user address in the form
        cfto.paymentReviewOrder(); // To confirm payment & review order
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('501');
    });

    it('Validate the perfect partner gets added to the basket and the same item gets displayed on the basket', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        browser.click(cftoLoc.addToBag);
        browser.waitForVisible(cftoLoc.miniBagContainer);
        browser.click(cftoLoc.miniBag);

        //Add perfect partner product from the carousel on the basket page
        browser.moveToObject(cftoLoc.moveToFooter);
        var ex = browser.getText(cftoLoc.perfectPartnumberProductTitle);
        var productName = ex[0]; // This gives the name of the first product


        browser.click(cftoLoc.addToBag);
        var ab = browser.getText(cftoLoc.firstBasketItem);
        var productNameFinal = ab[0]; //It shows the name of the perfect partner product added to the basket

        // This checks whether the product from perfect partners carousel gets added to the basket & its same as first item in carousel
        expect(productNameFinal).to.be.equal(productName);
    });
});
