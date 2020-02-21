import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from 'src/app/shared/models/estudiantes.model';
import { EstudiantesModule } from '../../estudiantes.module';
import { first } from 'rxjs/operators';
import {EstudiantesService} from 'src/app/Core/Services/Estudiantes.service';

@Component({
  selector: 'app-estudiante-buscar',
  templateUrl: './estudiante-buscar.component.html',
  styleUrls: ['./estudiante-buscar.component.scss']
})
export class EstudianteBuscarComponent implements OnInit {

  estudiantes: Array<EstudianteModel>;
  
  buscar = '';

  constructor(
    private estudianteService: EstudiantesService
  ) { }

  ngOnInit() {
    this.populateEstudiantes();
  }
  private populateEstudiantes()
  {
    console.log("entro al metodo")
    this.estudianteService.getAll()
    .subscribe(info => {
      console.log(info);
      this.estudiantes = info;
      console.log(this.estudiantes)
    });
  }
  /*private populateEstudiantes() {
    this.estudiantes = new Array<EstudianteModel>();
    for (let  index = 0; index <= 9; index++) {
      this.estudiantes.push({
        Nombre: 'Nombre' + index,
        Apellido1: 'Apellido' + index,
        Apellido2 : 'Apellido' + index,
        Edad: index,
        Genero: 'masculino'
      });
    }
  }*/

}
