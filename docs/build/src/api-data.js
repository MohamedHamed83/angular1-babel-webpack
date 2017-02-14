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
    "name": "ngPlans",
    "stateName": "ngPlans",
    "type": "module",
    "outputPath": "partials/api/ngPlans.html",
    "url": "api/ngPlans",
    "docs": [
      {
        "name": "$plansSvc",
        "stateName": "plansSvc",
        "type": "service",
        "outputPath": "partials/api/ngPlans/service/$plansSvc.html",
        "url": "api/ngPlans/service/$plansSvc"
      }
    ]
  },
  {
    "name": "ngWorkouts",
    "stateName": "ngWorkouts",
    "type": "module",
    "outputPath": "partials/api/ngWorkouts.html",
    "url": "api/ngWorkouts",
    "docs": [
      {
        "name": "$workoutsVmSvc",
        "stateName": "workoutsVmSvc",
        "type": "service",
        "outputPath": "partials/api/ngWorkouts/service/$workoutsVmSvc.html",
        "url": "api/ngWorkouts/service/$workoutsVmSvc"
      }
    ]
  },
  {
    "name": "ngWorkoutsByPlan",
    "stateName": "ngWorkoutsByPlan",
    "type": "module",
    "outputPath": "partials/api/ngWorkoutsByPlan.html",
    "url": "api/ngWorkoutsByPlan",
    "docs": [
      {
        "name": "$workoutsByPlanSvc",
        "stateName": "workoutsByPlanSvc",
        "type": "service",
        "outputPath": "partials/api/ngWorkoutsByPlan/service/$workoutsByPlanSvc.html",
        "url": "api/ngWorkoutsByPlan/service/$workoutsByPlanSvc"
      }
    ]
  },
  {
    "name": "ngFooter.component",
    "stateName": "ngFooterComponent",
    "type": "module",
    "outputPath": "partials/api/ngFooter.component.html",
    "url": "api/ngFooter.component",
    "docs": []
  }
]);
