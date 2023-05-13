import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'; // useful for typechecking+
import dayGridPlugin from '@fullcalendar/daygrid';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css']
})
export class RegistroCitasComponent {
 @Input() medico: string = 'ERR';
  resultado!: string;
  horario!: String;
  medico2!: void;

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    initialView: 'dayGridMonth',
    locale: 'es-MX',
    dateClick: this.handleDateClick.bind(this),
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
      list: 'Agenda',
      prev: 'Anterior',
      next: 'Siguiente'
    },
  };
  eventsPromise: Promise<EventInput> | undefined;

  handleDateClick(arg: { dateStr: string }) {
    const selectedDate = new Date(arg.dateStr);
    const today = new Date();
  
    const datosJSON = localStorage.getItem('datos');
    if (selectedDate < today) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La fecha seleccionada ya ha pasado!',
        footer: '<p>Intenta seleccionando una fecha que aun no ha pasado</p>',
      });
    } else {
      const datosGuardados = JSON.parse(datosJSON || '[]');
      const horasOcupadas = datosGuardados
        .filter((data: any) => data.horario === arg.dateStr)
        .map((data: any) => new Date(data.horario + ' ' + data.formularioContacto.tiempo));
      if (horasOcupadas.length > 0) {
        // la fecha ya tiene citas agendadas, verificar la hora seleccionada
        const horasOcupadasStr = horasOcupadas.map((hora: { toISOString: () => string; }) => hora.toISOString().substring(11, 16));
        const horaSeleccionada = new Date(arg.dateStr + ' ' + this.formularioContacto.value.tiempo);
        const horaSeleccionadaStr = horaSeleccionada.toISOString().substring(11, 16);
        if (horasOcupadasStr.includes(horaSeleccionadaStr)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La hora seleccionada ya está ocupada, por favor selecciona otra hora',
            footer: '<p>Intenta seleccionando otra hora para tu cita</p>',
          });
        } else {
          // la fecha seleccionada tiene citas agendadas pero la hora seleccionada está disponible
          this.horario = arg.dateStr;
        }
      } else {
        // la fecha seleccionada no tiene citas agendadas, seleccionar la hora
        this.horario = arg.dateStr;
      }
    }
  }
  

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    tiempo: new FormControl('', [
      Validators.required,
    ]),
  });

  submit() {
    if (this.formularioContacto.valid)
      this.resultado = 'Todos los datos son válidos';
    this.guardarDatos();
  }

  @Output() medicoSeleccionado = new EventEmitter<string>();

  seleccionarMedico(medico: string) {
    this.medicoSeleccionado.emit(medico);
    this.medico2 = this.medicoSeleccionado.emit(medico);
  }

  guardarDatos() {
    const datosGuardadosJSON = localStorage.getItem('datos');
    let datosGuardados: any[] = [];
    if (datosGuardadosJSON) {
      datosGuardados = JSON.parse(datosGuardadosJSON);
    }

    // Verificar si la fecha y hora seleccionadas ya existen en los datos guardados
    const fechaHoraSeleccionada = new Date(
      this.horario + ' ' + this.formularioContacto.value.tiempo
    );
    const fechaHoraExistente = datosGuardados.find(
      (dato) =>
        new Date(dato.horario).getTime() === fechaHoraSeleccionada.getTime()
    );
    if (fechaHoraExistente) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Este horario ya ha sido agendado!',
        footer: '<p>Intenta utilizando otro horario</p>',
      });
      // alert('La fecha y hora seleccionadas intenta seleccionando otra hora o fecha.');
    } else {
      // Guardar los datos
      const data = {
        formularioContacto: this.formularioContacto.value,
        horario: fechaHoraSeleccionada.toISOString().substring(0, 10),
        medico: this.medico,
      };
      //datosGuardados.push(data);
      //localStorage.setItem('datos', JSON.stringify(datosGuardados));
      //alert("Ok");
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás cambiar la agenda después!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, aceptar!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Agendado!', 'Tu cita ha sido agendada.', 'success');
          datosGuardados.push(data);
          localStorage.setItem('datos', JSON.stringify(datosGuardados));
        }
      });
    }
  }
}
