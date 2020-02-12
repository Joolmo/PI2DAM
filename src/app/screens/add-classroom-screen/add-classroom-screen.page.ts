import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';
import { IClassroom } from 'src/app/interfaces/IUser';


@Component({
  selector: 'app-add-classroom-screen',
  templateUrl: './add-classroom-screen.page.html',
  styleUrls: ['./add-classroom-screen.page.scss'],
})
export class AddClassroomScreenPage implements OnInit {

  id: string;
  name: string;


  constructor(private _activatedRoute: ActivatedRoute, private _class: ClassroomService) { }

  ngOnInit() {
  }

  introducirDatos(){
    let classT : (IClassroom);

    classT = {
      "id": "0",
      "name": this.name
    }

    this._class.addClassroom(classT);
  }

}
