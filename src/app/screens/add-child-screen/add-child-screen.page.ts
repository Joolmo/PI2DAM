import { Component, OnInit } from '@angular/core';
import ClassroomService from 'src/app/services/classroom.service';
import UserProvider from 'src/app/providers/ApiRest/user.provider';
import { IChild } from 'src/app/interfaces/interfaces';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import ApiRestSrc from 'src/app/providers/ApiRest/apiRest.dataSource';

@Component({
  selector: 'app-add-child-screen',
  templateUrl: './add-child-screen.page.html',
  styleUrls: ['./add-child-screen.page.scss'],
})
export class AddChildScreenPage implements OnInit {

  id: string
  child: IChild = {
    id: "",
    name: "",
    surname: "", 
    userName: "", 
    password: "",
    isTeacher: false,
  }

  constructor(private _class: ClassroomService, private _user: UserService, private _activatedRoute: ActivatedRoute, private temporal: ApiRestSrc) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('idClass')
  }

  async save() {
    await this._user.registerChildren(this.child);

    // temporal el post de register children deberia de devolver un objeto child con la nueva clave introducida en el server
    let x = await this.temporal.makeRequest({
      path: "child",
      method: "GET"
    })
    let id = x.data.filter(ele => ele.UserName == this.child.userName)[0].Id
    // fin temporal, urgente de arreglar

    if(this.id) this._class.addChildrenToClassroom(id, this.id)
  }
}
