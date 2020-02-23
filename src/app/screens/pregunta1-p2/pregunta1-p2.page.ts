import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IFormStruct, IFormResponse } from 'src/app/interfaces/interfaces';
import FormsService from 'src/app/services/forms.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pregunta1-p2',
  templateUrl: './pregunta1-p2.page.html',
  styleUrls: ['./pregunta1-p2.page.scss'],
})
export class Pregunta1P2Page implements OnInit {
  idFormStruct = ""
  idFormResponse = ""
  struct: IFormStruct = {
    name: "",
    teacherId: "",
    classesIds: [],
    fields: []
  }
  response: IFormResponse = {
    idFormStruct: "",
    idChild: "",
    fields: []
  }

  constructor(private menuCtrl: MenuController,
    private _formService: FormsService, 
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.idFormStruct = this._activatedRoute.snapshot.paramMap.get('idForm')
    this.idFormResponse = undefined

    this._formService.getFormStructById(this.idFormStruct)
    .then(result => this.struct = result)
    .then(() => {
      if(this.idFormResponse == undefined) {
        this.response.idChild = this._userService.getCurrentUser().id,
        this.response.idFormStruct = this.idFormStruct
        this.response.fields = this.struct.fields.map(field => ({
          type: field.type,
          response: ""
        }))
      } else {
        // ...
      }
    })
  }

  submit(){
    this._formService.addFormRespose(this.response)
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
