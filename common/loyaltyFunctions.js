var loyaltyLoc = require("../resources/loyaltyLocator")

module.exports = {
    pageVerification: pageVerification,
    signIn: signIn
};

function pageVerification() {
    browser.waitForVisible(loyaltyLoc.headerSparksLink);
    browser.click(loyaltyLoc.headerSparksLink);
    expect(browser.getTitle()).to.contain('M&S Sparks');
}

function signIn() {
    //Sign In to Sparks
    browser.waitForEnabled(loyaltyLoc.sparksSignInButton);
    browser.click(loyaltyLoc.sparksSignInButton);

    //Entering Login details
    browser.setValue(loyaltyLoc.sparksEmail, 'sjain65@gmail.com');
    browser.setValue(loyaltyLoc.sparksPassword, 'wcs12345');

    browser.scroll(loyaltyLoc.sparksEmail);
    //Clicking Submit button
    browser.click(loyaltyLoc.sparksSignInButton);
}
