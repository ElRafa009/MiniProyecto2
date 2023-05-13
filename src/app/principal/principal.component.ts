import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  selectedOption: string = "";
  feedback: string = "";

  submit() {
    console.log(`Opción seleccionada: ${this.selectedOption}`);
    console.log(`Comentario: ${this.feedback}`);
  }
}
