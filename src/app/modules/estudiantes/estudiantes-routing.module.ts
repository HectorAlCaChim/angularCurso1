import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantesComponent } from './estudiantes.component';
import { AppComponent } from 'src/app/app.component';
import { EstudianteCrearComponent } from './pages/estudiante-crear/estudiante-crear.component';
import { EstudianteEditarComponent } from './pages/estudiante-editar/estudiante-editar.component';
import { EstudianteBuscarComponent } from './pages/estudiante-buscar/estudiante-buscar.component';
import { EstudianteInsertarTablaComponent } from './pages/estudiante-insertar-tabla/estudiante-insertar-tabla.component';

 // prioridades
const routes: Routes = [
  { path: '', component: EstudiantesComponent, // COMPONENTE PADRE
    children: [ // AQUI SE PONEN LOS COMPONENTES HIJOS "RUTAS"
      {
        path: 'crear',
        component: EstudianteCrearComponent, // se va al componente
      },
      {
        path: 'editar',
        component: EstudianteEditarComponent,
      },
      {
        path: 'buscar',
        component: EstudianteBuscarComponent
      },
      {
        path: 'insertarTabla',
        component: EstudianteInsertarTablaComponent
      }
    ]
  }
  // {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
