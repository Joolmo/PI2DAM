import { Component, OnInit } from '@angular/core';
import { IUsers, IReports } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {

  person: IUsers = {"id": 1, "user": "Pepito", "password": "holi", "isTeacher": true};

  reports: (IReports)[]=[
    {
      "id": 1, "description": "It was a figth. He punched me. So painfully", "childrenId": 1
    },
    {
      "id": 2, "description": "I HAVE NO IDEAAAAAAAA", "childrenId": 1
    },
    {
      "id": 3, "description": "ME NEITHERRRRR", "childrenId": 1
    }
  ];

  //report: IReports = {"id": 1, "description": "It was a figth. He punched me. So painfully", "childrenId": 1};
  //reportTwo: IReports = {"id": 2, "description": "I HAVE NO IDEAAAAAAAA", "childrenId": 1};
  //reportThree: IReports = {"id": 3, "description": "ME NEITHERRRRR", "childrenId": 1};
  id:number;
  user:string;
  password: string;
  isTeacher: boolean;
  typePerson: string;



  
  constructor() { }

  ngOnInit() {

    this.user;
    this.reports;


  }

  /*addingReports(re){
    for(let i in re){
      this.reports.push(re);
    }
  }*/

  changeType(): void {
    if(this.isTeacher === true){
      this.typePerson = "Teacher";
    } else {
      this.typePerson = "Student";
    }
  }


  

}
