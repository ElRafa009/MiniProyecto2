import { Component } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {

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
