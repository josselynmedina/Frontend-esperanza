import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm }  from "@angular/forms";

@Component({
  selector: 'app-registro-habilidades',
  templateUrl: './registro-habilidades.component.html',
  styleUrls: ['./registro-habilidades.component.css']
})
export class RegistroHabilidadesComponent implements OnInit {

  @ViewChild('forma')Pro_form:NgForm;

  constructor() { }

  ngOnInit() {
  }

  getForm(){
    return this.Pro_form.value;
  }

  valid(){
    return this.Pro_form.valid;
  }
}
