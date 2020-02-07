import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  constructor() { }
  contrasenya  =  true;
  textoContra : string;
  CambiarInput(){
    this.contrasenya = !this.contrasenya;
  }
  ngOnInit() {


  }

}
