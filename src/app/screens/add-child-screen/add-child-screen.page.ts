import { Component, OnInit } from '@angular/core';
import ClassroomService from 'src/app/services/classroom.service';
import UserProvider from 'src/app/providers/ApiRest/user.provider';
import { IChild } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-add-child-screen',
  templateUrl: './add-child-screen.page.html',
  styleUrls: ['./add-child-screen.page.scss'],
})
export class AddChildScreenPage implements OnInit {
  id: string;
  name: string;
  surname: string;
  child: IChild = {
    id: "",
    name: "",
    surname: "", 
    userName: "", 
    password: "",
    isTeacher: false
  }

  constructor(private _class: ClassroomService, private _user: UserProvider) { }

  //TO DO
  ngOnInit() {

    
  }

  save() {
    this._user.registerChildren(this.child);
  }

}
