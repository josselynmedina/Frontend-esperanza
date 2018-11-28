import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto.model';
import { HttpClient } from '@angular/common/http';
import { urlServicios } from '../config/config';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ContactoService {
   contactos: Contacto;
  constructor(public http: HttpClient) { }

  crearContacto(contactos: Contacto) {
    const url = urlServicios;
    return this.http.post(url, contactos)
    .pipe(map((resp: any) => {
      return resp.contactos;
    }));
  }
}
