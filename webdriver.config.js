var specs = require('./specs');
var specArr = specs.getSpecs(process.argv);
global.domainName = "http://www.stage.marksandspencer.com";

var argsInfo = 'Page:: ' + specs.fnGetArgValue(process.argv, '-p') + ', Breakpoint:: ' + specs.fnGetArgValue(process.argv, '-b');

var capabilities = {

   'firefox': [{
      name: 'Browser:: firefox, ' + argsInfo,
      browserName: 'firefox'
    }],

    'phantomjs' : [{
       name: 'Browser:: phantomjs, ' + argsInfo,
       browserName: 'phantomjs'
     }],

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

    //user: 'sroy14',
    //key: '0e026a53-b243-4498-b9fe-e2963dfb68cb',

    specs: specArr,

    services: ['selenium-standalone', 'chromedriver'],

    maxInstances: 10,

    waitforTimeout: 15000,

    capabilities: capabilities[specs.fnGetArgValue(process.argv, '-b')],

    sync: true,


    reporters: ['junit','allure'],
    reporterOptions: {
      junit: {
            outputDir: './'
             },
      allure: {
            outputDir: 'allure-results'
                }
    },


    before: function() {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
        chai.Should();
    }
}
