import {
  thumbnailViewComponent,
  thumbnailViewController
} from './thumbnailView/thumbnailView.component';
import {
  thumbnailItemComponent,
  thumbnailItemController
} from './thumbnailItem/thumbnailItem.component';

export default angular.module('ngThumbnailsModule', [])
  .component('thumbnailItemComponent', thumbnailItemComponent)
  .component('thumbnailViewComponent', thumbnailViewComponent)
  .name;
