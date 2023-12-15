import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private url = 'http://localhost:3000';
  private headers = new HttpHeaders();

  constructor(private readonly http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.headers = this.headers.set('Authorization', `Bearer ${token}`);
    }
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, data);
  }
  
  getProducts(search?: string): Observable<any> {
    return this.http.get<any>(
      !search || search === ''
        ? `https://dummyjson.com/products/`
        : `https://dummyjson.com/products/search?q=${search}`
    );
  }
}
