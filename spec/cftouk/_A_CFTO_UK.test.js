var cfto = require("../../common/cftoFunctions")

describe('Testing - CFTO UK Site', function() {

    beforeEach(function(done) {
        browser.deleteCookie();
        this.timeout(0);
        browser.url('http://christmasfood.sit2.marksandspencer.com');
    });

    it('Add an item to the basket', function() {
        this.timeout(0);
        cfto.addToBag();
        cfto.logIn();
    });

    it('Place an UK CFTO order with registered user with added item', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.addToBag();

        // Function to login the user
        cfto.logIn();

        browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]'); // This will appear in case of basket merge scenario

        // To choose an UK Store for delivery
        browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
        browser.click('.collection--store-finder__search-form__btn');

        // To choose collection date & slot
        cfto.chooseCollection();

        // Add a new card from payment page
        browser.click('#add-card-btn-inline');
        cfto.cardDetailsLightBox(); // To put in the card details
        browser.click('button[data-element="AddCardAddressOverlay"]');
        browser.waitForVisible('#address-details__add');
        browser.click('#address-details__add');
        browser.waitForVisible('.payment-button');
        browser.setValue('.credit-debit-card-form #cvv', '215');
        browser.click('.payment-button');

        // Confirm the order by clicking on the place order button
        browser.click('input[type="submit"]');

        //Confirming the details on the order confirmation page
        expect(browser.element('.order-confirm-msg__content .order-confirm-msg__keyword').getText()).to.contain('401');
    });


    it('Place an UK CFTO order with guest user', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.addToBag();

        // Choose guest checkout option on the checkout login page
        browser.click('#guestCheckoutContButton');

        // To choose an UK Store for delivery
        browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
        browser.click('.collection--store-finder__search-form__btn');

        // To choose collection date & slot
        cfto.chooseCollection();

        // To put in the card details
        cfto.cardDetailsForm();
        browser.click('.billing-form .payment__manual-link');
        cfto.userAddressForm(); // To put user address in the form
        browser.setValue('#guestemail', 'sroy@sapient.com');
        browser.waitForEnabled('.payment-button ');
        browser.click('.payment-button');
        browser.click('.order-review__terms .lbl-checkbox');
        browser.waitForEnabled('input[type="submit"]');
        browser.click('input[type="submit"]');
        expect(browser.element('.order-confirm-msg__content .order-confirm-msg__keyword').getText()).to.contain('401');
    });

    it('Place an UK CFTO order with guest user by searching product using global seacrh', function() {
        this.timeout(0);
        cfto.search(); // To search an item

        // Add item to the bag
        cfto.addToBag();

        //Choose guest checkout option on the checkout login page
        browser.click('#guestCheckoutContButton');


        // To choose an UK Store for delivery
        browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
        browser.click('.collection--store-finder__search-form__btn');

        // To choose collection date & slot
        cfto.chooseCollection();

        // To put in the card details
        cfto.cardDetailsForm();
        browser.click('.billing-form .payment__manual-link');
        cfto.userAddressForm(); // To put user address in the form
        browser.waitForEnabled('.payment-button ');
        browser.click('.payment-button');
        browser.click('.order-review__terms .lbl-checkbox');
        browser.waitForEnabled('input[type="submit"]');
        browser.click('input[type="submit"]');
        expect(browser.element('.order-confirm-msg__content .order-confirm-msg__keyword').getText()).to.contain('401');
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
        var ey = ex.splice(3);
        var ez = ex.slice(-3, 1); //It shows the name of the first perfect partner in the carousel


        browser.click('.add-to-bag__btn');
        var ab = browser.getText('.product-item__link:nth-of-type(1)');
        var bc = ex.slice(-3, 1); //It shows the name of the perfect partner product added to the basket

        // This checks whether the product from perfect partners carousel gets added to the basket & its same as first item in carousel
        expect(ez).to.be.equal(bc);
    });
});
