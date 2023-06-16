import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor(private http: HttpClient) {
    window.onload = () => {
      this.generarCodigoQR();
    };
  }
  imagenCodigoUrl: string = '';

  generarCodigoQR(): void {
    console.log('Generar()');
    // Solicitud HTTP al API
    this.http
      .get<any>('https://proyectofinal-apis.onrender.com/codigoqr')
      .subscribe(
        (respuesta) => {
          // El código QR generado estará en la propiedad "url" de la respuesta
          this.imagenCodigoUrl = respuesta.imagenCodigoUrl;
          const canvas = document.getElementById('QR') as HTMLCanvasElement;
          const context = canvas.getContext('2d');
          const mensaje = document.getElementById('mensaje') as HTMLElement;

          if (context) {
            const img = new Image();
            img.src = this.imagenCodigoUrl;

            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              context.drawImage(img, 0, 0);
              canvas.style.display = 'block';
              mensaje.style.display = 'block';
              if (mensaje) mensaje.innerHTML = '¡Escanéame!';
            };
          } else {
            console.error(
              'No se pudo obtener el contexto de dibujo 2D del canvas.'
            );
            if (mensaje) mensaje.innerHTML = 'No se pudo generar el QR :(';
          }
        },
        (error) => {
          console.error(error);
          const mensaje = document.getElementById('mensaje');
          if (mensaje) mensaje.innerHTML = 'No se pudo acceder al API';
        }
      );
  }
}
