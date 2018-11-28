import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './page.router';
import { PageComponent } from './page.component';
import { Voluntario } from '../models/voluntarios.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [NopagefoundComponent, DashboardComponent, PageComponent, ContactoComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTES,
    Voluntario
  ],
  exports: [
    NopagefoundComponent,
    PageComponent,
    DashboardComponent
  ]
})
export class PageModule { }
