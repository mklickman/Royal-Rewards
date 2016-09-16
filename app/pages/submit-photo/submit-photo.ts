import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/submit-photo/submit-photo.html',
})
export class SubmitPhotoPage {

  constructor(private navCtrl: NavController) {

  }

  takePhoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
    }).then((imageData) => {
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
      alert('Image added successfully!');
    }, (err) => {
      alert('Error adding image. Good luck figuring out why!');
    });
  }

}
