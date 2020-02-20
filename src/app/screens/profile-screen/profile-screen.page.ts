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

  ngOnInit() {
    this.user.isTeacher = this._activatedRoute.snapshot.paramMap.get('userType') == "teacher";
    this.user.id = this._activatedRoute.snapshot.paramMap.get('id');


    if(!this.user.isTeacher) {
      this._report.reportByChild(this.user.id).then(result => this.reports = result)
      this._user.getChildById(this.user.id).then(result => this.child = result)
    } else {
      this._report.getReportsByTeacher(this.user.id).then(result => this.reports = result)
      this._user.getTeacherById(this.user.id).then(result => this.teacher = result)
    }
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }


  currentUserIsTeacher = () => this._user.getCurrentUser().isTeacher && !this.user.isTeacher;

  deleteChild(){
    this._user.deleteChild(this.child.id);
  }
}
