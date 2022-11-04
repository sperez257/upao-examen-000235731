import { Espacio } from './../models/espacio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getEspacio() {
    return this.http.get<Espacio[]>(this.basePath);
  }

  addEspacio(espacio: Espacio){
    return this.http.post<Espacio>(this.basePath, espacio);
  }

  updateEspacio(id:any,espacio: Espacio){
    return this.http.put<Espacio>(`${this.basePath}/${id}`, espacio);
  }

  deleteEspacio(id:any){
    return this.http.delete<Espacio>(`${this.basePath}/${id}`)
  }
}
