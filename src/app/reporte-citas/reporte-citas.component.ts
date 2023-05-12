import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-citas',
  templateUrl: './reporte-citas.component.html',
  styleUrls: ['./reporte-citas.component.css']
})
export class ReporteCitasComponent {
  //Eliminar datos cuando Andrew suba su parte
  datos = [
    {
      formularioContacto: {
        nombre: 'Andrew',
        mail: 'andrew@gamil.com',
        apellido: 'Bedoy',
        timepo: '15:00',
      },
      horario: '2023-05-12T21:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Junitio',
        mail: 'aosvmo@gmail.com',
        apellido: 'asdlkvmklasv',
        timepo: '16:00',
      },
      horario: '2023-05-12T22:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Junitio',
        mail: 'aosvmo@gmail.com',
        apellido: 'asdlkvmklasv',
        timepo: '16:00',
      },
      horario: '2023-05-13T22:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Rafael',
        mail: 'rafapana@fgsdg.com',
        apellido: 'Palacios',
        timepo: '21:00',
      },
      horario: '2023-05-13T03:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Jacque',
        mail: 'rafapana@fgsdg.com',
        apellido: 'Renivato',
        timepo: '20:00',
      },
      horario: '2023-05-13T02:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Fabian',
        mail: 'Fabian123@gmail.com',
        apellido: 'Macias',
        timepo: '19:00',
      },
      horario: '2023-05-28T01:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Luis Javier ',
        mail: 'luis_jrd15@hotmail.com',
        apellido: 'Reynoso Diaz',
        timepo: '11:00',
      },
      horario: '2023-05-12T17:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Luis Javier ',
        mail: 'luis_jrd15@hotmail.com',
        apellido: 'Reynoso Diaz',
        timepo: '17:00',
      },
      horario: '2023-05-12T23:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'juanito',
        mail: 'luis_jrd15@hotmail.com',
        apellido: 'Reynoso Diaz',
        timepo: '18:00',
      },
      horario: '2023-05-13T00:00:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Fabián',
        mail: 'luis_jrd15@hotmail.com',
        apellido: 'Macías Esparza',
        timepo: '17:30',
      },
      horario: '2023-09-08T23:30:00.000Z',
    },
    {
      formularioContacto: {
        nombre: 'Fabián',
        mail: 'luis_jrd15@hotmail.com',
        apellido: 'Macías Esparza',
        timepo: '17:31',
      },
      horario: '2023-09-08T23:31:00.000Z',
    },
  ];

  // Almacena la cadena en el almacenamiento local del navegador
  constructor() {
    const datosJSON: string = JSON.stringify(this.datos);
    localStorage.setItem('datos', datosJSON);
    this.obtenerDatos();
  }

  obtenerDatos() {
    // Recupera los datos del almacenamiento local del navegador
    var datosJSON = localStorage.getItem('datos');
    console.log(datosJSON);
    /*this.datos.forEach((cita) => {
      const fechaHora = new Date(cita.horario);
      const fecha = fechaHora.toLocaleDateString();
      const hora = fechaHora.toLocaleTimeString();
      //console.log(fecha);
      //console.log(hora);
    });*/
  }
}
