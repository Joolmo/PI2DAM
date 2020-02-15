import { Component, OnInit } from '@angular/core';
import { IClassroom } from 'src/app/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-class-list-screen',
  templateUrl: './class-list-screen.page.html',
  styleUrls: ['./class-list-screen.page.scss'],
})
export class ClassListScreenPage implements OnInit {
  classrooms: IClassroom[]=[];

  constructor(private _activatedRoute: ActivatedRoute, 
    private _class: ClassroomService,
    private _userService: UserService) { }

  ngOnInit() {
    this._class.getClassrooms().then(result => {
      this.classrooms = result;
    })
  }
}
