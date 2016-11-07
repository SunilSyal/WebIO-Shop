var specs = require('./specs');
var specArr = specs.getSpecs(process.argv);
var argsInfo = specs.fnGetArgValue(process.argv, '-p');

exports.config = {
    services: ['selenium-standalone'],
    user: 'ajayvashist',
    key: '3a3de365-598e-46f8-8d34-5a669e754e95',
    maxInstances: 10,
    capabilities: [
        {
            name: 'Chrome, XS',
            browserName: 'chrome',
            specs: [
                './spec/'+argsInfo+'/*.js'
            ],
            chromeOptions: {
                'mobileEmulation': {
                    deviceMetrics: {
                        'width': 480,
                        'height': 768,
                        'pixelRatio': 2
                    }
                }
            }
        },
        {
            name: 'Chrome, Medium',
            browserName: 'chrome',
            specs: [
                './spec/'+argsInfo+'/*.js'
            ],
            chromeOptions: {
                'mobileEmulation': {
                    deviceMetrics: {
                        'width': 992,
                        'height': 1024,
                        'pixelRatio': 2
                    }
                }
            }
        },
        {
            name: 'Chrome, small',
            browserName: 'chrome',
            specs: [
                './spec/'+argsInfo+'/*.js'
            ],
            chromeOptions: {
                'mobileEmulation': {
                    deviceMetrics: {
                        'width': 768,
                        'height': 1024,
                        'pixelRatio': 2
                    }
                }
            }
        },
        {
            name: 'Chrome, Large',
            browserName: 'chrome',
            specs: [
                './spec/'+argsInfo+'/*.js'
            ]
        },
        {
            name: 'Firefox',
            browserName: 'firefox',
            specs: [
                './spec/'+argsInfo+'/*.js'
            ]
        },
    ],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    waitforTimeout: 60000,
    reporters: ['spec'],
    before: function() {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
        chai.Should();
    }
}
