import { Component, OnInit } from '@angular/core';
import { IClassroom } from 'src/app/interfaces/IUser';
import { ActivatedRoute } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';

@Component({
  selector: 'app-class-list-screen',
  templateUrl: './class-list-screen.page.html',
  styleUrls: ['./class-list-screen.page.scss'],
})
export class ClassListScreenPage implements OnInit {
  classroom: IClassroom[]=[];
  idTeacher: string
  id: string;
  name: string;

  constructor(private _activatedRoute: ActivatedRoute, private _class: ClassroomService) { }

  ngOnInit() {

    this.idTeacher = this._activatedRoute.snapshot.paramMap.get('id');

    if(this.idTeacher) {
      console.log("HOLA2");
      this._class.getClassroomsByTeacher(this.idTeacher).then(result=>{
        this.classroom = result;
      })
    } else {
      this._class.getClassrooms().then(result =>{
        this.classroom = result;
      })
    }
  }

}
