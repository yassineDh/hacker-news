import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_API_ARTICLES = 'https://newsapi.org/v2/everything?q=programming';
const URL_API_SOURCES = 'https://newsapi.org/v2/sources?';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  headers = new HttpHeaders().set(
    'X-Api-Key',
    'd752430e50a943d7adeae367ef6ded46'
  );

  public getArticles(): Observable<any> {
    return this.httpClient.get(URL_API_ARTICLES, { headers: this.headers });
  }

  public getSources(): Observable<any> {
    return this.httpClient.get(URL_API_SOURCES, { headers: this.headers });
  }
}
