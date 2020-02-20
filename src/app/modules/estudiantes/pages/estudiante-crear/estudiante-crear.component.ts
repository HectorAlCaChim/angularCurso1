import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from 'src/shared/models/estudiantes.model';
import { FormGroup, FormControl, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { EstudianteBuscarComponent } from '../estudiante-buscar/estudiante-buscar.component';
import { EstudiantesComponent } from '../../estudiantes.component';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-estudiante-crear',
  templateUrl: './estudiante-crear.component.html',
  styleUrls: ['./estudiante-crear.component.scss']
})
export class EstudianteCrearComponent implements OnInit{
  //se hace referencia al objeto estudiante form del Html como un group
  estudianteForm: FormGroup;
  formModel: any;
  submit = false;
  //hace referencia a los models de la carpeta share 
  //los elmento que se requieren
  estudiante : EstudianteModel = {
    Nombre : '',
    Apellido1: '',
    Apellido2: '',
    Edad: 0
  }

  get f(){return this.estudianteForm.controls}

  constructor(public fb: FormBuilder) {
    /*this.estudianteForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      edad: [0, [Validators.required]]
    });*/
  }
  //cada elemento del ngOnInit es refrenciado a cada formName del formulario
  ngOnInit() {
    this.estudianteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido1: new FormControl('', [Validators.required]),
      apellido2: new FormControl('',[Validators.required]),
      edad : new FormControl(0, [Validators.required]), 
    })
  }
  onSubmit(): void {
    this.submit = true;
    if(this.estudianteForm.invalid)
    {
      return;
    }
    console.log(this.estudianteForm.value);
    this.formModel = Object.assign({}, this.estudianteForm.value);
    let model : EstudianteModel = Object.assign(this.estudianteForm.value);
    this.clearForm();
  }
  private clearForm(){
    this.estudianteForm.patchValue({
      nombre: null,
      apellido1: null,
      apellido2: null,
      edad: null
    });
    this.estudianteForm.clearValidators();
    this.submit = false
  }
}
