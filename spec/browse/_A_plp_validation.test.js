describe.only('Browse PLP Validations', function() {

    beforeEach(function() {
        browser.url(domainName + '/');
    })


    it('Should verify product landing page and facet selection', function() {
        this.timeout(0);
        browser.moveToObject('a[data-analyticsid="#_WOMEN"]');
        browser.waitForVisible('a[href*="/l/women/dresses"]');
        browser.moveToObject('a[href*="/l/women/dresses"]');
        browser.click('a[href*="/l/women/dresses"]');
        expect(browser.getTitle()).contain('Dresses');
        browser.waitForVisible('.item-count .count');
        var itemCount = browser.getText('.item-count .count');
        browser.scroll('input[data-facettype="Style"] + label + .content ul li');
        browser.click('input[data-facettype="Style"] + label + .content ul li + li a');
        browser.pause(5000);
        browser.waitForVisible('.item-count .count');
        var newCount = browser.getText('.item-count .count');
        browser.scroll('input[data-facettype="Style"] + label + .content ul li');
        var facetCount = browser.getText('input[data-facettype="Style"] + label + .content ul li label');
        var finalCount = facetCount[0].replace(/[{()}]/g, '').match(/\d/g).join("");
        expect(finalCount === newCount[0]);
        browser.click('.reset-all');
        browser.waitForVisible('.item-count .count');
    });
});
