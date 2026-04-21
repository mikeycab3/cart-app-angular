import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]>{
   return this.http.get<Product[]>(this.url);
  }
}
