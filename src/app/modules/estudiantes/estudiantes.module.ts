import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { EstudianteCrearComponent } from './pages/estudiante-crear/estudiante-crear.component';
import { EstudianteEditarComponent } from './pages/estudiante-editar/estudiante-editar.component';
import { EstudianteBuscarComponent } from './pages/estudiante-buscar/estudiante-buscar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EstudianteInsertarTablaComponent } from './pages/estudiante-insertar-tabla/estudiante-insertar-tabla.component';
import { BuscarEstudiantePipe } from './pages/estudiante-buscar/Buscar.pipes';


@NgModule({
  declarations: [
    EstudiantesComponent,
    EstudianteCrearComponent,
    EstudianteEditarComponent,
    EstudianteBuscarComponent,
    EstudianteInsertarTablaComponent,
    BuscarEstudiantePipe],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    ReactiveFormsModule, // SE AGREGAN LOS REACTIVES FORM
    FormsModule
  ]
})
export class EstudiantesModule { }
