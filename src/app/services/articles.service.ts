import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_API = 'https://newsapi.org/v2/top-headlines?country=us';

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
    return this.httpClient.get(URL_API, { headers: this.headers });
  }
}
