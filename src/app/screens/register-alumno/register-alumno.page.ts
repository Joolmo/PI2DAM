import { Component, OnInit } from '@angular/core';
import ReportsService from 'src/app/services/reports.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { IChild } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-register-alumno',
  templateUrl: './register-alumno.page.html',
  styleUrls: ['./register-alumno.page.scss'],
})
export class RegisterAlumnoPage implements OnInit {
  id: string;
  name: string;
  surname: string;
  userName: string;
  password: string; 
  isTeacher: false;


  constructor(private _report: ReportsService, private _user: UserService, 
    private _activatedRoute: ActivatedRoute) { }


  ngOnInit(){
  }

  //TO DO
  introducirDatos(){
    let child: (IChild);

    child = {
      "id": 0,
      "name": this.name,
      "surname": this.surname,
      "userName": this.userName,
      "password": this.password,
      "isTeacher": false,
    }

    console.log("HOLA");

    this._user.registerChildren(child);
  }

}
