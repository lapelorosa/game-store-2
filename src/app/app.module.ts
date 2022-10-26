import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//IMPORT PARA CONFIGURACION FIREBASE
import { firebaseConfig } from '../environments/firebaseConfig';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
    //FIREBA IMPORTS --
     AngularFireModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
