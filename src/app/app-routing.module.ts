import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// siver para el ruteo de paginas de la carpeta modules
// COMANDO: ng g module account --route account --module app.module
// RUTAS DE DIRECCIONAMIENTOS PARA CARGAR NUEVOS COMPONENTES
const routes: Routes = [
  { path: 'estudiantes', loadChildren: () => import('./modules/estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
  { path: 'home', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
