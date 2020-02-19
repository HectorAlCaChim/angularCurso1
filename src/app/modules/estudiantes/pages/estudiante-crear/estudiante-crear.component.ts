import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from 'src/shared/models/estudiantes.model';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { EstudianteBuscarComponent } from '../estudiante-buscar/estudiante-buscar.component';
import { EstudiantesComponent } from '../../estudiantes.component';

@Component({
  selector: 'app-estudiante-crear',
  templateUrl: './estudiante-crear.component.html',
  styleUrls: ['./estudiante-crear.component.scss']
})
export class EstudianteCrearComponent implements OnInit{
  //se hace referencia al objeto estudiante form del Html como un group
  estudianteForm: FormGroup;
  //hace referencia a los models de la carpeta share 
  //los elmento que se requieren
  estudiante : EstudianteModel = {
    Nombre : '',
    Apellido1: '',
    Apellido2: ' ',
    Edad: 0
  }

  constructor() {}
  //cada elemento del ngOnInit es refrenciado a cada formName del formulario
  ngOnInit() {
    this.estudianteForm = new FormGroup({
      nombre: new FormControl(''),
      apellido1: new FormControl(''),
      apellido2: new FormControl(''),
      edad : new FormControl(0)
    })
  }
  onSubmit(): void {
    console.log(this.estudianteForm.value);
  }
}
