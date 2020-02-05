import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {

  person: IUsers = {"id": 1, "user": "Pepito", "password": "holi", "isTeacher": true};
  id:number;
  user:string;
  password: string;
  isTeacher: boolean;
  typePerson: string;


  
  constructor() { }

  ngOnInit() {

    this.user;
  }

  changeType(): void {
    if(this.isTeacher === true){
      this.typePerson = "Teacher";
    } else {
      this.typePerson = "Student";
    }
  }


  

}
