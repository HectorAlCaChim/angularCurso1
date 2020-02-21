import { Pipe, PipeTransform } from '@angular/core';
import { EstudianteModel } from 'src/app/shared/models/estudiantes.model';
import { asapScheduler } from 'rxjs';

@Pipe({name: 'buscarEstudiante'})// este es el nombre de la funcion pipe
export class BuscarEstudiantePipe implements PipeTransform {// nombre de la clase
    transform(value: Array<EstudianteModel>, query: string): any {// el QUERY es lo que recive el input y el array del component.ts
        console.log(query);
        return value.filter(
            x => x.nombre.toUpperCase().includes(query.toLocaleUpperCase())
        );
    }
}
