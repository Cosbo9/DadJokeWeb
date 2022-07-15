import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JokeModel } from '../models/joke-model.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getJoke() {
    return this.http.get<JokeModel>('https://icanhazdadjoke.com/', {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }
}
