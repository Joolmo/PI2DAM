import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';
import UserService from 'src/app/services/user.service';
import { IClassroom } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-all-classrooms-list-screen',
  templateUrl: './all-classrooms-list-screen.page.html',
  styleUrls: ['./all-classrooms-list-screen.page.scss'],
})
export class AllClassroomsListScreenPage implements OnInit {

  classrooms: IClassroom[]=[];
  myClassrooms: boolean = false
  idTeacher: string;
  idClassroom: string;
  
  constructor(private _activatedRoute: ActivatedRoute, 
    private _class: ClassroomService,
    private _userService: UserService) { }

  ngOnInit() {
    this._class.getClassrooms().then(result =>{
      this.classrooms = result;
    })
  }

  anyadirAclase(id: string){
    this._class.addClassroomToTeacher(id, this._userService.getCurrentUser().id)
  
  }

}
