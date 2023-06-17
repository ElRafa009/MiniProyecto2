import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  contactForm!: FormGroup;

 // constructor(private correoService: CorreoService) { }
  
 

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Enviar el formularigffgo
      /*const { name, apellido, email, message } = this.contactForm.value;
      //this.correoService.enviarCorreo(name, apellido, email, message)
        .subscribe(
          () => {
            console.log('Correo enviado correctamente');
            // Aquí puedes agregar el código para mostrar un mensaje de éxito o redirigir a otra página
          },
          (          error: any) => {
            console.error('Error al enviar el correo', error);
            // Aquí puedes agregar el código para mostrar un mensaje de error
          }
        );*/
      console.log(this.contactForm.value);

    } else {
      // Formulario inválido, mostrar errores
      this.validateAllFormFields(this.contactForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}


