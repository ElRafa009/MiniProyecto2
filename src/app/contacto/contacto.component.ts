import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CorreoService } from '../correo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  formulario = {
    name: '',
    apellido: '',
    email: '',
    message: '',
  };

  contactForm!: FormGroup;

  constructor(private correoService: CorreoService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      this.correoService
        .contacto('https://proyectofinal-apis.onrender.com/contacto', this.contactForm.value)
        .then((data) => {
          alert("Correo enviado");
          console.log(data);
        })
        .catch((err) => {
          alert("Correo no enviado");
          console.log(err);
        });
    }
    else {
      this.validateAllFormFields(this.contactForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
