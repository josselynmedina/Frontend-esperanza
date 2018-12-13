import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TalleresService {

  constructor(private Pro_http:HttpClient) { }

  InsertTaller(p_taller){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/talleres/new', p_taller, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getTalleres(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.get('api/talleres', { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getTalleresFinalizados(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.get('api/getTalleresFinalizados', { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getVoluntariosActivos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.get('api/getVoluntariosActivos', { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getVoluntariosEnTaller(p_id_taller){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.get(`api/getVoluntariosTaller/${p_id_taller}`, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getTalleresAsignar(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.get('api/talleresAsignar', { headers }).pipe(map((result: any) => {
      console.log(result)
      return result;
    }));
  }

  updateTallerFinalizado(p_estado){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/taller/updateFinalizado', p_estado, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  crearVoluntarioTaller(p_voluntario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/voluntarios/newTaller', p_voluntario, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
