import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { EstudianteCrearComponent } from './pages/estudiante-crear/estudiante-crear.component';
import { EstudianteEditarComponent } from './pages/estudiante-editar/estudiante-editar.component';
import { EstudianteBuscarComponent } from './pages/estudiante-buscar/estudiante-buscar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstudiantesComponent, 
    EstudianteCrearComponent, 
    EstudianteEditarComponent, 
    EstudianteBuscarComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    ReactiveFormsModule // SE AGREGAN LOS REACTIVES FORM
  ]
})
export class EstudiantesModule { }
