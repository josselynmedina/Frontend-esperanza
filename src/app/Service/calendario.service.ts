import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private Pro_http:HttpClient) { }

  InsertCalendario(p_calendario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/eventos/new', p_calendario, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getCalendario(p_fecha_desde, p_fecha_hasta){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    let fechas = {
      fecha_desde: p_fecha_desde,
      fecha_hasta: p_fecha_hasta
    }

    return this.Pro_http.post('api/eventos', fechas, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }
}
