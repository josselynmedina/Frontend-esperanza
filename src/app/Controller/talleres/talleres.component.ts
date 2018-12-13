import { TalleresService } from '../../Service/talleres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  data = {
  "nombre": "",
  "sesiones" : "",
  "anios_desde":"",
  "anios_hasta":"",
  "encargado":""
  }

  creado = false
  tallereList:any[]=[]

  constructor(private Pro_talleres:TalleresService) {
    this.Pro_talleres.getTalleres().subscribe(dd=>{
      this.tallereList = []
      this.tallereList = dd;
    })
  }

  ngOnInit() {
  }

  insertnew(){
    this.Pro_talleres.InsertTaller(this.data).subscribe(data=>{
      this.insertEfect();

    },err=>{
      this.insertEfect();
    });
  }

  insertEfect(){
    this.creado = true;
    setTimeout(()=>{
      this.creado = false;
      this.Pro_talleres.getTalleres().subscribe(dd=>{
        this.tallereList = []
        this.tallereList = dd;
      })
      this.data = {
      "nombre": "",
      "sesiones" : "",
      "anios_desde":"",
      "anios_hasta":"",
      "encargado":""
      }

    }, 3000);
  }

  finalizarTaller(p_event){
    let item = {
      id_taller:p_event.id_taller,
      finalizado: p_event.finalizado
    }

    this.Pro_talleres.updateTallerFinalizado(item).subscribe(ddr=>{
    },err=>{
    })
  }
}
