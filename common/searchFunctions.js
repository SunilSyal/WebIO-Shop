module.exports = {
    searchProductOnMainPage: searchProductOnMainPage
};

function searchProductOnMainPage(productID) {
    browser.waitForVisible('#global-search');
    browser.moveToObject('#global-search');
    browser.click('#global-search');
    browser.setValue('#global-search', productID);
    browser.moveToObject('#goButton');
    browser.click('#goButton');
}
