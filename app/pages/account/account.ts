import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import {Photo} from '../../common/photo';
import {PhotoService} from '../../common/photo.service';

import {PhotoViewerPage} from '../photo-viewer/photo-viewer';

@Component({
  templateUrl: 'build/pages/account/account.html',
  providers: [PhotoService]
})
export class AccountPage {
  photos: Photo[];

  constructor(
    private navCtrl: NavController,
    private photoService: PhotoService,
    private modalController: ModalController
  ) {
    this.photos = photoService.getPhotos();
  }

  viewFullsize(id) {
    let photoModal = this.modalController.create(PhotoViewerPage, {photoId: id});
    photoModal.present();
  }

}
