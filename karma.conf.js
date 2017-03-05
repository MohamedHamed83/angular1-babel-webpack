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
      require('karma-mocha'),
      require('karma-sourcemap-loader'),
      require('karma-mocha-reporter'),
      require('istanbul-instrumenter-loader'),
      require('karma-remap-coverage'),
      require('karma-spec-reporter')
    ],
    reporters: ['spec'],

    files: [
      // Grab all files in the app folder that contain .spec.
      {
        pattern: 'karma.shim.js',
        watched: false
      }
    ],

    preprocessors: {
      'karma.shim.js': ['webpack', 'sourcemap']
    },

    browsers: [
      // 'PhantomJS'
      'Chrome'
    ],

    singleRun: true,
    colors: true,
    concurrency: Infinity,
    logLevel: config.LOG_INFO,
    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
          type: 'text-summary'
        },
        {
          type: 'html'
        }
      ]
    },

    webpack: require('./config/webpack.test'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};
