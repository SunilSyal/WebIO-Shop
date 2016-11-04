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

        cfto.chooseCollection(); // To choose the collection date & slot

        // Add a new card from payment page
        browser.click('#add-card-btn-inline');
        cfto.cardDetailsLightBox(); // To put in the card details
        browser.click('button[data-element="AddCardAddressOverlay"]');
        browser.waitForVisible('#address-details__add');
        browser.click('#address-details__add');
        browser.waitForVisible('.payment-button');
        browser.setValue('.credit-debit-card-form #cvv', '609');
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

        // Choose collection slot & date
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

    it.only('Place an UK CFTO order with guest user by searching product using global seacrh', function() {
        this.timeout(0);
        cfto.search(); // To search an item

        // Add item to the bag
        cfto.addToBag();

        //Choose guest checkout option on the checkout login page
        browser.click('#guestCheckoutContButton');

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
});
