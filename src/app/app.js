import angular from 'angular';
import rx from 'rx';

import '../style/app.css';

let app = () => {
  return { 
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'test app';
    Rx.Observable.from([1,2,3,4,5,6,7,8])
    .map((item)=>{
      return item + 1 
    })
    .subscribe((testRx)=>{
      console.log('x:', testRx)
    })
  }
}

const MODULE_NAME = 'planIt';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;