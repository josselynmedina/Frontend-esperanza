import { ExcelService } from '../../Service/excel.service';
import { VoluntarioService } from '../../Service/voluntario.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router }  from "@angular/router";
@Component({
  selector: 'app-voluntarios-main',
  templateUrl: './voluntarios-main.component.html',
  styleUrls: ['./voluntarios-main.component.css']
})
export class VoluntariosMainComponent implements OnInit {

  voluntarios:any[] = []
  voluntario;

  constructor(private Pro_voluntario:VoluntarioService,
              private Pro_router:Router,
              private Pro_excel:ExcelService) {
    this.Pro_voluntario.getVoluntarios().subscribe(data=>{
      this.voluntarios = data;
    })
  }

  ngOnInit() {
  }

  recuperarVoluntario(p_voluntario){
    this.Pro_voluntario.getVoluntario(p_voluntario).subscribe(data=>{
      this.voluntario = data;
      this.Pro_router.navigate(['Voluntarios','Contactos']).then(()=>{
        this.Pro_router.navigate(['Voluntarios','Informacion'])
      })
    })
  }

  onActivate(p_control){
    if (this.voluntario) {
      switch(p_control.nombre){
          case 'VoluntariosContactosComponent':
            p_control.setData(this.voluntario.contactos[0]);
            break;
          case 'VoluntariosDisponibilidadComponent':
            p_control.setData(this.voluntario.disponibilidad);
            break;
          case 'VoluntariosHabilidadesComponent':
            p_control.setData(this.voluntario.habilidades);
            break;
          case 'VoluntariosInfoComponent':
            p_control.setData(this.voluntario.voluntarios[0]);
            break;
          case 'VoluntariosTalleresComponent':
            p_control.setData(this.voluntario.talleres);
            p_control.id_registro = this.voluntario.voluntarios[0].id_registro
            break;
      }
    }
  }

  export(){
    let tt = [
      this.voluntario.voluntarios[0]
    ]
    this.Pro_excel.exportAsExcelFile(tt, 'voluntiro');
  }

}
