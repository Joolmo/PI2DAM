import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAlumnoPage } from './register-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAlumnoPageRoutingModule {}
