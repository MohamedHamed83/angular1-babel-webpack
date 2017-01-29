import '../vendors'
import '../style/app.css';

var firebase = require('firebase/app');
let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};
class AppCtrl {
  constructor($scope, $firebaseArray) {
    this.url = 'test app';
    let ref = firebase.database().ref().child("plans");
    $scope.plans = [];
    $scope.plans =  $firebaseArray(ref);
    console.log($scope.plans)
    // putting a console.log here won't work, see below
    // Rx.Observable.from([1,2,3,4,5,6,7,8])
    // .map((item)=>{
    //   return item + 1 
    // })
    // .subscribe((testRx)=>{
    //   console.log('x:', testRx)
    // })
  }
}

const MODULE_NAME = 'planIt';

angular.module(MODULE_NAME, ["firebase"])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)

export default MODULE_NAME;