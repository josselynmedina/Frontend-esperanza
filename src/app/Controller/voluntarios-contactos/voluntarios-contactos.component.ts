import { VoluntarioUpdateService } from '../../Service/voluntario-update.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntarios-contactos',
  templateUrl: './voluntarios-contactos.component.html',
  styleUrls: ['./voluntarios-contactos.component.css']
})
export class VoluntariosContactosComponent implements OnInit {
  nombre = 'VoluntariosContactosComponent';
  data;
  actualizado = false;

  constructor(private Pro_Update:VoluntarioUpdateService) { }

  ngOnInit() {
  }

  setData(p_data){
    this.data = p_data;
  }

  update(){
    if (this.data) {
      this.Pro_Update.UpdateContacto(this.data).subscribe(data=>{
        this.actualizadoEvent();
      },err=>{
        this.actualizadoEvent();
      })
    }
  }

  actualizadoEvent(){
    this.actualizado = true;
    setTimeout(()=>{
      this.actualizado = false;
    }, 3000);
  }

}
