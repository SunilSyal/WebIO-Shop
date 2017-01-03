var checkoutLoc = require("../resources/checkoutLocator")

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
    expressCheckout: expressCheckout

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
    browser.click(checkoutLoc.continueToOrderReview);
    browser.waitForVisible(checkoutLoc.orderReviewPageOpen);
    browser.click(checkoutLoc.orderReviewTandC);
}

function placeOrder() {
    browser.click(checkoutLoc.placeOrderButton);
    browser.waitForVisible(checkoutLoc.orderConfirmPageOpen);
}

function expressCheckout() {
    browser.setValue(checkoutLoc.securityNum, '234');
    browser.moveToObject(checkoutLoc.placeOrderSpc);
    browser.click(checkoutLoc.placeOrderSpc);
    browser.waitForVisible(checkoutLoc.orderConfirmPageOpen);
}
