import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './authResponse';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private tokenKey = 'authToken';
  private userKey = 'userInfo';

  constructor(private http: HttpClient) { }

  login(username: string, password: string, role: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8060/api/auth/login', { username, password, role }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    });
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }


  saveUserInfo(user: any) {
    localStorage.setItem(this.userKey, JSON.stringify({
      userId: user.userId,  // Enregistrer en tant que userId
      username: user.username,
      role: user.role
    }));
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);  // Supprimer les infos de l'utilisateur lors de la déconnexion
  }

  getUserInfo() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  getUserId() {
    const user = this.getUserInfo();
    return user ? user.userId : null;  // Assurez-vous que userId est utilisé ici
  }


  getUserUsername() {
    const user = this.getUserInfo();
    return user ? user.username : null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;  // Vérifier si un token existe
  }


}
