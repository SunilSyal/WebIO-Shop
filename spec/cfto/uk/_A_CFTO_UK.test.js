var cfto = require("../../../common/cftoFunctions")
var cftoLoc = require("../../../resources/cftoLocator")

describe('Testing - CFTO UK Site', function() {

    beforeEach(function(done) {
        browser.deleteCookie();
        this.timeout(0);
        browser.url('http://christmasfood.sit2.marksandspencer.com');
    });

    it('Add an item to the basket', function() {
        this.timeout(0);
        cfto.addToBag();
        browser.click(cftoLoc.checkoutButton);
        cfto.logIn();
    });

    it('Place an UK CFTO order with registered user with added item', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.addToBag();
        browser.click(cftoLoc.checkoutButton);

        // Function to login the user
        cfto.logIn();

        browser.click(cftoLoc.checkoutButton); // This will appear in case of basket merge scenario

        // To choose an UK Store for delivery
        browser.setValue(cftoLoc.collectionStoreSearchUK, 'Covent Garden');
        browser.click(cftoLoc.storeSearchUK);

        // To choose collection date & slot
        cfto.chooseCollection();

        // Add a new card from payment page
        browser.click(cftoLoc.addNewCard);
        cfto.cardDetailsLightBox(); // To put in the card details
        browser.click(cftoLoc.continueToAddress);
        browser.waitForVisible(cftoLoc.addCardAddress);
        browser.click(cftoLoc.addCardAddress);
        browser.waitForVisible(cftoLoc.confirmPayment);
        browser.setValue(cftoLoc.enterCvv, '609');
        browser.scroll(cftoLoc.confirmPayment);
        browser.click(cftoLoc.confirmPayment);

        // Confirm the order by clicking on the place order button
        browser.waitForEnabled(cftoLoc.confirmOrder);
        browser.click(cftoLoc.confirmOrder);

        //Confirming the details on the order confirmation page
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('401');
    });


    it('Place an UK CFTO order with guest user', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.addToBag();
        browser.click(cftoLoc.checkoutButton);

        // Choose guest checkout option on the checkout login page
        browser.click(cftoLoc.guestCheckoutButton);

        // To choose an UK Store for delivery
        browser.setValue(cftoLoc.collectionStoreSearchUK, 'Covent Garden');
        browser.click(cftoLoc.storeSearchUK);

        // To choose collection date & slot
        cfto.chooseCollection();

        // To put in the card details
        cfto.cardDetailsForm();
        cfto.enterAddressManually(); // To enter the address details manually
        cfto.userAddressForm(); // To put user address in the form
        browser.setValue(cftoLoc.emailId, 'sroy@sapient.com');
        cfto.paymentReviewOrder(); // To confirm payment & review order
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('401');
    });

    it('Place an UK CFTO order with guest user by searching product using global seacrh', function() {
        this.timeout(0);
        cfto.search(); // To search an item

        // Add item to the bag
        cfto.addToBag();
        browser.click(cftoLoc.checkoutButton);

        //Choose guest checkout option on the checkout login page
        browser.click(cftoLoc.guestCheckoutButton);


        // To choose an UK Store for delivery
        browser.setValue(cftoLoc.collectionStoreSearchUK, 'Covent Garden');
        browser.click(cftoLoc.storeSearchUK);

        // To choose collection date & slot
        cfto.chooseCollection();

        // To put in the card details
        cfto.cardDetailsForm();
        cfto.enterAddressManually(); // To enter the address details manually
        cfto.userAddressForm(); // To put user address in the form
        cfto.paymentReviewOrder(); // To confirm payment & review order
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('401');
    });

    it('Validate the perfect partner gets added to the basket and the same item gets displayed on the basket', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.addToBag();

        //Add perfect partner promoveToFooterduct from the carousel on the basket page
        browser.scroll(cftoLoc.moveToFooter);
        browser.waitForVisible(cftoLoc.perfectPartnumberProductTitle);
        var ex = browser.getText(cftoLoc.perfectPartnumberProductTitle);
        var productName = ex[0]; // This gives the name of the first product

        browser.scroll(cftoLoc.addToBag);
        browser.click(cftoLoc.addToBag); // Add the product to the basket
        var ab = browser.getText(cftoLoc.firstBasketItem);
        var productNameFinal = ab[0]; //It shows the name of the perfect partner product added to the basket

        // This checks whether the product from perfect partners carousel gets added to the basket & its same as first item in carousel
        expect(productNameFinal).to.be.equal(productName);
    });
});
