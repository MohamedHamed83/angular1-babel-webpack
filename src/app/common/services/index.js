import plans from './plans.service'
import workouts from './workouts.service';

export default angular.module('services.limFit', [])
    .service('plans', plans)
    .service('workouts', workouts)
    .name;