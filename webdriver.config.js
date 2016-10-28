var SMALL = "small";
var ALL = "all";
var XSMALL = "xsmall";

exports.config = {

    host: 'localhost',
    port: 4444,

    specs: [
        'spec/**/all.gl*.spec.js'
    ],

    services: ['selenium-standalone'],

    // Patterns to exclude.
    exclude: [
        'spec/multibrowser/**',
        'spec/mobile/**'
    ],

    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome'
    }

    /* {
        browserName: 'firefox',
        exclude: [
            'spec/sample*.*'
        ],
    }
*/
  ],

    sync: true,
    reporters: ['spec'],

    before: function(capabilities, specs) {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
        chai.Should();
        browser.url('http://christmasfood.marksandspencer.com');

    }
}
