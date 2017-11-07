var cftoLoc = require("../resources/cftoLocator")

module.exports = {
    addToBag: addToBag,
    logIn: logIn,
    search: search,
    chooseCollection: chooseCollection,
    cardDetailsLightBox: cardDetailsLightBox,
    cardDetailsForm: cardDetailsForm,
    userAddressForm: userAddressForm,
    enterAddressManually: enterAddressManually,
    paymentReviewOrder: paymentReviewOrder
};

function addToBag() {
    browser.scroll(cftoLoc.addToBag);
    browser.click(cftoLoc.addToBag);
    browser.waitForVisible(cftoLoc.miniBagContainer);
    browser.click(cftoLoc.miniBag);
}

function logIn() // Function to provide Login Information
{
    browser.setValue(cftoLoc.email, 'sroy@sapient.com');
    browser.setValue(cftoLoc.password, 'welcome1');
    browser.waitForEnabled(cftoLoc.signIn);
    browser.click(cftoLoc.signIn);
}

function search() { // Function to perform search operation on CFTO site
    browser.scroll(cftoLoc.globalSearch, 'Turkey');
    browser.setValue(cftoLoc.globalSearch, 'Turkey');
    browser.click(cftoLoc.globalSearchButton);
}

function chooseCollection() {

    //Confirm the selected store from the store list
    browser.scroll(cftoLoc.collectionStoreList);
    browser.click(cftoLoc.collectionStoreList);
    browser.scroll(cftoLoc.collectionButton);
    browser.click(cftoLoc.collectionButton);

    //Confirm the store selection date
    browser.scroll(cftoLoc.collectionDateSelect);
    browser.click(cftoLoc.collectionDateSelect);
    browser.scroll(cftoLoc.collectionDateConfirm);
    browser.click(cftoLoc.collectionDateConfirm);

    //Select the store selection time slot
    browser.scroll(cftoLoc.collectionTimeSlot);
    browser.click(cftoLoc.collectionTimeSlot);
    browser.scroll(cftoLoc.collectionTimeConfirm);
    browser.click(cftoLoc.collectionTimeConfirm);

    //Click to confirm the choosen collection slot data & move-on to payment page
    browser.scroll(cftoLoc.confirmCollection);
    browser.click(cftoLoc.confirmCollection);
}

function cardDetailsLightBox() {
    browser.selectByValue(cftoLoc.selectCardType, '11105_Mastercard');
    browser.setValue(cftoLoc.enterCardNumber, '5105105105105100');
    browser.setValue(cftoLoc.selectExpiryMonth, '02');
    browser.setValue(cftoLoc.selectExpiryYear, '18');
    browser.setValue(cftoLoc.enterCardCvv, '609');
}

function cardDetailsForm() {
    browser.selectByValue(cftoLoc.selectCardType, '11105_Mastercard');
    browser.setValue(cftoLoc.enterCardNumberForm, '5454609899026213');
    browser.setValue(cftoLoc.selectExpiryMonthForm, '02');
    browser.setValue(cftoLoc.selectExpiryYearForm, '18');
    browser.setValue(cftoLoc.enterCardCvvForm, '215');
}

function userAddressForm() {
    browser.selectByValue(cftoLoc.selectTitle, 'Mr');
    browser.setValue(cftoLoc.firstName, 'Sumit');
    browser.setValue(cftoLoc.lastName, 'Roy');
    browser.setValue(cftoLoc.phoneNumber, '07459686444');
    browser.setValue(cftoLoc.address1, '23, Egremont House');
    browser.setValue(cftoLoc.city, 'London');
    browser.setValue(cftoLoc.postCode, 'E20 1BF');
    browser.setValue(cftoLoc.emailId, 'sroy@sapient.com');
}

function enterAddressManually() {
    browser.scroll(cftoLoc.enterAddressManually);
    browser.click(cftoLoc.enterAddressManually);
}

function paymentReviewOrder() {
    browser.scroll(cftoLoc.confirmPayment);
    browser.click(cftoLoc.confirmPayment);
    browser.click(cftoLoc.termsAndConditions);
    browser.click(cftoLoc.confirmOrder);
}
