import { ExcelService } from '../../Service/excel.service';
import { CalendarioService } from '../../Service/calendario.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TableExport } from "tableexport/dist/js/tableexport";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  creado =false
  fecha_desde;
  fecha_hasta;

  data = {
    "nombre":"",
    "fecha_inicio":"",
    "fecha_fin": "",
    "encargado":"",
    "nota":""
  }

  calendarioList:any[]=[]

  constructor(private Pro_calendar:CalendarioService,
              private Pro_excel:ExcelService) {
  }

  ngOnInit() {
  }

  buscar(){
    this.Pro_calendar.getCalendario(this.fecha_desde, this.fecha_hasta).subscribe(dd=>{
      this.calendarioList = dd;
    })
  }

  export(){
    this.Pro_excel.exportAsExcelFile(this.calendarioList, 'calendario');
  }

  // insertnew(){
  //   this.Pro_calendar.InsertCalendario(this.data).subscribe(data=>{
  //     this.insertEfect();
  //
  //   },err=>{
  //     this.insertEfect();
  //   });
  // }
  //
  // insertEfect(){
  //   this.creado = true;
  //   setTimeout(()=>{
  //     this.creado = false;
  //
  //     this.insertEfect();
  //     this.Pro_calendar.getCalendario().subscribe(dd=>{
  //       this.calendarioList = []
  //       this.calendarioList = dd;
  //     })
  //     this.data = {
  //       "nombre":"",
  //       "fecha_inicio":"",
  //       "fecha_fin": "",
  //       "encargado":"",
  //       "nota":""
  //     }
  //
  //   }, 3000);
  // }


}
