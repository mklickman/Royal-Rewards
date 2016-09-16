import { Component } from '@angular/core';
import { SubmitPhotoPage } from '../submit-photo/submit-photo';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public submitPhotoRoot: any;
  public accountRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.submitPhotoRoot = SubmitPhotoPage;
    this.accountRoot = AccountPage;
  }
}
