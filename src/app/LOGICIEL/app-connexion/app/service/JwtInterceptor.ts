import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();  // Récupérer le token depuis le localStorage

    // Si le token est présent, ajouter l'en-tête Authorization
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`  // Ajout du token JWT
        }
      });
      return next.handle(cloned);  // Envoyer la requête modifiée
    }

    return next.handle(req);  // Si aucun token, envoyer la requête originale
  }
}
