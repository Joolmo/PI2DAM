import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-alumno',
  templateUrl: './register-alumno.page.html',
  styleUrls: ['./register-alumno.page.scss'],
})
export class RegisterAlumnoPage implements OnInit {

  constructor(_) { }

  nombre: string;
  apellidos: string;
  introducirDatos(){

  }
  ngOnInit(){
  }

}
