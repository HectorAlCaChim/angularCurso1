import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from 'src/shared/models/estudiantes.model';
import { EstudiantesModule } from '../../estudiantes.module';

@Component({
  selector: 'app-estudiante-buscar',
  templateUrl: './estudiante-buscar.component.html',
  styleUrls: ['./estudiante-buscar.component.scss']
})
export class EstudianteBuscarComponent implements OnInit {

  estudiantes: Array<EstudianteModel>;

  constructor() { }

  ngOnInit() {
    this.populateEstudiantes();
  }
  private populateEstudiantes() {
    this.estudiantes = new Array<EstudianteModel>();
    for (let  index = 0; index <= 9; index++) {
      this.estudiantes.push({
        Nombre: 'Nombre' + index,
        Apellido1: 'Apellido1' + index,
        Apellido2 : 'Apellido2' + index,
        Edad: index
      });
    }
  }

}
