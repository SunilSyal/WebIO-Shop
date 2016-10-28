  describe('Testing - Before each in config file', function() {
    /*  it('Should have a title', function() {
        expect(browser.getTitle()).to.contain('Food');
    });

  it('Should have an add to bag button', function() {
    expect(browser.element('.add-to-bag__btn:nth-of-type(1)').getText()).to.be.equal('ADD TO BAG');
    });
*/

/*  it('Place an UK CFTO order with registered user', function() {
    this.timeout(0);
    browser.click('.add-to-bag__btn');
    browser.waitForVisible('script + .minibag-container', 10000);
    browser.click('script + .minibag-container .minibag-summary__button');
    browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
    browser.setValue('#loginEmail', 'sroy@sapient.com');
    browser.setValue('#loginPassword', 'welcome1');
    browser.waitForEnabled('.my-account__subcontent__signIn-btn', 10000);
    browser.click('.my-account__subcontent__signIn-btn');
    var el = browser.getText('.basket-title');
    if(el == 'Your secure bag')
    {
    browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
    browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
    }
    else {
    browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
    }
    browser.click('.collection--store-finder__search-form__btn');
    browser.click('.btn--primary');
    browser.click('.collection--date-list__item');
    browser.click('.collection--store-list__btn');
    browser.click('.collection--time-list__item');
    browser.click('.collection--store-list__btn');
    browser.click('.collection--summary__btn');
    browser.click('#add-card-btn-inline');
    browser.selectByValue('select[name="cardType"]', '11105_Mastercard');
    browser.setValue('#account', '5105105105105100');
    browser.setValue('#expiryMonth', '02');
    browser.setValue('#expiryYear', '18');
    browser.setValue('div[ng-form="paymentDetailsCtrl.form"] #cvv', '609');
    browser.click('button[data-element="AddCardAddressOverlay"]');
    browser.waitForVisible('#address-details__add', 10000);
    browser.click('#address-details__add');
    browser.waitForVisible('.payment-button', 10000);
    browser.setValue('.credit-debit-card-form #cvv', '609');
    browser.click('.payment-button');
    browser.click('input[type="submit"]');
    //browser.waitForEnabled('.checkout-button', 10000);
    //browser.click('.checkout-button');
    //console.log(browser.element('.checkout-button'))
    //expect(browser.element('.minibag-summary__button--bag')).to.contain('BAG');
  //  browser.waitForVisible('script + .minibag-container', 10000);
    //console.log(browser.element('.minibag-summary__button--bag'));
  //expect(browser.element('.basket-title col').getText()).to.be.equal('Your secure bag');
    //expect(browser.element('.minibag-summary__button--bag').getText()).to.contain('BAG');
    //browser.call(done);
    });

*/

    it('Place an UK CFTO order with guest user', function() {
      this.timeout(0);
      browser.click('.add-to-bag__btn');
      browser.waitForVisible('script + .minibag-container', 10000);
      browser.click('script + .minibag-container .minibag-summary__button');
      browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
      browser.click('#guestCheckoutContButton');
      //browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
      browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
      browser.click('.collection--store-finder__search-form__btn');
      browser.click('.btn--primary');
      browser.click('.collection--date-list__item');
      browser.click('.collection--store-list__btn');
      browser.click('.collection--time-list__item');
      browser.click('.collection--store-list__btn');
      browser.click('.collection--summary__btn');
      browser.selectByValue('select[name="cardType"]', '11105_Mastercard');
      //browser.waitForSelected('select[name="cardType"]', 20000);
      browser.setValue('.credit-debit-card-form #account', '5105105105105100');
      browser.setValue('.credit-debit-card-form #expiryMonth', '02');
      browser.setValue('.credit-debit-card-form #expiryYear', '18');
      browser.setValue('.credit-debit-card-form #cvv', '609');
      browser.selectByValue('.billing-form #personTitle', 'Mr');
      browser.setValue('.billing-form #firstName', 'Sumit');
      browser.setValue('.billing-form #lastName', 'Roy');
      browser.setValue('.billing-form #phone1', '07459686444');
      browser.setValue('.billing-form #postcode', 'E20 1BF');
      browser.click('.billing-form .btn--find-address');
      browser.waitForVisible('.scrollable-list__item-odd', 10000);
      browser.click('.scrollable-list__item-odd');
      browser.click('.payment-button');
      browser.click('input[type="submit"]');
      //browser.waitForEnabled('.checkout-button', 10000);
      //browser.click('.checkout-button');
      //console.log(browser.element('.checkout-button'))
      //expect(browser.element('.minibag-summary__button--bag')).to.contain('BAG');
    //  browser.waitForVisible('script + .minibag-container', 10000);
      //console.log(browser.element('.minibag-summary__button--bag'));
    //expect(browser.element('.basket-title col').getText()).to.be.equal('Your secure bag');
      //expect(browser.element('.minibag-summary__button--bag').getText()).to.contain('BAG');
      //browser.call(done);
      });

  });
