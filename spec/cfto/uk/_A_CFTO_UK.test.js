var cfto = require("../../../common/cftoFunctions")
var cftoLoc = require("../../../resources/cftoLocator")

describe('Testing - CFTO UK Site', function() {

      beforeEach(function(done) {

      this.timeout(0);
      browser.url('http://christmasfood.sit2.marksandspencer.com');
   });

   it('Add an item to the basket', function() {
        this.timeout(0);
        cfto.closeSurvey();
        cfto.addToBag();
        cfto.closeSurvey();
        browser.click(cftoLoc.checkoutButton);
        cfto.closeSurvey();
        cfto.logIn();
        cfto.closeSurvey();
        browser.reload();

});

    it('Place an UK CFTO order with registered user with added item', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.closeSurvey();
        cfto.addToBag();
        cfto.closeSurvey();
        browser.click(cftoLoc.checkoutButton);
        cfto.closeSurvey();

        // Function to login the user
        cfto.closeSurvey();
        cfto.logIn();
        cfto.closeSurvey();

        cfto.closeSurvey();
        browser.click(cftoLoc.checkoutButton); // This will appear in case of basket merge scenario
        cfto.closeSurvey();

        // To choose an UK Store for delivery
        cfto.closeSurvey();
        browser.setValue(cftoLoc.collectionStoreSearchUK, 'Covent Garden');
        cfto.closeSurvey();
        browser.click(cftoLoc.storeSearchUK);
        cfto.closeSurvey();

        // To choose collection date & slot
        cfto.closeSurvey();
        cfto.chooseCollectionStoreUK();
        cfto.closeSurvey();
        cfto.chooseCollectionSlot();
        cfto.closeSurvey();

        // Add a new card from payment page
        cfto.closeSurvey();
        browser.click(cftoLoc.addNewCard);
        cfto.closeSurvey();
        cfto.cardDetailsLightBox(); // To put in the card details
        cfto.closeSurvey();
        browser.click(cftoLoc.continueToAddress);
        cfto.closeSurvey();
        browser.waitForVisible(cftoLoc.addCardAddress);
        cfto.closeSurvey();
        browser.click(cftoLoc.addCardAddress);
        cfto.closeSurvey();
        browser.waitForVisible(cftoLoc.confirmPayment);
        cfto.closeSurvey();
        browser.setValue(cftoLoc.enterCvv, '609');
        cfto.closeSurvey();
        browser.scroll(cftoLoc.confirmPayment);
        browser.click(cftoLoc.confirmPayment);
        cfto.closeSurvey();

        // Confirm the order by clicking on the place order button
        cfto.closeSurvey();
        browser.waitForEnabled(cftoLoc.confirmOrder);
        browser.click(cftoLoc.confirmOrder);
        cfto.closeSurvey();

        //Confirming the details on the order confirmation page
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('401');
        browser.reload();

});


    it('Place an UK CFTO order with guest user', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.closeSurvey();
        cfto.addToBag();
        cfto.closeSurvey();
        browser.click(cftoLoc.checkoutButton);

        // Choose guest checkout option on the checkout login page
        cfto.closeSurvey();
        browser.click(cftoLoc.guestCheckoutButton);

        // To choose an UK Store for delivery
        cfto.closeSurvey();
        browser.setValue(cftoLoc.collectionStoreSearchUK, 'Covent Garden');
        cfto.closeSurvey();
        browser.click(cftoLoc.storeSearchUK);
        cfto.closeSurvey();

        // To choose collection date & slot
        cfto.closeSurvey();
        cfto.chooseCollectionStoreUK();
        cfto.closeSurvey();
        cfto.chooseCollectionSlot();
        cfto.closeSurvey();

        // To put in the card details
        cfto.closeSurvey();
        cfto.cardDetailsForm();
        cfto.enterAddressManually(); // To enter the address details manually
        cfto.userAddressForm(); // To put user address in the form
        browser.setValue(cftoLoc.emailId, 'sroy@sapient.com');
        cfto.closeSurvey();
        cfto.paymentReviewOrder(); // To confirm payment & review order
        cfto.closeSurvey();
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('401');
        browser.reload();

});

    it('Place an UK CFTO order with guest user by searching product using global seacrh', function() {

        this.timeout(0);
        cfto.closeSurvey();
        cfto.search(); // To search an item
        cfto.closeSurvey();

        // Add item to the bag
        cfto.closeSurvey();
        cfto.addToBag();
        cfto.closeSurvey();
        browser.click(cftoLoc.checkoutButton);
        cfto.closeSurvey();

        //Choose guest checkout option on the checkout login page
        cfto.closeSurvey();
        browser.click(cftoLoc.guestCheckoutButton);
        cfto.closeSurvey();


        // To choose an UK Store for delivery
        cfto.closeSurvey();
        browser.setValue(cftoLoc.collectionStoreSearchUK, 'Covent Garden');
        cfto.closeSurvey();
        browser.click(cftoLoc.storeSearchUK);
        cfto.closeSurvey();

        // To choose collection date & slot
        cfto.closeSurvey();
        cfto.chooseCollectionStoreUK();
        cfto.closeSurvey();
        cfto.chooseCollectionSlot();
        cfto.closeSurvey();

        // To put in the card details
        cfto.closeSurvey();
        cfto.cardDetailsForm();
        cfto.closeSurvey();
        cfto.enterAddressManually(); // To enter the address details manually
        cfto.userAddressForm(); // To put user address in the form
        cfto.paymentReviewOrder(); // To confirm payment & review order
        cfto.closeSurvey();
        expect(browser.element(cftoLoc.orderNumber).getText()).to.contain('401');
        browser.reload();

});

    it('Validate the perfect partner gets added to the basket and the same item gets displayed on the basket', function() {
        this.timeout(0);

        //Add item to the basket & land on the basket page by click on the bag button on the minibag pop-up
        cfto.closeSurvey();
        cfto.addToBag();
        cfto.closeSurvey();

        //Add perfect partner promoveToFooterduct from the carousel on the basket page
        cfto.closeSurvey();
        browser.scroll(cftoLoc.moveToFooter);
        cfto.closeSurvey();
        browser.waitForVisible(cftoLoc.perfectPartnumberProductTitle);
        cfto.closeSurvey();
        var ex = browser.getText(cftoLoc.perfectPartnumberProductTitle);
        var productName = ex[0]; // This gives the name of the first product

        browser.scroll(cftoLoc.addToBag);
        browser.click(cftoLoc.addToBag); // Add the product to the basket
        cfto.closeSurvey();
        var ab = browser.getText(cftoLoc.firstBasketItem);
        cfto.closeSurvey();
        var productNameFinal = ab[0]; //It shows the name of the perfect partner product added to the basket

        // This checks whether the product from perfect partners carousel gets added to the basket & its same as first item in carousel
        cfto.closeSurvey();
        expect(productNameFinal).to.be.equal(productName);

        });
});
