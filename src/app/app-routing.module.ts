import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { ReporteCitasComponent } from './reporte-citas/reporte-citas.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BuscarCitaComponent } from './buscar-cita/buscar-cita.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent },
  {path: 'reporte', component: ReporteCitasComponent },
  {path: 'menucita', component: EnlaceComponent },
  {path: 'acercade', component: AcercadeComponent },
  {path: 'portafolio', component: PortafolioComponent },
  {path: 'login', component: LoginComponent },
  {path: 'citas/:nombre', component: BuscarCitaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
