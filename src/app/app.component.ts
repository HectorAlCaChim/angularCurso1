import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCurso1';
  numero1:number =0;
  numero2:number =0;
  resultado : number =0;
  //valores de entrada y el tipo, por consiguiente que te devuelve
  public sumaValores(numero1: number, numero2: number):number
  {
    this.resultado = this.numero1 + this.numero2;
    return this.resultado;
  }
}
