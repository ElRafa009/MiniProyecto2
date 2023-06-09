import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { FlexLayoutModule } from '@angular/flex-layout';

// Servicio
import {ServicioMService} from './servicio-m.service'

// Andrew
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscarCitaComponent } from './buscar-cita/buscar-cita.component';
import { DomseguroPipe } from './domseguro.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaPreguntasComponent } from './ayuda-preguntas/ayuda-preguntas.component';
import { GraficaComponent } from './grafica/grafica.component';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//LUIIIIIIIIIS
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'
import { ConfirmationResultService } from './services/confirmation-result.service';
import * as firebase from 'firebase/app';


  export const firebaseConfig = {
    apiKey: "AIzaSyCnB9asTgDF2DUosOEN3mUGcYvjtyIeIlU",
    authDomain: "proyecto-login-isc6c.firebaseapp.com",
    projectId: "proyecto-login-isc6c",
    storageBucket: "proyecto-login-isc6c.appspot.com",
    messagingSenderId: "400359707658",
    appId: "1:400359707658:web:9967596232989b241abbf3"
  };

  firebase.initializeApp(firebaseConfig);

//Jacky Graficas
import { Chart} from 'chart.js';
import { LoginComponent } from './login/login.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { VerificarComponent } from './verificar/verificar.component';

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
    DomseguroPipe,
    ContactoComponent,
    VerificarComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    AyudaPreguntasComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ ServicioMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
