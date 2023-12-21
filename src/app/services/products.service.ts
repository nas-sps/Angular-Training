import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  apiUrl = 'https://api.escuelajs.co/api/v1/products/';
  
  constructor(private readonly http: HttpClient) {}

  getProducts(search?: string): Observable<any> {
    return this.http.get<any>(
      !search || search === ''
        ? `https://dummyjson.com/products/`
        : `https://dummyjson.com/products/search?q=${search}`
    );
  }

  getProductsForSale(params: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}