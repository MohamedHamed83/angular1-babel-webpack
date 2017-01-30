// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';
 
var appContext = require.context('../src', true, /\.spec\.js/);

appContext.keys().forEach(appContext);

