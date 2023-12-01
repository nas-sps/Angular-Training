import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private readonly http: HttpClient) {}
  getProducts(search?: string): Observable<any> {
    return this.http.get<any>(
      !search || search === ''
        ? `https://dummyjson.com/products/`
        : `https://dummyjson.com/products/search?q=${search}`
    );
  }
}
