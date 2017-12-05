var cftoLoc = require("../resources/cftoLocator")

module.exports = {
    addToBag: addToBag,
    logIn: logIn,
    search: search,
    chooseCollectionStoreUK: chooseCollectionStoreUK,
    chooseCollectionStoreIE: chooseCollectionStoreIE,
    chooseCollectionSlot: chooseCollectionSlot,
    cardDetailsLightBox: cardDetailsLightBox,
    cardDetailsForm: cardDetailsForm,
    userAddressForm: userAddressForm,
    enterAddressManually: enterAddressManually,
    paymentReviewOrder: paymentReviewOrder,
    closeSurvey: closeSurvey

};

  function closeSurvey() {
var survey = browser.isVisible(cftoLoc.surveyAvailable);
    if(survey === true)
    {
     browser.click(cftoLoc.surveyCancel);
    }else
  {
    return 0;
  }

}

function addToBag() {
    browser.scroll(cftoLoc.addToBag);
    closeSurvey();
    browser.click(cftoLoc.addToBag);
    closeSurvey();
    browser.waitForVisible(cftoLoc.miniBagContainer);
    closeSurvey();
    browser.click(cftoLoc.miniBag);
    closeSurvey();
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

function chooseCollectionStoreUK() {

    //Confirm the selected UK store from the store list
    closeSurvey();
    browser.scroll(cftoLoc.collectionStoreList);
    closeSurvey();
    browser.click(cftoLoc.collectionStoreList);
    closeSurvey();
    browser.scroll(cftoLoc.collectionButton);
    closeSurvey();
    browser.click(cftoLoc.collectionButton);
    closeSurvey();
}

function chooseCollectionStoreIE() {

    //Confirm the selected IE store from the store list
    closeSurvey();
    browser.scroll(cftoLoc.collectionStoreIE);
    closeSurvey();
    browser.click(cftoLoc.collectionStoreIE);
    closeSurvey();
    browser.scroll(cftoLoc.collectionButton);
    closeSurvey();
    browser.click(cftoLoc.collectionButton);
    closeSurvey();
}

function chooseCollectionSlot() {

    //Confirm the store selection date
    closeSurvey();
    browser.scroll(cftoLoc.collectionDateSelect);
    closeSurvey();
    browser.click(cftoLoc.collectionDateSelect);
    closeSurvey();
    browser.scroll(cftoLoc.collectionDateConfirm);
    closeSurvey();
    browser.click(cftoLoc.collectionDateConfirm);
    closeSurvey();

    //Select the store selection time slot
    closeSurvey();
    browser.scroll(cftoLoc.collectionTimeSlot);
    closeSurvey();
    browser.click(cftoLoc.collectionTimeSlot);
    closeSurvey();
    browser.scroll(cftoLoc.collectionTimeConfirm);
    closeSurvey();
    browser.click(cftoLoc.collectionTimeConfirm);
    closeSurvey();

    //Click to confirm the choosen collection slot data & move-on to payment page
    browser.scroll(cftoLoc.confirmCollection);
    browser.click(cftoLoc.confirmCollection);
}

function cardDetailsLightBox() {
    browser.selectByValue(cftoLoc.selectCardType, '11104_Visa');
    browser.setValue(cftoLoc.enterCardNumber, '4012001038443335');
    browser.setValue(cftoLoc.selectExpiryMonth, '02');
    browser.setValue(cftoLoc.selectExpiryYear, '18');
    browser.setValue(cftoLoc.enterCardCvv, '609');
}

function cardDetailsForm() {
    browser.selectByValue(cftoLoc.selectCardType, '11104_Visa');
    browser.setValue(cftoLoc.enterCardNumberForm, '4012001038443335');
    browser.setValue(cftoLoc.selectExpiryMonthForm, '02');
    browser.setValue(cftoLoc.selectExpiryYearForm, '18');
    browser.setValue(cftoLoc.enterCardCvvForm, '609');
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
    closeSurvey();
    browser.scroll(cftoLoc.enterAddressManually);
    browser.click(cftoLoc.enterAddressManually);
    closeSurvey();
}

function paymentReviewOrder() {
    browser.scroll(cftoLoc.confirmPayment);
    browser.click(cftoLoc.confirmPayment);
    browser.click(cftoLoc.termsAndConditions);
    browser.click(cftoLoc.confirmOrder);
}
