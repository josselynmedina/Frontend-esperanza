import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../assets/register.component.css']
})
export class RegisterComponent implements OnInit {

  name = 'Angular';
  forma: FormGroup;

  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

}
