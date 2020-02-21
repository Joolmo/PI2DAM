import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import UserService from 'src/app/services/user.service';
import { IChild } from 'src/app/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _User : UserService, 
    private _activatedRoute: ActivatedRoute,
    private _Classroom: ClassroomService,
    private _route: Router) { }
  //nombre y apellidos 

  async ngOnInit() {
    /*this.id = this._activatedRoute.snapshot.paramMap.get('id');

    this._User.getChildrenByClass(this.id).then(result=>{
      this.alumnos = result;
    });*/
  }

  async ionViewWillEnter(){
    this.id = this._activatedRoute.snapshot.paramMap.get('id');

    this._User.getChildrenByClass(this.id).then(result=>{
      this.alumnos = result;
    });
  }

  go(id: string){
    this._route.navigateByUrl(
      `/profile-screen/children/${id}`
    )
  }

  //TO DO
  /*deleteChildFromClassroom(){
    this._Classroom.deleteChildFromClassroom(this.id, this._Classroom.get)
  }*/

  toggleMenu(){
    this.menuCtrl.toggle();
  }
  


}
