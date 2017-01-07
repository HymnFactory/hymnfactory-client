import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { SongView } from './view';
import { SongEdit } from './edit';
import { store, ISong } from '../../data/store';

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
            <ion-fab bottom right>
                <button ion-fab mini color="secondary" (click)="addSong()">
                    <ion-icon name="add"></ion-icon>
                </button>
            </ion-fab>      
            <ion-list>
                <ion-list-header>Favorites</ion-list-header>
                <ion-item (click)="viewSong(song)" *ngFor="let song of songs">{{song.name}}</ion-item>
            </ion-list>
        </ion-content>
  `
})
export class SongsList {
    searchString: string = '';
    isSearching: boolean = false;
    songs: ISong[] = [];

    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController) {
        this.getSongs();
    }

    toggleSearch() {
        this.isSearching = !this.isSearching;
    }

    viewSong(id) {
        this.modalCtrl.create(SongView, id).present();
    }

    addSong() {
        let songModal = this.modalCtrl.create(SongEdit);

        songModal.present();

        songModal.onDidDismiss(song => {
            this.getSongs();
            console.log(song);
        })
    }

    getSongs() {
        // let val = ev.target.value;
        store.findAll('song').then((songs) => {
            this.songs = songs;
        })

    }
}
