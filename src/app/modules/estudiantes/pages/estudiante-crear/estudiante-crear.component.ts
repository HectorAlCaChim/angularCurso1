import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from 'src/shared/models/estudiantes.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estudiante-crear',
  templateUrl: './estudiante-crear.component.html',
  styleUrls: ['./estudiante-crear.component.scss']
})
export class EstudianteCrearComponent implements OnInit {

  estudiantes : EstudianteModel;
  form : FormGroup;

  constructor() { }

  ngOnInit() {
  }
}
