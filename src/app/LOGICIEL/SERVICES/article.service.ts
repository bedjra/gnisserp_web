import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../MODELS/article';
import { environment } from '../MODELS/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = environment.apiUrl + '/article';

  constructor(private http: HttpClient) { }

  // ✅ GET /article
  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  // ✅ GET /article/{id}
  getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  // ✅ POST /article
  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  

  // ✅ PUT /article
  update(article: Article): Observable<Article> {
    return this.http.put<Article>(this.apiUrl, article);
  }

  // ✅ DELETE /article/{id}
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // ✅ GET /article/search
  search(keyword: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/search?keyword=${keyword}`);
  }

}