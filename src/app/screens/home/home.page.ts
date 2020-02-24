import { Component, OnInit } from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _loading: LoadingController) { }

  async presentLoading(){
    const loading = await this._loading.create({
      message: 'Waiting',
      duration: 2000
    })

    return await loading.present();
  }

  ngOnInit() {
  }

}
