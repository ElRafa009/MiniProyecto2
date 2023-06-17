import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { ReporteCitasComponent } from './reporte-citas/reporte-citas.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BuscarCitaComponent } from './buscar-cita/buscar-cita.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaPreguntasComponent } from './ayuda-preguntas/ayuda-preguntas.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalComponent },
  {path: 'reporte', component: ReporteCitasComponent },
  {path: 'menucita', component: EnlaceComponent },
  {path: 'acercade', component: AcercadeComponent },
  {path: 'portafolio', component: PortafolioComponent },
  {path: 'citas/:nombre', component: BuscarCitaComponent},
  {path: 'contacto', component: ContactoComponent },
  {path: 'ayuda', component: AyudaPreguntasComponent},
  {path: 'login', component: LoginComponent},
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
