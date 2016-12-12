module.exports = {
    checkoutLogin: checkoutLogin,
    guestCheckout: guestCheckout,
    dmsSddSelected: dmsSddSelected,
    addAddressFields: addAddressFields,
    postcodeSearch: postcodeSearch
};

function checkoutLogin() {
  browser.setValue('#loginEmail', 'test5@gmail.com');
  browser.setValue('#loginPassword', 'testing@123');
  browser.click('.my-account__subcontent__signIn-btn');
}

function guestCheckout() {
  browser.waitForVisible('#guestCheckoutContButton');
  browser.click('#guestCheckoutContButton');
}

function dmsSddSelected() {
  browser.waitForVisible('.delivery-grp__header');
  browser.click('li.row.delivery-mode__item.delivery-mode__item__sdd');
  browser.waitForVisible('.delivery-mode__inactive-layer',10000,true);
  browser.click('li.row.delivery-mode__item.delivery-mode__item__sdd .delivery-mode__action-item');
}

function addAddressFields() {
browser.selectByValue('#personTitle', 'Ms');
browser.setValue('#firstName', 'Ramy');
browser.setValue('#lastName', 'Kaur');
browser.setValue('#phone1', '07405271430');
browser.setValue('#postcode', 'E201BA');
}

function postcodeSearch() {
  browser.click('.btn.btn--primary.btn--find-address');
  browser.waitForVisible('ul.scrollable-list');
  browser.moveToObject('a.scrollable-list__item.ng-binding.scrollable-list__item-odd');
  browser.click('a.scrollable-list__item.ng-binding.scrollable-list__item-odd');
  browser.waitForVisible('#city');
}
