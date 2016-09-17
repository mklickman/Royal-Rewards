import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Photo } from '../../common/photo';
import { PhotoService } from '../../common/photo.service';

@Component({
  templateUrl: 'build/pages/photo-viewer/photo-viewer.html',
  providers: [PhotoService]
})
export class PhotoViewerPage {
  photo: any;

  constructor(
    private navCtrl: NavController,
    private photoService: PhotoService,
    private params: NavParams,
    private viewCtrl: ViewController
  ) {
    this.photo = photoService.getPhoto(params.data.photoId);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
