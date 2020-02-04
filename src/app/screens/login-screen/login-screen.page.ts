import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  nombre: string;
  password: string; 
  email: string;
  esProfesor: boolean; 

  constructor() { }

  obtenerDatos(){
    
  }

  ngOnInit() {




  }

}
