import {Component,ElementRef,EventEmitter,Input,Output,} from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'; // useful for typechecking+
import dayGridPlugin from '@fullcalendar/daygrid';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CorreoService } from '../correo.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrls: ['./registro-citas.component.css'],
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
      next: 'Siguiente',
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
        .map(
          (data: any) =>
            new Date(data.horario + ' ' + data.formularioContacto.tiempo)
        );
      if (horasOcupadas.length > 0) {
        // la fecha ya tiene citas agendadas, verificar la hora seleccionada
        const horasOcupadasStr = horasOcupadas.map(
          (hora: { toISOString: () => string }) =>
            hora.toISOString().substring(11, 16)
        );
        const horaSeleccionada = new Date(
          arg.dateStr + ' ' + this.formularioContacto.value.tiempo
        );
        const horaSeleccionadaStr = horaSeleccionada
          .toISOString()
          .substring(11, 16);
        if (horasOcupadasStr.includes(horaSeleccionadaStr)) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La hora seleccionada ya está ocupada, por favor selecciona otra hora',
            footer: '<p>Intenta seleccionando otra hora para tu cita</p>',
          });
        } else {
          // la fecha seleccionada tiene citas agendadas pero la hora seleccionada está disponible
          let timerInterval: number | undefined;

          Swal.fire({
            icon: 'success',
            title: 'Tu fecha seleccionada es:',
            html: arg.dateStr,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer()?.querySelector('b');
              if (b) {
                b.textContent = Swal.getTimerLeft()?.toString() ?? '';
              }

              timerInterval = window.setInterval(() => {
                if (b) {
                  b.textContent = Swal.getTimerLeft()?.toString() ?? '';
                }
              }, 100);
            },
            willClose: () => {
              if (timerInterval) {
                window.clearInterval(timerInterval);
              }
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });
          this.horario = arg.dateStr;
        }
      } else {
        // la fecha seleccionada no tiene citas agendadas, seleccionar la hora
        let timerInterval: number | undefined;

        Swal.fire({
          icon: 'success',
          title: 'Tu fecha seleccionada es:',
          html: arg.dateStr,
          timer: 2500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer()?.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft()?.toString() ?? '';
            }

            timerInterval = window.setInterval(() => {
              if (b) {
                b.textContent = Swal.getTimerLeft()?.toString() ?? '';
              }
            }, 100);
          },
          willClose: () => {
            if (timerInterval) {
              window.clearInterval(timerInterval);
            }
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
        });
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
    tiempo: new FormControl('', [Validators.required]),
  });

  submit() {
    if (!this.horario) {
      Swal.fire({
          icon: 'error',
          title: 'Por favor selecciona una fecha antes de continuar'
      });
      return;
  }
  this.guardarDatos();
  }

  @Output() medicoSeleccionado = new EventEmitter<string>();

  seleccionarMedico(medico: string) {
    this.medicoSeleccionado.emit(medico);
    this.medico2 = this.medicoSeleccionado.emit(medico);
  }

  guardarDatos() {
    const fechaHoraSeleccionada = new Date(
      this.horario + ' ' + this.formularioContacto.value.tiempo
    );
  
    const id = this.firestore.createId();
  
    const data = {
      id: id,  // Agrega el ID al objeto
      nombre: this.formularioContacto.value.nombre,
      apellido: this.formularioContacto.value.apellido,
      mail: this.formularioContacto.value.mail,
      fecha: fechaHoraSeleccionada.toISOString().substring(0, 10),
      hora: this.formularioContacto.value.tiempo,
      medico: this.medico
    };
  
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
        this.correoService
          .contacto('https://proyectofinal-apis.onrender.com/agendar', data)
          .then((enviado) => {
            Swal.fire('¡Agendado!', 'Tu cita ha sido agendada. Hemos enviado un correo con la información de la cita.', 'success');
            console.log(enviado);
          })
          .catch((err) => {
            Swal.fire('¡Agendado!', 'Tu cita ha sido agendada. Lamentablemente, el correo con la información de la cita no se pudo enviar.', 'success');
            console.log(err);
          });
  
        this.firestore.collection('citas').doc(id).set(data)
          .then(() => {
            console.log("Document written with ID: ", id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    });
  }

  isLoggedIn$: Observable<boolean>;
  userEmail$: Observable<string | null>;
  constructor(
    private correoService: CorreoService,
    private router: Router,
    private elementRef: ElementRef,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.userEmail$ = this.authService.getUserEmail();

    this.formularioContacto = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      mail: ['', [Validators.required, Validators.email]],
      tiempo: ['', Validators.required]
  });

  }
}
