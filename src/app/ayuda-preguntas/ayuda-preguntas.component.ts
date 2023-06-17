import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuda-preguntas',
  templateUrl: './ayuda-preguntas.component.html',
  styleUrls: ['./ayuda-preguntas.component.css']
})
export class AyudaPreguntasComponent {
  faqs: any[] = [
    {
      question: '¿Cuál es el horario de atención?',
      answer: 'Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM.'
    },
    {
      question: '¿Cómo puedo realizar una cita?',
      answer: 'Puedes realizar una cita a través de nuestra página web en la seccion de "solicita cita".'
    },
    {
      question: '¿Cuál es nuestra política de citas?',
      answer: 'Contamos con citas de lunes a domingo de 2 de la tarde a 8 de la noche, sin embargo no se pueden agendar citas que coincidan con una ya agendada.'
    },
    {
      question: '¿Ofrecen mas servicios?',
      answer: 'Sí, ofrecemos servicios no solo medico si no tambien, con dentista, veterianrio, optmetrista, etc. Consutla nuestra pagina para ver los diferentes servicios disponibles'
    }
  ];

  sections: any[] = [
    {
      title: 'Cuenta',
      questions: [
        '¿Cómo puedo crear una cuenta?',
        '¿Cómo puedo restablecer mi contraseña?',
        '¿Cómo puedo actualizar la información de mi cuenta?'
      ]
    },
    {
      title: 'citas',
      questions: [
        '¿Cómo puedo realizar una cita?',
        '¿Cómo puedo consultar mi cita?',
        '¿Cómo puedo cancelar mi cita?'
      ]
    },
    {
      title: 'Servicios',
      questions: [
        '¿Cuales servicios manejamos?',
        '¿Cuál es el costo de los servicios?',
        '¿Ofrecen algun servicio extra?'
      ]
    }
  ];

}
