import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cita-medico',
  templateUrl: './cita-medico.component.html',
  styleUrls: ['./cita-medico.component.css']
})
export class CitaMedicoComponent {
  @Output() mostrarMedico = new EventEmitter<string>();
  hover: boolean = false;
  medico!: string;

  onHover(isHovering: boolean) {
    this.hover = isHovering;
  }

  seleccionarMedico(medico: string) {
    this.medico = medico;
    this.mostrarMedico.emit(medico);
    console.log(medico + '\n' + this.mostrarMedico);
  }
  
  constructor() { }
}
