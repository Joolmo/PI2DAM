import { Component, OnInit } from '@angular/core';
import { IFirebaseResponse, IFormStruct } from 'src/app/interfaces/interfaces';
import FormsService from 'src/app/services/forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-form-str-list',
  templateUrl: './form-str-list.page.html',
  styleUrls: ['./form-str-list.page.scss'],
})
export class FormStrListPage implements OnInit {
  structs: IFirebaseResponse<IFormStruct>[] = []
  idTeacher: string 

  constructor(
    private _formsService: FormsService,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _route: Router,
  ) { }

  ngOnInit() {
    let user = this._userService.getCurrentUser()
    this.idTeacher = user.isTeacher ? user.id : this._activatedRoute.snapshot.paramMap.get('idTeacher')
    this._formsService.getFormsStructsByTeacher(this.idTeacher).then(result => this.structs = result)
  }

  navigate(idForm: string) {
    if(this._userService.getCurrentUser().isTeacher)
      this._route.navigateByUrl(
        `/form-res-list/${idForm}`
      )
    else
      this._route.navigateByUrl(
        `/pregunta1-p2/${idForm}`
      )
  }

}