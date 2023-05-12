import { Component } from '@angular/core';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent {

  mostrarMedico = "true";

  recibir(mostrarMedico: string){
    this.mostrarMedico = mostrarMedico;
    console.log("mostrarMedico: " + mostrarMedico);
  }

}
