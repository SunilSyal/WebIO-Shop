var specs = require('./specs');
var specArr = specs.getSpecs(process.argv);
global.domainName = "http://www.marksandspencer.com";

var argsInfo = 'Page:: ' + specs.fnGetArgValue(process.argv, '-p') + ', Breakpoint:: ' + specs.fnGetArgValue(process.argv, '-b');

var capabilities = {
    'large': [{
        name: 'Browser:: Chrome, ' + argsInfo,
        browserName: 'chrome'
    }],

    'medium': [{
        name: 'Browser:: Chrome, ' + argsInfo,
        browserName: 'chrome',
        chromeOptions: {
            'mobileEmulation': {
                deviceMetrics: {
                    'width': 992,
                    'height': 1024,
                    'pixelRatio': 2
                }
            }
        }
    }],

    'small': [{
        name: 'Browser:: Chrome, ' + argsInfo,
        browserName: 'chrome',
        chromeOptions: {
            'mobileEmulation': {
                deviceMetrics: {
                    'width': 768,
                    'height': 1024,
                    'pixelRatio': 2
                }
            }
        }
    }],

    'xsmall': [{
        name: 'Browser:: Chrome, ' + argsInfo,
        browserName: 'chrome',
        chromeOptions: {
            'mobileEmulation': {
                deviceMetrics: {
                    'width': 480,
                    'height': 768,
                    'pixelRatio': 2
                }
            }
        }
    }]
}

exports.config = {

    host: 'localhost',
    port: 4444,

    // user: 'ajayvashist',
    // key: '3a3de365-598e-46f8-8d34-5a669e754e95',

    specs: specArr,

    services: ['selenium-standalone'],

    maxInstances: 10,

    waitforTimeout: 15000,

    capabilities: capabilities[specs.fnGetArgValue(process.argv, '-b')],

    sync: true,
    reporters: ['spec'],

    before: function() {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
        chai.Should();
    }
}
