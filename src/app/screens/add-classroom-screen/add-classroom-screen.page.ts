import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';
import { IClassroom } from 'src/app/interfaces/interfaces';
import UserService from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-classroom-screen',
  templateUrl: './add-classroom-screen.page.html',
  styleUrls: ['./add-classroom-screen.page.scss'],
})
export class AddClassroomScreenPage implements OnInit {

  id: string;
  name: string;


  constructor(private _activatedRoute: ActivatedRoute, private toastController: ToastController, 
    private _class: ClassroomService, private _user: UserService) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your classroom has been added.',
      duration: 2000
    });
    toast.present();
  }
  

  ngOnInit() {
  }

  introducirDatos(){
    let classT : (IClassroom);

    classT = {
      "id": "0",
      "name": this.name
    }

    // Temporal, el servidor deberia devolver al menos el nuevo id desde el post en add classroom, eliminando así getClassrooms
    this._class.addClassroom(classT).then(() => {
      return this._class.getClassrooms()
    })
    .then(result => {
      console.log(result)
      let idClass = result.filter(c => c.name.toUpperCase() == classT.name.toUpperCase())[0].id
      let idTeacher = this._user.getCurrentUser().id
      
      return this._class.addClassroomToTeacher(idClass, idTeacher) 
    })
    .then(() => {
      // Toast
      this.presentToast();
    })
  }

}
