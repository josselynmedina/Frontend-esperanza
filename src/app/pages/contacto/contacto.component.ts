import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  constructor(public contactoService: ContactoService, public router: Router) { }

  forma: FormGroup;

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      id_parentesco: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
    });
  }

  Crearcontactos() {
    if (this.forma.invalid) {
      return;
    }
    const contacto = new Contacto(
    this.forma.value.id_registro,
    this.forma.value.nombre,
    this.forma.value.id_parentesto,
    this.forma.value.telefono
    );

    this.contactoService.crearContacto(contacto)
    .subscribe(resp => {
    this.router.navigate(['/contacto/new']);
    });
  }
}
