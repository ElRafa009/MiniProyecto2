import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-citas',
  templateUrl: './reporte-citas.component.html',
  styleUrls: ['./reporte-citas.component.css']
})
export class ReporteCitasComponent {
  datos: any;
  constructor() {
    // Recupera los datos del almacenamiento local del navegador
    var datosJSON = localStorage.getItem('datos');
    if (datosJSON) {
      this.datos = JSON.parse(datosJSON);
    }
  }
}
