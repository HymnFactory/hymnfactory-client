import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, ToastController } from 'ionic-angular';
import { store, ISong } from '../../data/store';

@Component({
    selector: 'song-view',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>New Hymn</ion-title>
                <ion-buttons start>
                    <button ion-button (click)="dismiss()">
                        <span color="primary">Cancel</span>
                    </button>
                </ion-buttons> 
                <ion-buttons end>
                    <button ion-button (click)="save()">
                        <span color="primary">Save</span>
                    </button>
                </ion-buttons>  
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item>
                <ion-label floating>Song Name</ion-label>
                <ion-input type="text" [(ngModel)]="song.name"></ion-input>
            </ion-item>
            <ion-textarea [(ngModel)]="song.body"></ion-textarea>
        </ion-content>
    `
})
export class SongEdit {
    song: ISong = <ISong>store.createRecord('song');

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController
    ) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    save() {
        let promise;

        promise = store.create('song', this.song);

        promise.then((song) => {
            this.viewCtrl.dismiss(song)
        })
    }
}