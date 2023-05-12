import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';

import {ServicioMService} from './servicio-m.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReporteCitasComponent } from './reporte-citas/reporte-citas.component';
import { RegistroCitasComponent } from './registro-citas/registro-citas.component';
import { CitaMedicoComponent } from './cita-medico/cita-medico.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcercadeComponent } from './acercade/acercade.component';
import { EnlaceComponent } from './enlace/enlace.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { PortafolioComponent } from './portafolio/portafolio.component';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReporteCitasComponent,
    RegistroCitasComponent,
    CitaMedicoComponent,
    PrincipalComponent,
    FooterComponent,
    AcercadeComponent,
    EnlaceComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FullCalendarModule,
    ReactiveFormsModule
  ],
  providers: [ ServicioMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
