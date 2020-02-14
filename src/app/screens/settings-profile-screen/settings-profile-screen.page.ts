import { Component, OnInit } from '@angular/core';
import { IChild, IUser } from 'src/app/interfaces/interfaces';
import ReportsService from 'src/app/services/reports.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings-profile-screen',
  templateUrl: './settings-profile-screen.page.html',
  styleUrls: ['./settings-profile-screen.page.scss'],
})
export class SettingsProfileScreenPage implements OnInit {
  password: string = "";

  constructor(private _report: ReportsService, private _user: UserService, 
    private _activatedRoute: ActivatedRoute, private _toast: ToastController) { }

  ngOnInit() {


  }

  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  save(){

    if(this.password == undefined || this.password == "") {
      this.presentToast("you have to write a password");
      return
    } 

    if(this._user.getCurrentUser().isTeacher) {
      this._user.modifyTeacher({
        id: this._user.getCurrentUser().id,
        password: this.password
      })
    } else {
      this._user.modifyChild({
        id: this._user.getCurrentUser().id,
        password: this.password
      })
    }

    this.presentToast("your password has been changed");
  }


}
