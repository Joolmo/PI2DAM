import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import UserService from 'src/app/services/user.service';
import { IChild } from 'src/app/interfaces/IUser';
import { ActivatedRoute } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service'

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.page.html',
  styleUrls: ['./list-alumnos.page.scss'],
})
export class ListAlumnosPage implements OnInit {
  alumnos : IChild[] = [];
  id: string;
  
  constructor(private menuCtrl: MenuController, private _clase: ClassroomService,
    private _User : UserService, private _activatedRoute: ActivatedRoute,) { }
  //nombre y apellidos 

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    //this.id = this._clase.getClassrooms
    let result = this._User.getChildrenByClass(this.id);
    /*this.name = this._activatedRoute.snapshot.paramMap.get('name');
    this.surname  = this._activatedRoute.snapshot.paramMap.get('surname');*/
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
  


}
