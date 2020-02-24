import { Component, OnInit } from '@angular/core';
import { IFormStruct } from 'src/app/interfaces/interfaces';
import FormsService from 'src/app/services/forms.service';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-form-of-forms',
  templateUrl: './form-of-forms.page.html',
  styleUrls: ['./form-of-forms.page.scss'],
})
export class FormOfFormsPage implements OnInit {
  constructor(
    private _formsService: FormsService,
    private _userService: UserService
    ) {}
  
  struct: IFormStruct = {
    name: "",
    teacherId: "",
    classesIds: [],
    fields: []
  }

  add(){
    this.struct.fields.push({
      requiered: false,
      label: "",
      type: "y/n"
    })
  }

  upload(){
    this.struct.teacherId = this._userService.getCurrentUser().id
    this._formsService.addFormStructure(this.struct)
  }

  ngOnInit() { }
}
