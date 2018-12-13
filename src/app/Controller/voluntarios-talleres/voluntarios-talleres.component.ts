import { VoluntarioUpdateService } from '../../Service/voluntario-update.service';
import { VoluntarioService } from '../../Service/voluntario.service';
import { TalleresService } from '../../Service/talleres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntarios-talleres',
  templateUrl: './voluntarios-talleres.component.html',
  styleUrls: ['./voluntarios-talleres.component.css']
})
export class VoluntariosTalleresComponent implements OnInit {
  data:any[]=[]
    nombre = 'VoluntariosTalleresComponent';
    talleres_voluntarios:any[]=[]
    id_registro;

  constructor(private Pro_Talleres:TalleresService,
              private Pro_voluntarios:VoluntarioService,
              private Pro_voluntarioUpd:VoluntarioUpdateService) {
    this.Pro_Talleres.getTalleresAsignar().subscribe(dd=>{
      this.talleres_voluntarios = [];
      this.talleres_voluntarios = dd;
    }, err=>{})
  }

  actualizarTaller(p_item){
    let voluntario = {
      	id_taller: p_item.id_taller,
        finalizado: p_item.finalizado,
        sesiones: Number(p_item.sesiones_recibidas),
        id_registro: this.id_registro
    }

    this.Pro_voluntarioUpd.updateTallerVoluntario(voluntario).subscribe(aa=>{},err=>{});
  }


  setData(p_data){
    this.data = p_data;
    console.log('-----------')
    console.log(p_data)
    console.log('-----------')
  }

  ngOnInit() {
  }

  agregarTaller(p_id_taller){
    let vol_taller = {
      id_taller: p_id_taller,
      id_registro: this.id_registro
    }

    this.Pro_Talleres.crearVoluntarioTaller(vol_taller).subscribe(dd=>{
      this.Pro_voluntarios.getVoluntario(this.id_registro).subscribe(aa=>{
        this.data = aa.talleres
      })
    }, err=>{
      this.Pro_voluntarios.getVoluntario(this.id_registro).subscribe(aa=>{
        this.data = aa.talleres
      })
    })
  }

}
