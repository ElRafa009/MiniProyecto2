import { Component } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { usuario } from '../../modelo/usuario';
@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {

  andrew: usuario = {
    nombre: "Andrew",
    descripcion: "Guapo sexy filántropo y millonario. Estudiante de la UAA de dia y batman de noche",
  }

  luis: usuario = {
    nombre: "Luis Javier",
    descripcion: "Estudiante de la UAA de la carrera de Ing. en Sistemas Computacionales del salón abajo de los baños que están cerca del jardín de las generaciones",
  }

  jacqueline: usuario = {
    nombre: "Jacqueline",
    descripcion: "Obsesionada con el color rosa y la boyband Big Time Rush, fan de gastar su dinero en merch de BTR",
  }

  fabian: usuario = {
    nombre: "Fabian",
    descripcion: "Inteligente, es como un murciélago, le gusta trabajar de noche, maneja uno de los medios de transporte mas peligrosos que existen en México y le vale.",
  }

  rafael: usuario = {
    nombre: "Rafael",
    descripcion: "Hombre melancólico, amante del cine y en sus tiempos libre se dedica a salvar el mundo, programador de día, hombre enmascarado de noche",
  }

  ngAfterViewInit(): void{
    const map = new Map('map').setView([21.85267,-102.32112], 13);
    tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markerItem = marker([21.85267,-102.32112]).addTo(map).bindPopup("Farmacias Parecidas");

    map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);

  }

}
