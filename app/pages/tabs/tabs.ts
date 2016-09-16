import { Component } from '@angular/core';
import { SubmitPhotoPage } from '../submit-photo/submit-photo';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public submitPhotoRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.submitPhotoRoot = SubmitPhotoPage;
  }
}
