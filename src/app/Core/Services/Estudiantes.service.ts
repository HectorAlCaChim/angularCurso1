import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EstudiantesResponse } from 'src/app/shared/models/estudiantesResponse.models';
import { EstudianteModel } from 'src/app/shared/models/estudiantes.model';

@Injectable({
    providedIn: 'root'
})
export class EstudiantesService {
    urlAprI = 'http://localhost:5001/api/Estudiantes/Agregar';
    urlApi = 'http://localhost:5001/api/Estudiantes/VerTodos';

     constructor(private http: HttpClient) {
     }

     public getAll(): Observable<any>{
         return this.http.get<EstudiantesResponse>(this.urlApi);
     }
      public insert(estudiante: EstudianteModel): Observable<EstudianteModel>
      {
          return this.http.post<EstudianteModel>(this.urlAprI, estudiante);

      }

}