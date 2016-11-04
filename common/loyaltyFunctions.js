module.exports = {
    pageVerification: pageVerification,
    signIn: signIn
};

function pageVerification() {
    browser.waitForVisible('.sparks a.link');
    browser.click('.sparks a.link');
    expect(browser.getTitle()).to.contain('M&S Sparks');
}

function signIn() {
    //Sign In to Sparks
    browser.waitForEnabled('.btn--north-primary');
    browser.click('.btn--north-primary');

    //Entering Login details
    browser.setValue('#email', 'aroraneha.16@gmail.com');
    browser.setValue('#password', 'wcs12345');

    browser.scroll('#email');
    //Clicking Submit button
    browser.click('.btn--north-primary');
}
