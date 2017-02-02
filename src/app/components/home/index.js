
require('./home.scss')
import homeComponent from './home.component';
import '../../common/services/index';

export default angular.module('components.home', ['fitnessClub.services'])
  .component('homeComponent', homeComponent)
  .name;
