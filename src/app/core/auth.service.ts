import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/auth';
  private tokenKey = 'token';
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    const token = this.getToken();
    if (token) this.user$.next({ id: '', email: '' }); // mejorar con decode
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string; user: User }>(`${this.api}/login`, { email, password })
      .pipe(tap(res => this.setSession(res)));
  }

  register(email: string, password: string) {
    return this.http.post<{ token: string; user: User }>(`${this.api}/register`, { email, password })
      .pipe(tap(res => this.setSession(res)));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.user$.next(null);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  private setSession(res: { token: string; user: User }) {
    localStorage.setItem(this.tokenKey, res.token);
    this.user$.next(res.user);
  }
}
