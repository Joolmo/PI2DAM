import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import FormsService from 'src/app/services/forms.service';
import FormsProvider from './forms.provider';
import FirebaseSrc from './firebase.dataSource';


export const firebaseConfig = {
    apiKey: "AIzaSyAvYzM1bqFjoVi-VGMHeDbN0XwFsYDtLQ0",
    authDomain: "demo104-60efc.firebaseapp.com",
    databaseURL: "https://demo104-60efc.firebaseio.com",
    projectId: "demo104-60efc",
    storageBucket: "demo104-60efc.appspot.com",
    messagingSenderId: "903778168776"
  };

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig,'demo104'),
        AngularFireDatabaseModule
    ],
    providers: [
        FirebaseSrc,
        {provide: FormsService, useClass: FormsProvider}
    ]
})
export default class FirebaseServicesModule {}