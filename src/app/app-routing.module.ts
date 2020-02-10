import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'register-alumno', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login-screen',
    loadChildren: () => import('./screens/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'profile-screen',
    loadChildren: () => import('./screens/profile-screen/profile-screen.module').then( m => m.ProfileScreenPageModule)
  },
  {
    path: 'reports-screen/:id',
    loadChildren: () => import('./screens/reports-screen/reports-screen.module').then( m => m.ReportsScreenPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
