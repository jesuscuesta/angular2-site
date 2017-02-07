'use strict';

const argv = require('yargs').argv;
const fs = require('fs');

module.exports = function(config) {
  var testWebpackConfig = require('./config/webpack.test.js')({env: 'test'});  
  var appconfig = JSON.parse(fs.readFileSync('./config/app.config.json'));
  var environment = (argv.dev) ? 'dev' : 'pro';
  var threshold = appconfig.coverage_threshold[environment];
  var configuration = {

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    /*
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['phantomjs-shim','jasmine'],

    // list of files to exclude
    exclude: [ ],

    /*
     * list of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [ 
      { pattern: './config/spec-bundle.js', watched: false },
      { pattern: './src/assets/**/*.png', included: false, served: true},
      { pattern: './src/assets/**/*.jpg', included: false, served: true},
      { pattern: './i18n/**/*.json', included: false, served: true},
      { pattern: './src/assets/**/*.json', included: false, served: true}
    ],
    proxies: {
      '/assets/': '/base/src/assets/',
      '/i18n/':'/base/i18n/'
    },
    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    // Webpack Config at ./webpack.test.js
    webpack: testWebpackConfig,

    coverageReporter: {
      type: 'in-memory',
      check: {
        global: {
          statements: threshold.statements,
          branches: threshold.branches,
          functions: threshold.functions,
          lines: threshold.lines,
          excludes: []
        }
      }
    },

    remapCoverageReporter: {
      'text-summary': null,
      'text':null,
      json: './test-reports/coverage.json',
      html: './test-reports/html',
      cobertura: './test-reports/cobertura.xml'
    },

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: { stats: 'errors-only'},

    /*
     * test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: [ 'mocha', 'coverage', 'remap-coverage' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    /*
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: ['PhantomJS'],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browserNoActivityTimeout: 1000000,

    /*
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: true
  };

  if (process.env.TRAVIS){
    configuration.browsers = [
      'ChromeTravisCi'
    ];
  }

  config.set(configuration);
};
