module.exports = {
    addToBag: addToBag,
    logIn: logIn,
    search: search,
    chooseCollection: chooseCollection,
    cardDetailsLightBox: cardDetailsLightBox,
    cardDetailsForm: cardDetailsForm
};

function addToBag() {
    browser.click('.add-to-bag__btn');
    browser.waitForVisible('script + .minibag-container', 10000);
    browser.click('script + .minibag-container .minibag-summary__button');
    browser.click('button[data-analyticsfunction="analyticsCheckoutButtonClicked"]');
}

function logIn() // Function to provide Login Information
{
    browser.setValue('#loginEmail', 'sroy@sapient.com');
    browser.setValue('#loginPassword', 'welcome1');
    browser.waitForEnabled('.my-account__subcontent__signIn-btn', 10000);
    browser.click('.my-account__subcontent__signIn-btn');
}

function search() { // Function to perform search operation on CFTO site
    browser.setValue('.search-component__input', 'Turkey');
    browser.click('.search-component__btn');
}

function chooseCollection() {
    //Store Finder of the collection Page
    browser.setValue('.collection--store-finder__search-form__input', 'Covent Garden');
    browser.click('.collection--store-finder__search-form__btn');

    //Confirm the selected store from the store list
    browser.click('.btn--primary');

    //Confirm the store selection date
    browser.click('.btn--primary');

    //Select the store selection time slot
    browser.click('.collection-continue .btn--primary');

    //Click to confirm the choosen collection slot data & move-on to payment page
    browser.click('.collection--summary__btn');
}

function cardDetailsLightBox() {
    browser.selectByValue('select[name="cardType"]', '11105_Mastercard');
    browser.setValue('#account', '5105105105105100');
    browser.setValue('#expiryMonth', '02');
    browser.setValue('#expiryYear', '18');
    browser.setValue('div[ng-form="paymentDetailsCtrl.form"] #cvv', '609');
}

function cardDetailsForm() {
    browser.selectByValue('select[name="cardType"]', '11105_Mastercard');
    browser.setValue('.payment-method #account', '5105105105105100');
    browser.setValue('.payment-method #expiryMonth', '02');
    browser.setValue('.payment-method #expiryYear', '18');
    browser.setValue('.payment-method #cvv', '609');
}