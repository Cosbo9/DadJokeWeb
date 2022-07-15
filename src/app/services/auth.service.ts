import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any) {
    return this.http.post("https://deviseapi.herokuapp.com/signup", user, {
      observe: 'response',
    })
  }

  login(user: any) {
    return this.http.post("https://deviseapi.herokuapp.com/login", user, {
      observe: 'response',
    })
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    let token = this.getToken();
    if (token.length === 20 || token === '') {
      return false;
    } else {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

}
