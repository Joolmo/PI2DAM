import { Component, OnInit } from '@angular/core';
import ClassroomService from 'src/app/services/classroom.service';

@Component({
  selector: 'app-add-child-screen',
  templateUrl: './add-child-screen.page.html',
  styleUrls: ['./add-child-screen.page.scss'],
})
export class AddChildScreenPage implements OnInit {
  id: string;
  name: string;
  surname: string;

  constructor(private _class: ClassroomService, ) { }

  //TO DO
  ngOnInit() {
  }

}
