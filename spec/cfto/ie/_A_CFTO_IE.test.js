var cfto = require("../../../common/cftoFunctions")

describe('Testing - CFTO Ireland Site', function() {

    beforeEach(function(done) {
        browser.deleteCookie();
        this.timeout(0);
        browser.url('http://christmasfood.sit2.marksandspencer.ie');
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
        browser.setValue('#guestemail', 'sroy@sapient.com');
        cfto.paymentReviewOrder(); // To confirm payment & review order
        expect(browser.element('.order-confirm-msg__content .order-confirm-msg__keyword').getText()).to.contain('501');
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
        expect(browser.element('.order-confirm-msg__content .order-confirm-msg__keyword').getText()).to.contain('501');
    });

    it('Validate the perfect partner gets added to the basket and the same item gets displayed on the basket', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        browser.click('.add-to-bag__btn');
        browser.waitForVisible('script + .minibag-container');
        browser.click('script + .minibag-container .minibag-summary__button');

        //Add perfect partner product from the carousel on the basket page
        browser.moveToObject('.footer__message');
        var ex = browser.getText('.title');
        var productName = ex[0]; // This gives the name of the first product


        browser.click('.add-to-bag__btn');
        var ab = browser.getText('.product-item__link:nth-of-type(1)');
        var productNameFinal = ab[0]; //It shows the name of the perfect partner product added to the basket

        // This checks whether the product from perfect partners carousel gets added to the basket & its same as first item in carousel
        expect(productNameFinal).to.be.equal(productName);
    });
});
