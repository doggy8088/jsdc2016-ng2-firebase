import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyB9GXrEdFRnr6zdgy-CiVDNQBMMorcDVYc",
    authDomain: "jsdc2016-b3caf.firebaseapp.com",
    databaseURL: "https://jsdc2016-b3caf.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "942269245648"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
