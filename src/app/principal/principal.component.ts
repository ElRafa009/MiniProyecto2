import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  selectedOption: string = "";
  feedback: string = "";

  valores = ['oj3SSLj0Xyc', 'cxOnXZDpnD8', 'ySzldNXmMzc', 'zSqDbKk6ecs'];
  indice = Math.floor(Math.random() * this.valores.length);
  video = this.valores[this.indice];

  submit() {
    console.log(`Opción seleccionada: ${this.selectedOption}`);
    console.log(`Comentario: ${this.feedback}`);
  }
}
