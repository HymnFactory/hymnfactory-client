import { Component } from '@angular/core';

import { NavController, ModalController} from 'ionic-angular';
import { SongView } from './song';

@Component({
    selector: 'song-list',
    template: `
        <ion-header>
            <ion-toolbar color="primary">
                <ion-searchbar *ngIf="isSearching" (ionInput)="getSongs($event)"></ion-searchbar>
                <ion-title *ngIf="!isSearching" >Hymn Factory</ion-title>
                <ion-buttons end>
                    <button ion-button *ngIf="!isSearching" (click)="toggleSearch(e)">
                        <ion-icon name="ios-search"></ion-icon>
                    </button>
                    <button ion-button *ngIf="isSearching" (click)="isSearching = !isSearching">
                        Cancel
                    </button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>  
        <ion-content>        
            <ion-list>
                <ion-list-header>Favorites</ion-list-header>
                <ion-item-group>
                    <ion-item-divider color="light">A</ion-item-divider>
                    <ion-item (click)="viewSong({id: 1})">Amazing Grace</ion-item>
                </ion-item-group>
            </ion-list>
        </ion-content>
  `
})
export class SongsList {
    searchString: string = '';
    isSearching: boolean = false;
    items: any[];

    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController) { }

    toggleSearch() {
        this.isSearching = !this.isSearching;       
    }
    viewSong(id) {
        this.modalCtrl.create(SongView, id).present();
    }

    getSongs(ev: any) {
        let val = ev.target.value;
        console.log(val);

    }

}
