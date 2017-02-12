angular
    .module('docs')
    .constant('API_DATA', [
  {
    "name": "fitnessClub",
    "stateName": "fitnessClub",
    "type": "module",
    "outputPath": "partials/api/fitnessClub.html",
    "url": "api/fitnessClub",
    "docs": []
  },
  {
    "name": "plans.service",
    "stateName": "plansService",
    "type": "module",
    "outputPath": "partials/api/plans.service.html",
    "url": "api/plans.service",
    "docs": [
      {
        "name": "plans",
        "stateName": "plans",
        "type": "service",
        "outputPath": "partials/api/plans.service/service/plans.html",
        "url": "api/plans.service/service/plans"
      }
    ]
  }
]);
