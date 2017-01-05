import { Component } from '@angular/core';

import { SongsPage } from '../songs/songs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  songs: any = SongsPage;

  constructor() {

  }
}
