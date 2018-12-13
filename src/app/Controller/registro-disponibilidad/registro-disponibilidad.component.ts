import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm }  from "@angular/forms";

@Component({
  selector: 'app-registro-disponibilidad',
  templateUrl: './registro-disponibilidad.component.html',
  styleUrls: ['./registro-disponibilidad.component.css']
})

export class RegistroDisponibilidadComponent implements OnInit {

  @ViewChild('forma')Pro_form:NgForm;

  //Variables de entorno
  @Input() dia_semana;
  @Input() id;

  constructor() { }

  getForm(){
    this.Pro_form.value['dia'] = this.id;
    return this.Pro_form.value;
  }

  valid(){
    return this.Pro_form.valid;
  }

  ngOnInit() {
  }


}
