module.exports = {
    miniBagViewBasket: miniBagViewBasket,
    miniBagCheckout: miniBagCheckout
};

function miniBagViewBasket() {
  browser.moveToObject('a.header-link');
  browser.click('a.btn-bag secondary-btn');
}

function miniBagCheckout() {
  browser.moveToObject('a.header-link');
  browser.click('a.btn-checkout.primary-btn');
}
