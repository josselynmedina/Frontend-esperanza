import { VoluntarioUpdateService } from '../../Service/voluntario-update.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntarios-habilidades',
  templateUrl: './voluntarios-habilidades.component.html',
  styleUrls: ['./voluntarios-habilidades.component.css']
})
export class VoluntariosHabilidadesComponent implements OnInit {

  data;
  nombre = 'VoluntariosHabilidadesComponent';
  actualizado = false;

  constructor(private Pro_Update:VoluntarioUpdateService) { }

  ngOnInit() {
  }

  setData(p_data){
    this.data = p_data;
  }

  update(){
    // console.log(this.data)
    if (this.data) {
      this.Pro_Update.UpdateHabilidades(this.data).subscribe(ddr=>{
        this.actualizadoEvent();
        this.data = ddr;
        console.log('after carge--------------')
        console.log(this.data)
        console.log('after carge--------------')

      },err=>{
        this.data = err;
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
