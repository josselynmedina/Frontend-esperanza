import { VoluntarioUpdateService } from '../../Service/voluntario-update.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntarios-info',
  templateUrl: './voluntarios-info.component.html',
  styleUrls: ['./voluntarios-info.component.css']
})
export class VoluntariosInfoComponent implements OnInit {

  data;
  nombre = 'VoluntariosInfoComponent';
  actualizado = false;

  constructor(private Pro_Update:VoluntarioUpdateService) { }

  ngOnInit() {
  }

  setData(p_data){
    this.data = p_data;
  }

  update(){
    if (this.data) {
      this.Pro_Update.updateInfo(this.data).subscribe(data=>{
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
