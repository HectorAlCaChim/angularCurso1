import { Component } from '@angular/core';
import { EstudianteModel } from 'src/app/shared/models/estudiantes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  estudiantes : EstudianteModel = {
    idEstudiantes: 0,
    edad:34,
    nombre :'hk',
    apellido1 :'hb',
    apellido2 : 'kbk',
    genero: 'ghj'
  };

 /* title = 'angularCurso1';
  numero1:number =0;//se declara el valor y el tipo
  numero2:number =0;//se declara el valor y el tipo
  numero3:number =0;//se declara el valor y el tipo
  numero4:number =0;//se declara el valor y el tipo
  resultado : number =0;
  resultado2 : number =0;
  //valores de entrada y el tipo, por consiguiente que te devuelve
  public sumaValores(numero1: number, numero2: number):number
  {
    this.resultado = this.numero1 + this.numero2;
    return this.resultado;
  }
  public sumaVaAut(numero3: number, numero4: number):number
  {
    this.resultado2 = this.numero3 + this.numero4;
    return this.resultado2;
  }*/
}
