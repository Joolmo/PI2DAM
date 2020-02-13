import { Component, OnInit } from '@angular/core';
import { IUser, IReport, IChild } from 'src/app/interfaces/IUser';
import ReportsService from 'src/app/services/reports.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {

  //person: IUsers = {"id": 1, "user": "Pepito", "password": "holi", "isTeacher": true};


  id:string;
  user:string;
  password: string;
  isTeacher: boolean;
  typePerson: string;
  reports: IReport[]=[];
  child: IChild = {
    id: "0",
    name: "",
    surname: "",
    userName: "",
    password: "",
    isTeacher: false,
  }
  
  constructor(private _report: ReportsService, private _user: UserService, 
    private _activatedRoute: ActivatedRoute, private menuCtrl: MenuController) { }

  async ngOnInit() {
    this.isTeacher = this._activatedRoute.snapshot.paramMap.get('userType') == "teacher";
    this.id = this._activatedRoute.snapshot.paramMap.get('id');

    this.reports = await this._report.reportByChild(this.id)

    if(!this.isTeacher) {
      console.log(this.id)
      this.child = await this._user.getChildById(this.id)
    }
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
