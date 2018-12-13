import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm }  from "@angular/forms";
@Component({
  selector: 'app-registro-info',
  templateUrl: './registro-info.component.html',
  styleUrls: ['./registro-info.component.css']
})
export class RegistroInfoComponent implements OnInit {

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
  ver(){
    console.log(this.Pro_form.valid);
  }

}
