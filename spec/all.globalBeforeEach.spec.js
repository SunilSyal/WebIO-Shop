  describe('Testing - CFTO UK Site', function() {


function log_in()
{
  browser.setValue('#loginEmail', 'sroy@sapient.com');
  browser.setValue('#loginPassword', 'welcome1');
}

function isMerge()
{
  var el = browser.getTitle();
  if(el == 'My Basket')
  {
  browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
  browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
  }
  else {
  browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
  }
}


it.only('Place an UK CFTO order with registered user with added item', function() {

    this.timeout(0);
    browser.click('.add-to-bag__btn');
    browser.waitForVisible('script + .minibag-container', 10000);
    browser.click('script + .minibag-container .minibag-summary__button');
    browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
    log_in();
    browser.waitForEnabled('.my-account__subcontent__signIn-btn', 10000);
    browser.click('.my-account__subcontent__signIn-btn');
    isMerge();
    browser.click('.collection--store-finder__search-form__btn');
    browser.click('.btn--primary');
    browser.click('.btn--primary');
    browser.click('.collection-continue .btn--primary');
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
    expect(browser.element('span[ng-bind="contentText.orderNumber"]').getText()).to.contain('401');
    });


    it('Place an UK CFTO order with guest user', function() {
      this.timeout(0);
      browser.click('.add-to-bag__btn');
      browser.waitForVisible('script + .minibag-container', 10000);
      browser.click('script + .minibag-container .minibag-summary__button');
      browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
      browser.click('#guestCheckoutContButton');
      browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
      browser.click('.collection--store-finder__search-form__btn');
      browser.click('.btn--primary');
      browser.click('.btn--primary');
      browser.click('.collection-continue .btn--primary');
      browser.click('.collection--summary__btn');
      browser.selectByValue('select[name="cardType"]', '11105_Mastercard');
      browser.setValue('.credit-debit-card-form #account', '5105105105105100');
      browser.setValue('.credit-debit-card-form #expiryMonth', '02');
      browser.setValue('.credit-debit-card-form #expiryYear', '18');
      browser.setValue('.credit-debit-card-form #cvv', '609');
      browser.click('.payment__manual-link');
      browser.selectByValue('.billing-form #personTitle', 'Mr');
      browser.setValue('.billing-form #firstName', 'Sumit');
      browser.setValue('.billing-form #lastName', 'Roy');
      browser.setValue('.billing-form #phone1', '07459686444');
      browser.setValue('.billing-form #address1', '23, Egremont House');
      browser.setValue('.billing-form #city', 'London');
      browser.setValue('.billing-form #zipCode', 'E20 1BF');
      browser.setValue('#guestemail', 'sroy@sapient.com');
      browser.waitForEnabled('.payment-button ', 30000);
      browser.click('.payment-button');
      browser.click('.order-review__terms .lbl-checkbox');
      browser.waitForEnabled('input[type="submit"]', 5000);
      browser.click('input[type="submit"]');
      expect(browser.element('span[ng-bind="contentText.orderNumber"]').getText()).to.contain('401');
      });
  });
