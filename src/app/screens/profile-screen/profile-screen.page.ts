import { Component, OnInit } from '@angular/core';
import { IUsers, IReports, IChildren } from 'src/app/interfaces/IUser';
import ReportsService from 'src/app/services/reports.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {

  //person: IUsers = {"id": 1, "user": "Pepito", "password": "holi", "isTeacher": true};


  id:number;
  user:string;
  password: string;
  isTeacher: boolean;
  typePerson: string;
  reports: IReports[]=[];
  children: IChildren[]=[];

  
  constructor(private _report: ReportsService, private _user: UserService, 
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._report.reportByChild(1).then(result =>{
      this.reports = result;
    })

    this._user.getChildrenById(2).then(result => {
      this.children[0] = result;
    })


  }

}
