import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IFormStruct } from 'src/app/interfaces/interfaces';
import FormsService from 'src/app/services/forms.service';
import UserService from 'src/app/services/user.service';


@Component({
  selector: 'app-pregunta1-p2',
  templateUrl: './pregunta1-p2.page.html',
  styleUrls: ['./pregunta1-p2.page.scss'],
})
export class Pregunta1P2Page implements OnInit {
  struct: IFormStruct

  constructor(private menuCtrl: MenuController, private _formService: FormsService, private _userService: UserService) {}


  ngOnInit() {
    this._formService.getFormsStructsByTeacher("2").then(result => {
      this.struct = result[0].value
    })
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
