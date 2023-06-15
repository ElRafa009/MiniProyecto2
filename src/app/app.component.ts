import { Component } from '@angular/core';
import { Accessibility } from 'accessibility/dist/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniProyectoWeb2';
  labels: any;
  constructor() {
    var option = new Accessibility({
      language: {
        textToSpeechLang: 'es-ES',
        speechToTextLang: 'es-ES'
      },
      labels:{
        resetTitle: 'Reiniciar',
        closeTitle: 'Cerrar',
        menuTitle: 'Accesibilidad',
        increaseText: 'Aumentar tamaño de letra',
        decreaseText: 'Disminuir tamaño de letra',
        increaseTextSpacing: 'Aumentar espaciado horizontal',
        decreaseTextSpacing: 'Disinuir espaciado horizontal',
        increaseLineHeight: 'Aumentar espaciado vertical',
        decreaseLineHeight: 'Disminuir espaciado vertical',
        invertColors: 'Invertir colores',
        grayHues: 'Escala de Grises',
        underlineLinks: 'Subrayar links',
        bigCursor: ' Cursor más grande',
        readingGuide: 'Guía de lectura',
        textToSpeech:'Lector de pantalla',
        speechToText: 'Dictado de texto',
        disableAnimations: 'Desabilitar animaciones',
        screenReader: 'Lector de pantalla'
      },
      icon: {

        circular: true,
        
        img: 'accessibility',
        
        },
      
        
    });
    option.disableUnsupportedModules();
  }
}
