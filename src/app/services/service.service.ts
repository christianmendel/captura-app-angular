import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  enviarEmail(params: any) {
    return this.http.post(
      'https://formsubmit.co/ajax/seuEmail@email.com',
      params
    );
  }
}
