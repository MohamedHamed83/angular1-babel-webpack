// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],
    plugins: [
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-sourcemap-loader')
    ],
    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // Grab all files in the app folder that contain .spec.
       { pattern: 'config/karma.shim.js', watched: false }
    ],

    preprocessors: {
      'config/karma.shim.js': ['webpack', 'sourcemap']
    },

    browsers: [
      // 'PhantomJS'
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'html' }
      ]
    },

    webpack: require('./config/webpack.test'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};
