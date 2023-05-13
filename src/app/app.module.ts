import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReporteCitasComponent } from './reporte-citas/reporte-citas.component';
import { RegistroCitasComponent } from './registro-citas/registro-citas.component';
import { CitaMedicoComponent } from './cita-medico/cita-medico.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { EnlaceComponent } from './enlace/enlace.component';

// Angular Materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Servicio
import {ServicioMService} from './servicio-m.service'

// Andrew
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscarCitaComponent } from './buscar-cita/buscar-cita.component';
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
    PortafolioComponent,
    BuscarCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ ServicioMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
