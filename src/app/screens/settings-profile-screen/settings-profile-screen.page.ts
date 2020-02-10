import { Component, OnInit } from '@angular/core';
import { IChildren } from 'src/app/interfaces/IUser';
import ReportsService from 'src/app/services/reports.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings-profile-screen',
  templateUrl: './settings-profile-screen.page.html',
  styleUrls: ['./settings-profile-screen.page.scss'],
})
export class SettingsProfileScreenPage implements OnInit {

  
  id:number;
  user:string;
  password: string;
  isTeacher: boolean;
  typePerson: string;
  children: IChildren[]=[];

  constructor(private _report: ReportsService, private _user: UserService, 
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = +this._activatedRoute.snapshot.paramMap.get('id');

    this._user.getChildrenById(this.id).then(result => {
      this.children[0] = result;
      console.log(result);
    })

  }


}
