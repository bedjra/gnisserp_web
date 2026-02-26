import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Client } from '../MODELS/client';
import { environment } from '../MODELS/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/client`, client).pipe(
      catchError((error) => {
        console.error('Erreur réseau :', error);
        return throwError(() => new Error('Erreur réseau. Veuillez réessayer.'));
      })
    );
  }

  // PUT: Modifier un client existant
  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/client`, client);
  }

  // DELETE: Supprimer un client existant
   delete(clientId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/client/${clientId}`, {
    responseType: 'text'
  });
}
  // GET: Récupérer tous les clients
  getAllClients(): Observable<Client[]> {
  return this.http.get<Client[]>(`${this.apiUrl}/client`).pipe(
    map((data: any) => data.content ? data.content : data), // ⚡ Important
    catchError((error) => {
      console.error('Erreur lors de la récupération des clients :', error);
      return throwError(() => new Error('Erreur réseau. Veuillez réessayer.'));
    })
  );
}

}
