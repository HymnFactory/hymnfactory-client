import { Component } from '@angular/core';

import { SongsList } from '../../components/song/list';

@Component({
  template: `
    <ion-tabs>
        <ion-tab [root]="songsList" tabTitle="Songs" tabIcon="musical-notes"></ion-tab>
        <ion-tab [root]="songsList" tabTitle="Settings" tabIcon="musical-notes"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  songsList: any = SongsList;

  constructor() {

  }
}
