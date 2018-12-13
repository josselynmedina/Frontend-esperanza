import { DashboardVoluntariosComponent } from './Controller/dashboard-voluntarios/dashboard-voluntarios.component';
import { VoluntariosTalleresComponent } from './Controller/voluntarios-talleres/voluntarios-talleres.component';
import { VoluntariosMainComponent } from './Controller/voluntarios-main/voluntarios-main.component';
import { VoluntariosInfoComponent } from './Controller/voluntarios-info/voluntarios-info.component';
import { VoluntariosHabilidadesComponent } from './Controller/voluntarios-habilidades/voluntarios-habilidades.component';
import { VoluntariosDisponibilidadComponent } from './Controller/voluntarios-disponibilidad/voluntarios-disponibilidad.component';
import { VoluntariosContactosComponent } from './Controller/voluntarios-contactos/voluntarios-contactos.component';
import { TalleresComponent } from './Controller/talleres/talleres.component';
import { RegistroComponent } from './Controller/registro/registro.component';
import { HomeComponent } from './Controller/home/home.component';
import { CalendarioComponent } from './Controller/calendario/calendario.component';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Calendario', component: CalendarioComponent },
  { path: 'Talleres', component: TalleresComponent },
  { path: 'DashBoard', component: DashboardVoluntariosComponent},
  { path: 'Voluntarios', component: VoluntariosMainComponent,
    children:[
      { path: 'Informacion', component: VoluntariosInfoComponent },
      { path: 'Contactos', component: VoluntariosContactosComponent },
      { path: 'Disponibilidad', component: VoluntariosDisponibilidadComponent },
      { path: 'Habilidades', component: VoluntariosHabilidadesComponent },
      { path: 'Talleres', component: VoluntariosTalleresComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
