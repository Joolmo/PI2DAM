import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-screen', pathMatch: 'full' },
  {
    path: 'login-screen',
    loadChildren: () => import('./screens/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'profile-screen',
    loadChildren: () => import('./screens/profile-screen/profile-screen.module').then( m => m.ProfileScreenPageModule)
  },
  {
    path: 'reports-screen',
    loadChildren: () => import('./screens/reports-screen/reports-screen.module').then( m => m.ReportsScreenPageModule)
  },
  {
    path: 'pregunta1-p2',
    loadChildren: () => import('./screens/pregunta1-p2/pregunta1-p2.module').then( m => m.Pregunta1P2PageModule)
  },
  {
    path: 'settings-profile-screen/:id',
    loadChildren: () => import('./screens/settings-profile-screen/settings-profile-screen.module').then( m => m.SettingsProfileScreenPageModule)
  },
  {
    path: 'register-alumno',
    loadChildren: () => import('./screens/register-alumno/register-alumno.module').then( m => m.RegisterAlumnoPageModule)
  },
  {
    path: 'report-form',
    loadChildren: () => import('./screens/report-form/report-form.module').then( m => m.ReportFormPageModule)
  },
  {
    path: 'profile-screen/:userType/:id',
    loadChildren: () => import('./screens/profile-screen/profile-screen.module').then( m => m.ProfileScreenPageModule)
  },
  {
    path: 'class-list-screen/:myClassrooms',
    loadChildren: () => import('./screens/class-list-screen/class-list-screen.module').then( m => m.ClassListScreenPageModule)
  }, 
  {
    path: 'add-classroom-screen',
    loadChildren: () => import('./screens/add-classroom-screen/add-classroom-screen.module').then( m => m.AddClassroomScreenPageModule)
  },  
  {
    path: 'list-alumnos/:id',
    loadChildren: () => import('./screens/list-alumnos/list-alumnos.module').then( m => m.ListAlumnosPageModule)
  },
   {
    path: 'all-classrooms-list-screen',
    loadChildren: () => import('./screens/all-classrooms-list-screen/all-classrooms-list-screen.module').then( m => m.AllClassroomsListScreenPageModule)
  },  
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-child-screen',
    loadChildren: () => import('./screens/add-child-screen/add-child-screen.module').then( m => m.AddChildScreenPageModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
