import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IFormStruct } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-pregunta1-p2',
  templateUrl: './pregunta1-p2.page.html',
  styleUrls: ['./pregunta1-p2.page.scss'],
})
export class Pregunta1P2Page implements OnInit {

  constructor(private menuCtrl: MenuController) {
    this.struct={
      "name" : "Joolmo",
      "teacherId" : "1",
      "classesIds" : ["1","2","4"],
      "fields" : [{
        "label" : "hola",
        "requiered" : true,
        "type" : "text",
      },
    { "label" : "hola2",
    "requiered" : true,
    "type" : "radio",
    },
    { "label" : "hola3",
    "requiered" : true,
    "type" : "y/n",
    }]

    }
   }
  struct: IFormStruct;

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
