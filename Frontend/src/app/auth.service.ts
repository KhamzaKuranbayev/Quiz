import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(credentials) {
    this.http.post<any>('https://localhost:44382/api/account', credentials, {responseType: 'text' as 'json'}).subscribe(response => {
      localStorage.setItem('token', response);
    })
  }
}
