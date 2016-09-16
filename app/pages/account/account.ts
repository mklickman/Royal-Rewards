import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Photo} from '../../common/photo';
import {PhotoService} from '../../common/photo.service';

@Component({
  templateUrl: 'build/pages/account/account.html',
  providers: [PhotoService]
})
export class AccountPage {
  photos: Photo[];

  constructor(
    private navCtrl: NavController,
    private photoService: PhotoService
  ) {
    this.photos = photoService.getPhotos();
  }

}
