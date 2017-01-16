var checkoutLoc = require("../resources/checkoutLocator")
var userSuffix = Date.now();

module.exports = {
    checkoutLogin: checkoutLogin,
    guestCheckout: guestCheckout,
    dmsSddSelected: dmsSddSelected,
    addAddressFields: addAddressFields,
    postcodeSearch: postcodeSearch,
    addressAdded: addressAdded,
    payment: payment,
    addCardForm: addCardForm,
    guestEmail: guestEmail,
    orderReview: orderReview,
    placeOrder: placeOrder,
    expressCheckout: expressCheckout,
    checkoutRegistration: checkoutRegistration,
    addStoreDMS: addStoreDMS,
    payByVoucher: payByVoucher,
    giftCardApply: giftCardApply

};

function checkoutLogin() {
    browser.setValue(checkoutLoc.emailId, 'test5@gmail.com');
    browser.setValue(checkoutLoc.password, 'testing@123');
    browser.click(checkoutLoc.login);
}

function guestCheckout() {
    browser.waitForVisible(checkoutLoc.guestCheckout);
    browser.click(checkoutLoc.guestCheckout);
}

function dmsSddSelected() {
    browser.waitForVisible(checkoutLoc.dmsOpen);
    browser.click(checkoutLoc.sddSelect);
    browser.waitForVisible(checkoutLoc.sddActive, 10000, true);
    browser.click(checkoutLoc.addAddress);
}

function addAddressFields() {
    browser.selectByValue(checkoutLoc.title, 'Ms');
    browser.setValue(checkoutLoc.firstName, 'Ramy');
    browser.setValue(checkoutLoc.lastName, 'Kaur');
    browser.setValue(checkoutLoc.phone, '07405271430');
    browser.setValue(checkoutLoc.postcode, 'E201BA');
}

function postcodeSearch() {
    browser.click(checkoutLoc.findAddress);
    browser.waitForVisible(checkoutLoc.addressList);
    browser.moveToObject(checkoutLoc.selectAddress);
    browser.click(checkoutLoc.selectAddress);
    browser.waitForVisible(checkoutLoc.cityAutoUpdated);
}

function addressAdded() {
    browser.moveToObject(checkoutLoc.addButton);
    browser.click(checkoutLoc.addButton);
    browser.isVisible(checkoutLoc.successMsg);
    browser.waitForVisible(checkoutLoc.addressDisplay);

}

function payment() {
    browser.moveToObject(checkoutLoc.continueToPayment);
    browser.click(checkoutLoc.continueToPayment);
    browser.waitForVisible(checkoutLoc.paymentPageOpen);

}

function addCardForm() {
    browser.selectByValue(checkoutLoc.cardType, '11101_M&S Credit Card');
    browser.setValue(checkoutLoc.cardNumber, '5299301234567791');
    browser.setValue(checkoutLoc.expiryDate, '09');
    browser.setValue(checkoutLoc.expiryMonth, '19');
    browser.setValue(checkoutLoc.securityNo, '123');
}

function guestEmail() {
    browser.moveToObject(checkoutLoc.guestEmailId);
    browser.setValue(checkoutLoc.guestEmailId, 'guestnew@gmail.com');
}

function orderReview() {
    browser.moveToObject(checkoutLoc.scrollToFooter);
    browser.click(checkoutLoc.continueToOrderReview);
}

function placeOrder() {
    browser.waitForVisible(checkoutLoc.orderReviewPageOpen);
    browser.click(checkoutLoc.orderReviewTandC);
    browser.click(checkoutLoc.placeOrderButton);
    browser.waitForVisible(checkoutLoc.orderConfirmPageOpen);
}

function expressCheckout() {
    browser.setValue(checkoutLoc.securityNum, '234');
    browser.moveToObject(checkoutLoc.placeOrderSpc);
    browser.click(checkoutLoc.placeOrderSpc);
    browser.waitForVisible(checkoutLoc.orderConfirmPageOpen);
}

function checkoutRegistration() {
    browser.moveToObject(checkoutLoc.scrollToFooter);
    browser.click(checkoutLoc.registerLink);
    browser.waitForVisible(checkoutLoc.registrationPageOpen);
    browser.selectByValue(checkoutLoc.selectTitle, 'Ms');
    browser.setValue(checkoutLoc.fName, 'Test');
    browser.setValue(checkoutLoc.lName, 'User');
    browser.setValue(checkoutLoc.emailId, 'test' + userSuffix + '@gmail.com');
    browser.setValue(checkoutLoc.password, 'testing@123');
    browser.setValue(checkoutLoc.retypePassword, 'testing@123');
    browser.moveToObject(checkoutLoc.scrollToFooter);
    browser.click(checkoutLoc.createAccount);
}

function addStoreDMS(cityName) {
    browser.click(checkoutLoc.addStoreButton);
    browser.waitForVisible(checkoutLoc.storeFinderSearch);
    browser.setValue(checkoutLoc.storeFinderSearch, cityName);
    browser.click(checkoutLoc.findButton);
    browser.waitForVisible(checkoutLoc.storeResults);
    browser.click(checkoutLoc.selectStore);
    browser.waitForVisible(checkoutLoc.calendarDisplay);
    browser.click(checkoutLoc.selectDate);
    browser.click(checkoutLoc.confirmDateSelection);
    browser.waitForVisible(checkoutLoc.storeOverlayClosed, 10000, true);
    browser.waitForVisible(checkoutLoc.addedStoreDisplay, 30000);
    browser.isVisible(checkoutLoc.selectedDateDisplay);
}

function payByVoucher() {
    browser.click(checkoutLoc.gcLrvAccordianOpen);
    browser.setValue(checkoutLoc.entryField, '9988995100023017');
    browser.setValue(checkoutLoc.enterPin, '83533');
    browser.click(checkoutLoc.applyButton);
    browser.waitForVisible(checkoutLoc.gcApplied);
}

function giftCardApply() {
    browser.click(checkoutLoc.gcAccordianOpen);
    browser.moveToObject(checkoutLoc.promoAccordian);
    browser.setValue(checkoutLoc.giftCardEntry1, '9988');
    browser.setValue(checkoutLoc.giftCardEntry2, '9951');
    browser.setValue(checkoutLoc.giftCardEntry3, '0002');
    browser.setValue(checkoutLoc.giftCardEntry4, '3017');
    browser.setValue(checkoutLoc.giftCardPin, '83533');
    browser.click(checkoutLoc.apply);
    browser.waitForVisible(checkoutLoc.giftCardApplied);
}
