import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm }  from "@angular/forms";

@Component({
  selector: 'app-registro-contacto',
  templateUrl: './registro-contacto.component.html',
  styleUrls: ['./registro-contacto.component.css']
})
export class RegistroContactoComponent implements OnInit {

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
