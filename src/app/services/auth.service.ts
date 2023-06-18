import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  userRole$: Observable<string | null>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.user$ = this.afAuth.authState;
    this.userRole$ = this.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`Usuarios/${user.uid}`).valueChanges().pipe(
            map((userData: any) => userData.role)
          );
        } else {
          return of(null);
        }
      })
    );
  }

  isAdmin(): Observable<boolean> {
    return this.userRole$.pipe(map(role => role === 'admin'));
  }

  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(map(user => !!user));
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getUserEmail(): Observable<string | null> {
    return this.user$.pipe(map(user => user ? user.email : null));
  }
}