var browseLoc = require("../resources/browseLocator")
module.exports = {
    searchProductOnMainPage: searchProductOnMainPage,
    pdpAddtoBag: pdpAddtoBag,
    WineSubAddToBag: WineSubAddToBag
};

function searchProductOnMainPage(productID) {
    browser.waitForVisible(browseLoc.searchBox);
    browser.moveToObject(browseLoc.searchBox);
    browser.click(browseLoc.searchBox);
    browser.setValue(browseLoc.searchBox, productID);
    browser.moveToObject(browseLoc.goButton);
    browser.click(browseLoc.goButton);
}

// No colour No Size Non FEAR Add to bag
function pdpAddtoBag() {
    browser.waitForVisible(browseLoc.pdpOpen);
    browser.moveToObject(browseLoc.atbButton);
    browser.click(browseLoc.atbButton);
    browser.waitForVisible(browseLoc.addedToBagOverlay);
}

function WineSubAddToBag() {
    browser.moveToObject(browseLoc.topNavMoveToFoodL1Link);
    browser.waitForVisible(browseLoc.wineSubLinkTopNav);
    browser.moveToObject(browseLoc.wineSubLinkTopNav);
    browser.click(browseLoc.wineSubLinkTopNav);
    browser.click(browseLoc.wineClubClassicLink);
    browser.scroll(browseLoc.wineClubAddToBag);
    browser.click(browseLoc.wineClubAddToBag);
    browser.waitForVisible(browseLoc.addedToBagOverlay);

}
