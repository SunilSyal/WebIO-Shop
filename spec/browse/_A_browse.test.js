describe.only('Practice- Sample Tests', function() {

beforeEach(function(){
browser.url('http://www.marksandspencer.com/');
})
it ('Verify product landing page',function() {
this.timeout(0);
browser.moveToObject('a[data-analyticsid="#_WOMEN"]');
browser.waitForVisible('a[href*="/l/women/dresses"]',8000);
browser.moveToObject('a[href*="/l/women/dresses"]');
browser.click('a[href*="/l/women/dresses"]');
expect(browser.getTitle()).contain('Dresses');
});

it ('Verify facet selection',function(){
    this.timeout(0);
    browser.moveToObject('a[data-analyticsid="#_WOMEN"]');
    browser.waitForVisible('a[href*="/l/women/dresses"]',8000);
    browser.moveToObject('a[href*="/l/women/dresses"]');
    browser.click('a[href*="/l/women/dresses"]');
    expect(browser.getTitle()).contain('Dresses');
    browser.waitForVisible('.item-count .count',8000);
    var count = browser.getText('.item-count .count');
    browser.scroll('input[data-facettype="Style"] + label + .content ul li');
    browser.click('input[data-facettype="Style"] + label + .content ul li + li a');
    browser.waitForVisible('.loading-modal',9000);
    browser.waitForVisible('.loading-modal', true);
    browser.waitForVisible('.item-count .count',10000);
    var newCount = browser.getText('.item-count .count');
    browser.scroll('input[data-facettype="Style"] + label + .content ul li');
    var facetCount  = browser.getText('input[data-facettype="Style"] + label + .content ul li label');
    var numb = facetCount[0].replace(/[{()}]/g, '').match(/\d/g).join("");
    expect(numb === newCount[0]);
    browser.click('.reset-all');
    browser.waitForVisible('.item-count .count',10000);
});
});
