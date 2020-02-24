/*import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import FormsService from 'src/app/services/forms.service';
import FormsProvider from './forms.provider';
import FirebaseSrc from './firebase.dataSource';


var firebaseConfig = {
    apiKey: "AIzaSyAVzekihDdVdb4w8qPRhGQIvjb5WjBM3Bc",
    authDomain: "bullyapp-8c9fe.firebaseapp.com",
    databaseURL: "https://bullyapp-8c9fe.firebaseio.com",
    projectId: "bullyapp-8c9fe",
    storageBucket: "bullyapp-8c9fe.appspot.com",
    messagingSenderId: "337584106489",
    appId: "1:337584106489:web:9946d8dfcc5b5c2b7ceb28",
    measurementId: "G-7ZHXWGSMES"
};

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [
        FirebaseSrc,
        {provide: FormsService, useClass: FormsProvider}
    ]
})
export default class FirebaseServicesModule {}*/