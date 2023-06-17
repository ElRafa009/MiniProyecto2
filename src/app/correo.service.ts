import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  constructor(private httpClient: HttpClient) {}

  contacto(url: string, body: any) {
    return this.httpClient.post(url, body).toPromise();
  }
}
