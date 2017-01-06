import { Component } from '@angular/core';
import { Platform, NavParams, ViewController, ToastController } from 'ionic-angular';

@Component({
    selector: 'song-view',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>Song name here</ion-title>
                <ion-buttons end>
                    <button ion-button (click)="dismiss()">
                        <span color="primary">Close</span>
                    </button>
                </ion-buttons>  
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-fab bottom right>
                <button ion-fab mini color="primary"><ion-icon name="ios-cog"></ion-icon></button>
                <ion-fab-list side="top">
                    <button ion-fab (click)="shareIt()"><ion-icon name="ios-share"></ion-icon></button>
                    <button ion-fab (click)="bookmarkIt()"><ion-icon name="ios-heart"></ion-icon></button>
                </ion-fab-list>
            </ion-fab>
            <pre>Song content here </pre>
        </ion-content>
    `
})
export class SongView {
    id: number;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController
    ) { }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    bookmarkIt() {
        let toast = this.toastCtrl.create({
            message: "Song bookmarked",
            duration: 3000
        });

        toast.present();
    }

    shareIt() {
        let toast = this.toastCtrl.create({
            message: "Song shared",
            duration: 3000
        });

        toast.present();
    }
}