import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SongsList } from '../components/song/list';
import { SongView } from '../components/song/song';
import { TabsPage } from '../pages/tabs/tabs';
import { DataStore } from 'js-data';
import { HttpAdapter } from 'js-data-http';

const adapter = new HttpAdapter();
const store = new DataStore();

store.registerAdapter('http', adapter, {default: true})

store.defineMapper('user', {endpoint: "/api/song"});
store.defineMapper('post', {});
store.defineMapper('comment', {});

store.findAll('user').then((posts) => {
  console.log('find all posts');
})

@NgModule({
  declarations: [
    MyApp,
    SongsList,
    SongView,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SongsList,
    SongView,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
