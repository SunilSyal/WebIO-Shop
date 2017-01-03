 var miniBagLoc = require("../resources/checkoutLocator")

module.exports = {
    miniBagViewBasket: miniBagViewBasket,
    miniBagCheckout: miniBagCheckout
};

function miniBagViewBasket() {
  browser.moveToObject(miniBagLoc.header);
  browser.click(miniBagLoc.viewBag);
}

function miniBagCheckout() {
  browser.moveToObject(miniBagLoc.header);
  browser.click(miniBagLoc.checkout);
}
