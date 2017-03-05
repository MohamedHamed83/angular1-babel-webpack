import {
  listItemComponent,
  listItemController
} from './listItem/listItem.component';
import {
  listviewComponent,
  listviewController
} from './listview/listview.component';

export default angular.module('nglistviewModule', [])
  .component('listviewComponent', listviewComponent)
  .component('listItemComponent', listItemComponent)
  .name;
