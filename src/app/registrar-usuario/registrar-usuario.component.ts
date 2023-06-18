import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private afs: AngularFirestore
    
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassowrd = this.registrarUsuario.value.repetirPassword;

    if (password !== repetirPassowrd) {
      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        this.verificarCorreo();
        var user = userCredential.user;
        if (user) {
          // Aquí puedes acceder al UID del usuario
          var uid = user.uid;
    
          // Ahora puedes usar este UID para crear un nuevo documento para el usuario en Firestore
          this.afs.collection('Usuarios').doc(uid).set({
            role: 'user', // O 'admin' si el usuario es un administrador
            // Puedes agregar más campos aquí si lo necesitas
          });
        } else {
          // Aquí puedes manejar el caso improbable de que 'user' sea 'null'
          console.error('No se creó ningún usuario');
        }
      })
      .catch((error) => {
      });
  }

  verificarCorreo() {
    this.afAuth.currentUser.then((user) => user?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}