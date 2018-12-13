import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private Pro_http:HttpClient) { }

  getVoluntariosEventos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/eventos/new', { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getVoluntariosHabilidades(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/eventos/new', { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  //ft_proc_get_voluntario_habilidad_dashboard
  //ft_proc_get_voluntarios_talleres_dashboard
}
