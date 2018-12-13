import { VoluntariosDisponibilidadItemComponent } from '../voluntarios-disponibilidad-item/voluntarios-disponibilidad-item.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-voluntarios-disponibilidad',
  templateUrl: './voluntarios-disponibilidad.component.html',
  styleUrls: ['./voluntarios-disponibilidad.component.css']
})
export class VoluntariosDisponibilidadComponent implements OnInit {

  nombre = 'VoluntariosDisponibilidadComponent';
  data;

  @ViewChild('lunes')Pro_lunes:VoluntariosDisponibilidadItemComponent;
  @ViewChild('martes')Pro_martes:VoluntariosDisponibilidadItemComponent;
  @ViewChild('miercoles')Pro_miercoles:VoluntariosDisponibilidadItemComponent;
  @ViewChild('jueves')Pro_jueves:VoluntariosDisponibilidadItemComponent;
  @ViewChild('viernes')Pro_viernes:VoluntariosDisponibilidadItemComponent;
  @ViewChild('sabado')Pro_sabado:VoluntariosDisponibilidadItemComponent;
  @ViewChild('domingo')Pro_domingo:VoluntariosDisponibilidadItemComponent;

  constructor() { }

  ngOnInit() {
  }

  setData(p_data){
    this.data = p_data;
    this.Pro_lunes.setData(p_data[0]);
    this.Pro_martes.setData(p_data[1]);
    this.Pro_miercoles.setData(p_data[2]);
    this.Pro_jueves.setData(p_data[3]);
    this.Pro_viernes.setData(p_data[4]);
    this.Pro_sabado.setData(p_data[5]);
    this.Pro_domingo.setData(p_data[6]);
  }

}
