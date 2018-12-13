import { VoluntarioService } from '../../Service/voluntario.service';
import { RegistroInfoComponent } from '../registro-info/registro-info.component';
import { RegistroHabilidadesComponent } from '../registro-habilidades/registro-habilidades.component';
import { RegistroDisponibilidadComponent } from '../registro-disponibilidad/registro-disponibilidad.component';
import { RegistroContactoComponent } from '../registro-contacto/registro-contacto.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm }  from "@angular/forms";
import  { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    @ViewChild('info') Pro_info: RegistroInfoComponent;
    @ViewChild('contacto') Pro_contacto: RegistroContactoComponent;
    @ViewChild('disponibilidadLun') Pro_disponibilidadLun: RegistroDisponibilidadComponent;
    @ViewChild('disponibilidadMar') Pro_disponibilidadMar: RegistroDisponibilidadComponent;
    @ViewChild('disponibilidadMie') Pro_disponibilidadMie: RegistroDisponibilidadComponent;
    @ViewChild('disponibilidadJue') Pro_disponibilidadJue: RegistroDisponibilidadComponent;
    @ViewChild('disponibilidadVie') Pro_disponibilidadVie: RegistroDisponibilidadComponent;
    @ViewChild('disponibilidadSab') Pro_disponibilidadSab: RegistroDisponibilidadComponent;
    @ViewChild('disponibilidadDom') Pro_disponibilidadDom: RegistroDisponibilidadComponent;
    @ViewChild('habilidades') Pro_habilidad: RegistroHabilidadesComponent;

    //Variables
    validado = false;
    validadoClick=true;
    creado = false;

  constructor(private Pro_voluntarios:VoluntarioService,
              private Pro_router:Router) {

  }

  ngOnInit() {
  }

  validacion(){
    if (!this.Pro_info.valid() ||
        !this.Pro_contacto.valid() ||
        !this.Pro_habilidad.valid() ||
        !this.Pro_disponibilidadLun.valid() ||
        !this.Pro_disponibilidadMar.valid() ||
        !this.Pro_disponibilidadMie.valid() ||
        !this.Pro_disponibilidadJue.valid() ||
        !this.Pro_disponibilidadVie.valid() ||
        !this.Pro_disponibilidadSab.valid() ||
        !this.Pro_disponibilidadDom.valid()
      ) {
        this.validado = false;
        this.validadoClick = false;
        return false;
    }
    else{
      this.validado = true;
      this.validadoClick = true;
      return true;
    }
  }

  async guardar(){
    await this.validacion()

    if (this.validado) {
      let voluntario = {
        informacion: this.Pro_info.getForm(),
        contacto: this.Pro_contacto.getForm(),
        disponibilidad: [
          this.Pro_disponibilidadLun.getForm(),
          this.Pro_disponibilidadMar.getForm(),
          this.Pro_disponibilidadMie.getForm(),
          this.Pro_disponibilidadJue.getForm(),
          this.Pro_disponibilidadVie.getForm(),
          this.Pro_disponibilidadSab.getForm(),
          this.Pro_disponibilidadDom.getForm(),
        ],
        habilidades: this.Pro_habilidad.getForm()
      }

      this.Pro_voluntarios.inserVoluntario(voluntario).subscribe(data=>{
        this.creado = true;

        setTimeout(()=>{    //<<<---    using ()=> syntax
          this.Pro_router.navigate(['']).then(()=>{
            this.Pro_router.navigate(['Registro'])
          })
        }, 2000);
      }, err=>{
        this.creado = true;

        setTimeout(()=>{    //<<<---    using ()=> syntax
          this.Pro_router.navigate(['']).then(()=>{
            this.Pro_router.navigate(['Registro'])
          })
        }, 2000);
      })
    }
  }
}
