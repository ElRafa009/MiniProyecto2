import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-buscar-cita',
  templateUrl: './buscar-cita.component.html',
  styleUrls: ['./buscar-cita.component.css']
})
export class BuscarCitaComponent {
  nombre: string = '';
  existe: boolean = false;
  datosJSON: any;
  datos: any;
  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.nombre = this.rutaActiva.snapshot.params['nombre'];

    this.rutaActiva.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
    });

    this.datosJSON = localStorage.getItem('datos');
    //console.log('Encontrado: ');
    //console.log(this.datosJSON);

    //Buscar nombre en datosJSON y mostrar

    this.datos = JSON.parse(this.datosJSON);

    /*let encontrado = datos.find((dato: { nombre: string; }) => dato.nombre === this.nombre);

    if (encontrado) {
      this.existe = true;
    }*/

    for (let dato of this.datos) {
      console.log(dato.formularioContacto.nombre + " ? " + this.nombre);
      if (dato.formularioContacto.nombre === this.nombre) {
        this.existe = true;
      }

    }

  }
}
