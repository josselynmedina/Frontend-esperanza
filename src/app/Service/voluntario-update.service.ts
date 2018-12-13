import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioUpdateService {

  constructor(private Pro_http:HttpClient) { }

  updateInfo(p_voluntario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/voluntarios/update', p_voluntario, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  UpdateContacto(p_contacto){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/contacto/update', p_contacto, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  UpdateHabilidades(p_habilidad){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/habilidades/update', p_habilidad, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  UpdateDisponibilidad(p_disponibilidad){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/disponibilidad/update', p_disponibilidad, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  updateTallerVoluntario(p_voluntario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/voluntario/updateTallerVoluntario', p_voluntario, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }


}
