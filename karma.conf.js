// Karma configuration
// Generated on Sun Jan 31 2016 10:43:17 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "./node_modules/angular/angular.min.js",
      "./node_modules/angular-aria/angular-aria.min.js",
      "./node_modules/angular-animate/angular-animate.min.js",
      "./node_modules/angular-material/angular-material.min.js",
      "./node_modules/angular-ui-router/release/angular-ui-router.min.js",
      "./node_modules/angular-resource/angular-resource.min.js",
      "./components/angular-material/material.module.js", // writ a note this had to come later after sidebar module was instantiated bc dependendent on it. (update - not dependency totally now this works when spelled out)
      "./layout/ganalytics.layout.js", // writ a note this had to come later after sidebar module was instantiated bc dependendent on it. (update - not dependency totally now this works when spelled out)
      // "./node_modules/angular-messages/angular-messages.min.js",

      "./app.js", // had this right under angular and it worked
      "./gallery/*.controller.js", // this has to go after app.js or else and injector error
      "./gallery/*.route.js", // this has to go after app.js or else and injector error
      "./gallery/pics-service.js",

      // "./gallery/*.js", used to be *.controller  & *.route.js but since no controller requiring a module - then okay this way

      "./components/**/mdsidebar/*.module.js",
      "./components/**/mdsidebar/*.controller.js",
      "lib/angular-mocks.js",
      "./gallery/gallery.route.spec.js",
      "./gallery/gallery.controller.spec.js"

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
