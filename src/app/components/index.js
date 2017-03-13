//firebase modules
import 'firebase/auth';
import 'firebase/database';

//services module
import '../common/services/index';
//components routing
import routing from './components.routes';
// stateless components
import './common/header/header.component';
import './common/footer/footer.component';
import './login/login.component';
import './common/navbar/navbar.component';
//thumbnail view components
import './common/thumbnails/index';
//listview components
import './common/list/index';
//search bar component
import './common/searchBar/searchBar.component';
// stateful  components
import './home/home.component';
//Muscle Group componente
import './muscleGroups/index';

//plans componente
import './plans/index';


//workout componente
import './workouts/index';

//application components module
export default angular.module('components', ['services',
    'ngSearchBarModule', 'homeModule', 'loginModule',
    'ngHeaderModule', 'ngFooterModule', 'ngNavbarModule', 'nglistviewModule',
    'plansModule', 'muscleGroupModule', 'ngThumbnailsModule', 'workoutsModule'
  ])
  .config(routing)
  .name;
