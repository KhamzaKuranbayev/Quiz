import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credentials) {
    this.http.post<any>('https://localhost:44382/api/account', credentials, {responseType: 'text' as 'json'}).subscribe(response => {
      this.afterLogin(response);
    })
  }

  login(credentials) {
    this.http.post<any>('https://localhost:44382/api/account/login', credentials, {responseType: 'text' as 'json'}).subscribe(response => {
      this.afterLogin(response);
    })
  }

  logout() {
    localStorage.removeItem('token');
  }

  afterLogin(response) {
    localStorage.setItem('token', response);
    this.router.navigate(['/'])
  }
}
