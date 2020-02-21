import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstudianteModel } from 'src/app/shared/models/estudiantes.model';

@Component({
  selector: 'app-estudiante-insertar-tabla',
  templateUrl: './estudiante-insertar-tabla.component.html',
  styleUrls: ['./estudiante-insertar-tabla.component.scss']
})
export class EstudianteInsertarTablaComponent implements OnInit {

  estudiantes: Array<EstudianteModel> = new Array<EstudianteModel>();
  estudianteForm: FormGroup;
  formModel: any;
  submit = false;

  estudiante: EstudianteModel = {
    idEstudiantes: 0,
    nombre : '',
    apellido1: '',
    apellido2: '',
    edad: 0,
    genero: ''
  }

  get f() {return this.estudianteForm.controls}

  constructor() { }

  ngOnInit() {
    this.estudianteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido1: new FormControl('', [Validators.required]),
      apellido2: new FormControl('', [Validators.required]),
      edad : new FormControl(0, [Validators.required]),
      genero : new FormControl('')
    });
  }
  private agregarTabla(g: FormGroup) {
    this.estudiante.nombre = g.get('nombre').value;
    this.estudiante.apellido1 = g.get('apellido1').value;
    this.estudiante.apellido2 = g.get('apellido2').value;
    this.estudiante.edad = g.get('edad').value;
    this.estudiante.genero = g.get('edad').value;
    this.estudiantes.push(this.estudiante);
    this.estudiante = new EstudianteModel();
    this.clearForm();
  }
  private clearForm() {
    this.estudianteForm.patchValue({
      nombre: null,
      apellido1: null,
      apellido2: null,
      edad: null
    });
    this.estudianteForm.clearValidators();
    this.submit = false;
  }
  public eliminar(id: number) {
    this.estudiantes.splice(id, id);
    if ( id === 0) {
      this.estudiantes.shift();
    }
  }
}
