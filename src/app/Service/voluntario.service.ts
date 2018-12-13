import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  constructor(private Pro_http:HttpClient) { }

  inserVoluntario(p_voluntario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.post('api/voluntarios/new', p_voluntario, { headers }).pipe(map((result: any) => {
      return result;
    }));
  }

  getVoluntarios(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.get('api/searchVoluntarios').pipe(map((result: any) => {
      return result;
    }));
  }

  getVoluntario(p_id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    return this.Pro_http.get(`api/voluntario/${p_id}`).pipe(map((result: any) => {
      return result;
    }));
  }
}
