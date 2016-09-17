import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';

import {Photo} from '../../common/photo';
import {PhotoService} from '../../common/photo.service';

@Component({
  templateUrl: 'build/pages/submit-photo/submit-photo.html',
  providers: [PhotoService]
})
export class SubmitPhotoPage {

  constructor(
    private navCtrl: NavController,
    private photoService: PhotoService
  ) {

  }

  takePhoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
    }).then((imageData) => {
      this.photoService.addPhoto(imageData);
      alert('Image added successfully!');
    }, (err) => {
      alert('Error adding image. Good luck figuring out why!');
    });
  }

  useExistingPhoto() {
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.photoService.addPhoto(imageData);
      alert('Image added successfully!');
    }, (err) => {
      alert('Error adding image. Good luck figuring out why!');
    });
  }

}
