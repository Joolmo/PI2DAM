import { Component, OnInit } from '@angular/core';
import UserService from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {
  
  constructor(private _userService: UserService, private _route: Router, public toastController: ToastController) { }
  userTexto : string;
  contraTexto : string;
  contrasenya  =  true;
  //textoContra : string;
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Alerta.',
      duration: 2000
    });
    toast.present();
  }
  CambiarInput(){
    this.contrasenya = !this.contrasenya;
  }
  Implementar(){
    this._userService.login(this.userTexto,this.contraTexto).then(result => {
      if(result) {
        this._route.navigateByUrl("/profile-screen")
        
      }
      else {
        this.presentToast();
      }
    })
  }
  ngOnInit() {


  }


}
