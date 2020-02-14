import { Component, OnInit } from '@angular/core';
import { IUser, IReport, IChild, ITeacher } from 'src/app/interfaces/interfaces';
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

  reports: IReport[]=[];
  user: IUser = {
    id: "",
    userName: "",
    password: "",
    isTeacher:false
  }

  child: IChild = {
    id: "0",
    name: "",
    surname: "",
    userName: "",
    password: "",
    isTeacher: false,
  }

  teacher: ITeacher = {
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
    this.user.isTeacher = this._activatedRoute.snapshot.paramMap.get('userType') == "teacher";
    this.user.id = this._activatedRoute.snapshot.paramMap.get('id');


    if(!this.user.isTeacher) {
      this.reports = await this._report.reportByChild(this.user.id)
      this.child = await this._user.getChildById(this.user.id)
    } else {
      this.reports = await this._report.getReportsByTeacher(this.user.id)
      this.teacher = await this._user.getTeacherById(this.user.id)
    }
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
