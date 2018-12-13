import { VoluntarioUpdateService } from '../../Service/voluntario-update.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voluntarios-disponibilidad-item',
  templateUrl: './voluntarios-disponibilidad-item.component.html',
  styleUrls: ['./voluntarios-disponibilidad-item.component.css']
})
export class VoluntariosDisponibilidadItemComponent implements OnInit {
  @Input() dia_text = "";

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
      // console.log(this.data)
      this.Pro_Update.UpdateDisponibilidad(this.data).subscribe(data=>{
        if (data['id_registro']) {
            this.data = data;
        }
        this.actualizadoEvent();
      },err=>{
        if (err['id_registro']) {
            this.data = err;
        }
        this.actualizadoEvent();
      })
    }
  }

  actualizadoEvent(){
    this.actualizado = true;
    setTimeout(()=>{
      this.actualizado = false;
    }, 2000);
  }

}
