import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private firestore: AngularFirestore) { }

  getCitas(): Observable<any> {
    return this.firestore.collection('citas').snapshotChanges();
  }

  createCita(cita: any): Promise<any> {
    return this.firestore.collection('citas').add(cita);
  }

  updateCita(id: string, cita: any): Promise<any> {
    return this.firestore.collection('citas').doc(id).update(cita);
  }

  deleteCita(id: string): Promise<any> {
    return this.firestore.collection('citas').doc(id).delete();
  }
}