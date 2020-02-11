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
  child: IChildren = {
    id: 0,
    name: "",
    surname: ""
  }
  
  constructor(private _report: ReportsService, private _user: UserService, 
    private _activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.isTeacher = this._activatedRoute.snapshot.paramMap.get('userType') == "teacher"
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');

    this._report.reportByChild(1).then(result =>{
      this.reports = result;
    })

    if(!this.isTeacher) {
      console.log(this.id)
      this.child = await this._user.getChildrenById(this.id)
    }
  }
}
