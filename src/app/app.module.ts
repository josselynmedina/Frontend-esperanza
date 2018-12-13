import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule }  from "@angular/cdk/scrolling";
import { app_routing } from './app.routing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule }  from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './Controller/home/home.component';
import { RegistroComponent } from './Controller/registro/registro.component';
import { CalendarioComponent } from './Controller/calendario/calendario.component';
import { VoluntariosInfoComponent } from './Controller/voluntarios-info/voluntarios-info.component';
import { VoluntariosMainComponent } from './Controller/voluntarios-main/voluntarios-main.component';
import { VoluntariosContactosComponent } from './Controller/voluntarios-contactos/voluntarios-contactos.component';
import { VoluntariosDisponibilidadComponent } from './Controller/voluntarios-disponibilidad/voluntarios-disponibilidad.component';
import { VoluntariosHabilidadesComponent } from './Controller/voluntarios-habilidades/voluntarios-habilidades.component';
import { VoluntariosTalleresComponent } from './Controller/voluntarios-talleres/voluntarios-talleres.component';
import { TalleresComponent } from './Controller/talleres/talleres.component';
import { MenuNavegacionComponent } from './Controller/menu-navegacion/menu-navegacion.component';
import { RegistroInfoComponent } from './Controller/registro-info/registro-info.component';
import { RegistroContactoComponent } from './Controller/registro-contacto/registro-contacto.component';
import { RegistroDisponibilidadComponent } from './Controller/registro-disponibilidad/registro-disponibilidad.component';
import { RegistroHabilidadesComponent } from './Controller/registro-habilidades/registro-habilidades.component';
import { VoluntariosDisponibilidadItemComponent } from './Controller/voluntarios-disponibilidad-item/voluntarios-disponibilidad-item.component';
import { DashboardVoluntariosComponent } from './Controller/dashboard-voluntarios/dashboard-voluntarios.component';
import { DashboardTalleresComponent } from './Controller/dashboard-talleres/dashboard-talleres.component';
import { DashboardHabilidadesComponent } from './Controller/dashboard-habilidades/dashboard-habilidades.component';
import { DashboardChartComponent } from './Controller/dashboard-chart/dashboard-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    CalendarioComponent,
    VoluntariosInfoComponent,
    VoluntariosMainComponent,
    VoluntariosContactosComponent,
    VoluntariosDisponibilidadComponent,
    VoluntariosHabilidadesComponent,
    VoluntariosTalleresComponent,
    TalleresComponent,
    MenuNavegacionComponent,
    RegistroInfoComponent,
    RegistroContactoComponent,
    RegistroDisponibilidadComponent,
    RegistroHabilidadesComponent,
    VoluntariosDisponibilidadItemComponent,
    DashboardVoluntariosComponent,
    DashboardTalleresComponent,
    DashboardHabilidadesComponent,
    DashboardChartComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
