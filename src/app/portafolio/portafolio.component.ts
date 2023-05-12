import { Component } from '@angular/core';
import {ServicioMService} from './../servicio-m.service'

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  imagenes:any[] = [];
  constructor(private _Servicio:ServicioMService){
    this.imagenes = _Servicio.obtenerLinks();
  }

}
