import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { ReporteCitasComponent } from './reporte-citas/reporte-citas.component';
import { CitaMedicoComponent } from './cita-medico/cita-medico.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent },
  {path: 'reporte', component: ReporteCitasComponent },
  {path: 'menucita', component: CitaMedicoComponent },
  {path: 'acercade', component: AcercadeComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
