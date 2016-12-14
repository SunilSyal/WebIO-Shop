module.exports = {
    miniBagViewBasket: miniBagViewBasket,
    miniBagCheckout: miniBagCheckout
};

function miniBagViewBasket() {
  browser.moveToObject('.header-link');
  browser.click('.secondary-btn');
}

function miniBagCheckout() {
  browser.moveToObject('.header-link');
  browser.click('.btn-checkout');
}
