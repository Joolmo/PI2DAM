import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-screen', pathMatch: 'full' },
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
    path: 'reports-screen',
    loadChildren: () => import('./screens/reports-screen/reports-screen.module').then( m => m.ReportsScreenPageModule)
  },
  {
    path: 'pregunta1-p2',
    loadChildren: () => import('./screens/pregunta1-p2/pregunta1-p2.module').then( m => m.Pregunta1P2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
