import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Cita {
  id: string;
  nombre: string;
  apellido: string;
  mail: string;
  fecha: string;
  hora: string;
  medico: string;
}


@Component({
  selector: 'app-reporte-citas',
  templateUrl: './reporte-citas.component.html',
  styleUrls: ['./reporte-citas.component.css']
})
export class ReporteCitasComponent implements OnInit {
  dataUser: any;
  citasCollection: AngularFirestoreCollection<Cita>;
  citas: Observable<Cita[]>;
  citaForm: FormGroup;

  citaIdEditar: string | null = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore,
    private formBuilder: FormBuilder
  ) {
    this.citasCollection = this.firestore.collection<Cita>('citas');
    this.citas = this.citasCollection.valueChanges();
    this.citaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      medico: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      this.dataUser = user;
    });
  }

  guardarCita() {
    if (this.citaForm.valid) {
      const cita: Cita = {
        id: this.citaIdEditar ? this.citaIdEditar : this.firestore.createId(),
        nombre: this.citaForm.get('nombre')?.value,
        apellido: this.citaForm.get('apellido')?.value,
        mail: this.citaForm.get('mail')?.value,
        fecha: this.citaForm.get('fecha')?.value,
        hora: this.citaForm.get('hora')?.value,
        medico: this.citaForm.get('medico')?.value
      };
  
      if (this.citaIdEditar) {
        this.citasCollection.doc(cita.id).update(cita).then(() => {
          this.citaIdEditar = null;  // Resetea el ID de edición después de la actualización
          this.citaForm.reset();     // Limpia el formulario después de la actualización
        });
      } else {
        this.citasCollection.doc(cita.id).set(cita).then(() => {
          this.citaForm.reset();     // Limpia el formulario después de la creación
        });
      }
    }
  }

  eliminarCita(id: string) {
    this.citasCollection.doc(id).delete();
  }

  editarCita(cita: Cita) {
    this.citaIdEditar = cita.id;
    this.citaForm.patchValue({
      nombre: cita.nombre,
      apellido: cita.apellido,
      mail: cita.mail,
      fecha: cita.fecha,
      hora: cita.hora,
      medico: cita.medico
    });
  }
}
